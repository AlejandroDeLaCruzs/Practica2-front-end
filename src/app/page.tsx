"use client";
import { useEffect, useState, useMemo } from "react";
import "./globals.css";
import { Country } from "@/types/coutnry";
import { countries } from "@/lib/api/country";
import { CountryCard } from "@/components/CountryCard";

export const Home = () => {
  const [allCountries, setAllCountries] = useState<Country[] | null>(null);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    countries().then((res) => {
      setAllCountries(res?.data ?? null);
      setLoading(false);
    });
  }, []);

   const filtered = allCountries
    ? allCountries.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  return (
    <div className="mainCointener">
      <h1 className="title">Busqueda de paises</h1>
      <div className="searchBox">
        <div className="inputGroup">
          <input
            type="text"
            required
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <label htmlFor="name">Name</label>
        </div>
      </div>
      <div className="countryCointer">
        {filtered &&
          filtered.map((e) => <CountryCard key={e.ccn3} country={e} />)}
      </div>
    </div>
  );
};

export default Home;
