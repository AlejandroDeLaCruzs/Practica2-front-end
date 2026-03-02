"use client";

import { countriesByName } from "@/lib/api/country";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../globals.css";

export const CountryData = () => {
  const { name }: { name: string } = useParams();
  const [country, setCountry] = useState();
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
          <h1>{country.name.official}</h1>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
          <p>Poblacion: {country.population}</p>
          <p className="idiomas">
            Idiomas: {Object.values(country.languages).slice(0, 4).join(", ")}
          </p>
          <p>
            Currecny:{" "}
            {Object.values(country.currencies).map((currency) => currency.name)}
          </p>
        </div>
        <img src={country.flags.png} className="" />
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default CountryData;
