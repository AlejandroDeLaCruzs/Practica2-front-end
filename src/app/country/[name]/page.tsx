"use client";

import { countriesByName } from "@/lib/api/country";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
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
    <div className="mainCointener">
      <h1>Pais: {country.name.official}</h1>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Poblacion: {country.population}</p>
      {Object.entries(country.languages).map(([key, idiom] ) => <p>{idiom}</p>)}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default CountryData;
