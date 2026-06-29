import { useState } from "react"
import "./CenterBoard.css"

export default function CenterBoard({banned, setBanned, setHasFetched}) {

    const [meal, setMeal] = useState(null)

    const fetchRandom = async () => {
        let data;
        do {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            data = await response.json()
        } while (
            banned.includes(data.meals[0].strCategory) ||
            banned.includes(data.meals[0].strArea)
        )
        setMeal(data.meals[0])
        setHasFetched(true)
    }


    const banItem = (value) => {
        setBanned([...banned, value])
    }


    return (
        <div className="centerboard">
            <button className='button' onClick={fetchRandom}>Randomize!</button>

            {meal && (
                <div className="meal-card">
                    <h3>{meal.strMeal}</h3>
                    <div className="tags">
                    <button className="tag" onClick={() => banItem(meal.strCategory)}>{meal.strCategory}</button>
                    <button className="tag" onClick={() => banItem(meal.strArea)}>{meal.strArea ? meal.strArea : "N/A"}</button>
                    </div>
                    <h4>Main Ingredients:
                        {[1,2,3].map(i => (
                            <span key={i}> {meal[`strIngredient${i}`]}{i === 3 ? '' : ','}</span>
                        ))}
                    </h4>
                    <div className="flex">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="foodImage"></img>
                        <h5 className="instructions">{meal.strInstructions}</h5>
                    </div>
                </div>
            )}

        </div>
    )
}