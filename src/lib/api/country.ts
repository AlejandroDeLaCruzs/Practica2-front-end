import { Country } from "@/types";
import { api } from "./api";

export const countries = async () => {
  try {
    const response = await api.get<Country[]>(`/all?fields=name,flags`);
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
