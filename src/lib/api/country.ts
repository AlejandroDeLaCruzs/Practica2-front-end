import { Country } from "@/types";
import { api } from "./api";

export const countries = async (name: string) => {
  try {
    const response = await api.get<Country[]>(
      `${name ? `/name/${name}` : `/all`}` + "?fields=name,flags",
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const countriesByName = async (name: string) => {
  try {
    const response = await api.get<Country[]>(`/name/${name}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
