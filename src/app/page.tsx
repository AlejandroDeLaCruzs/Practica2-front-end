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
      setCountry(res?.data);
    });
  }, []);

  const fetchBusqueda = async () => {
    const res = name === "" ? await countries() : await countriesByName(name);

    setCountry(res?.data);
  };

  return (
    <div className="mainCointener">
      <h1 className="title">Busqueda de paises</h1>
      <div className="searchBox">
        <div className="inputGroup">
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Name</label>
        </div>
        <button
          onClick={() => {
            fetchBusqueda();
          }}
        >
          Buscar
        </button>
      </div>

      <div className="countryCointer">
        {country &&
          country.map((e) => <CountryCard key={e.ccn3} country={e} />)}
      </div>
    </div>
  );
};

export default Home;
