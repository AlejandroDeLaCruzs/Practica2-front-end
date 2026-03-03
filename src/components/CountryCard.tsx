import { Country } from "@/types/coutnry";
import Link from "next/link";

export const CountryCard = ({ country }: { country: Country }) => {
  return (
    <Link href={`/country/${country.name.common}`}>
      <div>
        <img src={country?.flags.png} />
        <div>{country.name.common}</div>
      </div>
    </Link>
  );
};
