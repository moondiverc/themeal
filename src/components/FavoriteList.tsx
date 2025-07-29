import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import type { ProductProps } from "../types/ProductTypes";

export default function Favorites() {
    const [liked, setLiked] = useState<ProductProps[]>(() => {
        const savedLiked = localStorage.getItem("liked");
        return savedLiked ? JSON.parse(savedLiked) : [];
    });

    useEffect(() => {
        localStorage.setItem("liked", JSON.stringify(liked));
    }, [liked]);

    const removeFavorite = (mealId: string) => {
        setLiked(prev => prev.filter(item => item.idMeal !== mealId));
    };

    const clearAllFavorites = () => {
        setLiked([]);
    };

    if (liked.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8" style={{minHeight: 'calc(100vh - 80px)'}}>
                <div className="text-center mb-6 bg-white p-8 rounded-2xl shadow-lg">
                    <h1 className="text-3xl font-bold text-black mb-2">No Favorite Meals Yet!</h1>
                    <p className="text-gray-500 mb-6 text-center">Start exploring meals and add them to your favorites!</p>
                    <Link 
                        to="/products" 
                        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Explore Meals
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 pt-30" style={{ paddingInline: '5%' }}>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-white">My Favorite Meals</h1>
                    <p className="text-gray-300">You have {liked.length} favorite meal{liked.length !== 1 ? 's' : ''}</p>
                </div>
                {liked.length > 0 && (
                    <button 
                        onClick={clearAllFavorites}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Trash2 size={20} />
                        Clear All
                    </button>
                )}
            </div>

            <div className="flex flex-wrap gap-8 m-2 items-start">
                {liked.map((meal) => (
                    <div key={meal.idMeal} className="bg-white p-4 flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow w-[250px]">
                        <Link to={`/products/${meal.idMeal}`}>
                            <div className="overflow-hidden w-full h-[200px] bg-center bg-cover rounded-lg" style={{ backgroundImage: `url(${meal.strMealThumb})`}}></div>
                        </Link>
                        <div className="flex justify-between items-center">
                            <div className="flex-1 min-w-0 mr-2 mt-2">
                                <Link to={`/products/${meal.idMeal}`} className="font-bold text-gray-800 hover:text-amber-500 block">
                                    <h3 className="truncate leading-tight" title={meal.strMeal}>
                                        {meal.strMeal}
                                    </h3>
                                </Link>
                                <div className="text-gray-600 truncate" title={meal.strCategory}>
                                    {meal.strCategory}
                                </div>
                            </div>
                            <button 
                                onClick={() => removeFavorite(meal.idMeal)}
                                className="mt-2 cursor-pointer transition-colors"
                            >
                                <Heart size={30} className="fill-current text-red-500" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}