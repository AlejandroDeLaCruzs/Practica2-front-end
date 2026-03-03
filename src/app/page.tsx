"use client";
import { useEffect, useState } from "react";
import "./globals.css";

import { countries } from "@/lib/api/country";
import { CountryCard } from "@/components/CountryCard";
import { Country } from "@/types";

export const Home = () => {
  const [allCountries, setAllCountries] = useState<Country[] | null>(null);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    countries()
      .then((res) => {
        setAllCountries(res?.data ?? null);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = allCountries
    ? allCountries.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  return (
    <div className="mainCointener">
      <h1 className="title">Búsqueda de países</h1>
      <div className="inputGroup">
        <input
          type="text"
          required
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="name">Name</label>
      </div>

      {loading ? (
        <img src="/Loading_icon.gif" className="loading" />
      ) : (
        <div className="countryCointer">
          {filtered &&
            filtered.map((e) => <CountryCard key={e.ccn3} country={e} />)}
        </div>
      )}
    </div>
  );
};

export default Home;