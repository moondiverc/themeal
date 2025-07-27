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
                <Heart size={64} className="text-gray-400 mb-4" />
                <h1 className="text-3xl font-bold text-white mb-2">No Favorite Meals Yet</h1>
                <p className="text-gray-300 mb-6 text-center">Start exploring meals and add them to your favorites!</p>
                <Link 
                    to="/products" 
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                    Explore Meals
                </Link>
            </div>
        );
    }

    return (
        <div className="p-8">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {liked.map((meal) => (
                    <div key={meal.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <Link to={`/products/${meal.idMeal}`} className="block">
                            <img 
                                src={meal.strMealThumb} 
                                alt={meal.strMeal}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-gray-800 mb-2">{meal.strMeal}</h3>
                                <p className="text-gray-600 text-sm mb-2">{meal.strCategory}</p>
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                    {meal.strArea}
                                </span>
                            </div>
                        </Link>
                        <div className="p-4 pt-0">
                            <button 
                                onClick={() => removeFavorite(meal.idMeal)}
                                className="w-full bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                <Heart size={18} className="fill-current" />
                                Remove from Favorites
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}