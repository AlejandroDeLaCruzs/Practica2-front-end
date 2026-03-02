import { api } from "./api";

export const countries = async () => {
  try {
    const response = await api.get(`/all?fields=name,capital,flag`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const countriesByName = async (name: string) => {
  try {
    const response = await api.get(`/name/${name}`);
    console.log(response.data)
    return response;
  } catch (error) {
    console.log(error);
  }
};

