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

  const fetchCountries = async (name: string) => {
    setLoading(true);
    await countries(name)
      .then((e) => setAllCountries(e?.data))
      .catch((e) => {
       console.log(`Error al obtener los datos: ${e}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCountries(search);
  }, [search]);


  return (
    <div className="mainCointener">
      <h1 className="title">Búsqueda de países</h1>
      <div className="inputGroup">
        <input
          type="text"
          required
          placeholder="Buscar país..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


      {loading ? (
        <img src="/Loading_icon.gif" className="loading" />
      ) : (
        <div className="countryCointer">
          {allCountries &&
            allCountries.map((e) => <CountryCard key={e.ccn3} country={e} />)}
        </div>
      )}
    </div>
  );
};

export default Home;
