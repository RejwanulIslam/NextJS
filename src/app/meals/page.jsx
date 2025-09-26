import { Montserrat } from "next/font/google";
import Link from "next/link";
import MealSerchInput from "./components/MealSerchInput"
import style from "./meals.module.css"
import Image from "next/image";

const montserrat = Montserrat({
    weight: ["400"],
    subsets: ["latin"],

})

export const metadata = {
    title: "All meals",
    description: "create next app for lerning Next.js",
};
export default async function page(props) {
    const searchParams = await props.searchParams;
    const query = searchParams.search || ''
    console.log(query)
    const fetchMeal = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)//
        const data = await res.json()

        return data.meals
    }
    const meals = await fetchMeal()

    return (
        <div>
            <MealSerchInput></MealSerchInput>
            <div className=' grid grid-cols-4 gap-4'>
                {
                    meals?.map(m => (
                        <div key={m.idMeal} className={`${montserrat.className}`}>
                            <Image src={m.strMealThumb} width={541} height={541} alt={m.strMeal} />
                            <p className={`${style["meals-title"]} text-green-700`} >{m.strMeal}</p>,
                            <p key={m.idMeal}>{m.strInstructions}</p>
                            <Link href={`/meals/${m.idMeal}`} className="btn">Detels</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
