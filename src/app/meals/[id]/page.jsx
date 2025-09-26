import React from 'react'
export async function generateMetadata({ params }) {
 const { id } = await params
    const singleDatafetch = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await singleDatafetch.json()
    const singleData = data.meals?.[0]

    return {
        title: singleData. strCategory,
        description: singleData.strMeal,
    }
}

export default async function page({ params }) {
    const { id } = await params
    const singleDatafetch = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await singleDatafetch.json()
    const singleData = data.meals?.[0]
    console.log(singleData)






    return (
        <div>
            {singleData.strInstructions}
        </div>
    )
}
