"use client";
import { countriesByName } from "@/lib/api/country";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../globals.css";
import Link from "next/link";
import { Country } from "@/types";

export const CountryData = () => {
  const { name }: { name: string } = useParams();
  const [country, setCountry] = useState<Country>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    countriesByName(name)
      .then((res) => {
        setCountry(res?.data.at(0));
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [name]);

  return !loading ? (
    <div className="main">
      <div className="contiener">
        <div className="dataCointener">
          <h1>{country?.name.official}</h1>
          <p>Region: {country?.region}</p>
          {country?.capital && <p>Capital: {country.capital}</p>}
          {country?.population && (
            <p>
              Poblacion:{" "}
              {country.population.toLocaleString().replace(/\./g, ". ")}
            </p>
          )}
          {country?.languages && (
            <p className="idiomas">
              Idiomas: {Object.values(country.languages).slice(0, 4).join(", ")}
            </p>
          )}
          {country?.currencies && (
            <p>
              Currency:{" "}
              {Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")}
            </p>
          )}
        </div>
        <div className="countryImage">
          <img src={country?.flags.png} />
          <Link href={`/`} className="backBoton">← Volver</Link>
        </div>
      </div>
    </div>
  ) : (
    <img src="/Loading_icon.gif" className="loading" />
  );
};

export default CountryData;
