import { Country } from "@/types/coutnry"
import Link from "next/link"


export const CountryCard = ({country}: {country: Country}) => {
    return (
        <Link href={`/country/${country.common}`}>
            <div>
                <div>{country.flag}</div>
            </div>
        </Link>
    )
}