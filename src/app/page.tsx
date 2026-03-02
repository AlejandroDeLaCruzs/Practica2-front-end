"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { Country } from "@/types/coutnry";
import { countries, countriesByName } from "@/lib/api/country";
import { CountryCard } from "@/components/CountryCard";

export const Home = () => {
  const [country, setCountry] = useState<Country[] | null>(null);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    countries().then((res) => {
      setCountry(res.data);
    });
  }, []);

  const fetchBusqueda = async () => {
    const res = name === "" ? await countries() : await countriesByName(name);

    setCountry(res?.data);
  };

  return (
    <div className="mainCointener">
      <h1>Busqueda de paises</h1>
      <input onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          fetchBusqueda();
        }}
      >
        Buscar
      </button>
      <div className="countryCointer">
        {country && country.map((e) => <CountryCard key={e.name} country={e} />)}
      </div>
    </div>
  );
};

export default Home;
