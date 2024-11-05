import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutrition from '../assets/nutrition.png'
import { addFavorite, getAllFavorite } from "../utilities/utilities";


const CoffeeDetails = () => {
      const [coffee, setCoffee] = useState({})
      const { coffeeId } = useParams()
      const data = useLoaderData()
      const [isFavorite, setIsFavorite] = useState(false)
      useEffect(() => {
            const singleCoffee = data.find((coffee) => coffee.id === parseInt(coffeeId))
            setCoffee(singleCoffee)
            // get all previously saved item of local storage
            const favorites = getAllFavorite();
            const isExist = favorites.find(item => item.id == singleCoffee.id)
            if (isExist) {
                  setIsFavorite(true)
            }
      }, [data, coffeeId])

      const { name, image, description, ingredients, making_process, rating, popularity, nutrition_info } = coffee || {};

      // Add Favorite button functionality...
      const handleFavorite = coffee => {
            addFavorite(coffee)
            setIsFavorite(true)
      };


      return (
            <div>
                  <h2 className="text-5xl font-semibold pb-6">{description}</h2>
                  <div className="h-[600px] rounded-xl overflow-hidden">
                        <img src={image} alt={`${name} photo`} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between pt-8">
                        <div className="space-y-2">
                              <h3 className="text-3xl font-semibold">{name}</h3>
                              <p className="font-semibold text-lg">Popularity:{popularity}</p>
                              <p className="font-semibold text-lg">Rating:{rating}</p>
                        </div>
                        <button onClick={() => handleFavorite(coffee)}
                              disabled={isFavorite}
                              className="btn btn-warning">Add Favorite</button>
                  </div>
                  <div className="py-8">
                        <h3 className="text-4xl font-semibold">Making Proceess:</h3>
                        <p className="text-lg font-semibold mt-2">{making_process}</p>
                  </div>
                  <div className="py-7 flex justify-between">
                        <div>
                              <div>
                                    <h3 className="text-3xl font-semibold">Ingredients:</h3>
                                    <ul className="list-inside py-6">
                                          {ingredients &&
                                                ingredients.map((ingredient, i) =>
                                                      <li key={i} className="list-disc">{ingredient}</li>
                                                )}
                                    </ul>
                              </div>
                              <div className="my-10">
                                    <h3 className="text-3xl font-semibold">Nutrition:</h3>
                                    <ul className="list-inside py-6">
                                          {nutrition_info &&
                                                Object.keys(nutrition_info).map((n) =>
                                                      <li key={n} className="list-disc">{n}:  {nutrition_info[n]}</li>)
                                          }
                                    </ul>
                              </div>
                        </div>
                        <div>
                              <img src={nutrition} alt='' className="w-[700px]" />
                        </div>
                  </div>
            </div>
      );
};

export default CoffeeDetails;