import { Link } from "react-router-dom";
import type { ProductProps } from "../types/ProductTypes";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { addToFavorites, removeFromFavorites, isFavorite } from "../utils/favorites";

export default function ProductList({ items }: { items: ProductProps[] }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    // Update favorites state when component mounts
    const updateFavorites = () => {
      const favs = JSON.parse(localStorage.getItem('liked') || '[]');
      setFavorites(favs.map((fav: ProductProps) => fav.idMeal));
    };
    
    updateFavorites();
    
    // Listen for storage changes to sync across tabs
    window.addEventListener('storage', updateFavorites);
    
    return () => {
      window.removeEventListener('storage', updateFavorites);
    };
  }, []);

  // Update favorites when items change (after search)
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('liked') || '[]');
    setFavorites(favs.map((fav: ProductProps) => fav.idMeal));
  }, [items]);

  const handleFavoriteToggle = (item: ProductProps) => {
    const isCurrentlyFavorite = isFavorite(item.idMeal);
    
    if (isCurrentlyFavorite) {
      removeFromFavorites(item.idMeal);
      setFavorites(prev => prev.filter(id => id !== item.idMeal));
    } else {
      addToFavorites(item);
      setFavorites(prev => [...prev, item.idMeal]);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-10 m-4 items-start justify-center">
        {items.map((item) => (
          <div key={item.idMeal} className="bg-white p-4 flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Link 
              to={`/products/${item.idMeal}`}
            >
              <div className="overflow-hidden w-[200px] h-[200px] bg-center bg-cover rounded-lg" style={{ backgroundImage: `url(${item.strMealThumb})`}}></div>
            </Link>
            <div className="flex justify-between items-center">
                <div className="mt-2">
                    <div className="font-bold text-gray-800">{item.strMeal}</div>
                    <div className="text-gray-600">{item.strCategory}</div>
                </div>
                <button onClick={() => handleFavoriteToggle(item)}>
                    <Heart 
                      size={30} 
                      className={`mt-2 cursor-pointer transition-colors ${
                        favorites.includes(item.idMeal) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-400 hover:text-red-500'
                      }`} 
                    />
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}