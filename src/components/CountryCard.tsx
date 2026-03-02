import { Country } from "@/types/coutnry"
import Link from "next/link"


export const CountryCard = ({country}: {country: Country}) => {
    return (
        <Link href={`/country/${country.name.common}`}>
            <div>
                <div>{country.flag}</div>
                <div>{country.name.common}</div>
            </div>
        </Link>
    )
}