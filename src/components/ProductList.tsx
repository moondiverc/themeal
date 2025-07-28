import { Link } from "react-router-dom";
import type { ProductProps } from "../types/ProductTypes";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { addToFavorites, removeFavorites, isFavorite } from "../utils/favorites";

export default function ProductList({ items }: { items: ProductProps[] }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    // menginisialisasi agar favorite meal tersimpan di localStorage
    const updateFavorites = () => {
      const favs = JSON.parse(localStorage.getItem('liked') || '[]');
      setFavorites(favs.map((fav: ProductProps) => fav.idMeal));
    };
    
    updateFavorites();
  }, []);

  // setiap items nerubah maka akan mengubah state items
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('liked') || '[]');
    setFavorites(favs.map((fav: ProductProps) => fav.idMeal));
  }, [items]);

  // toggle untuk menambah atau menghapus meal dari daftar favorite
  const toggleFavorite = (item: ProductProps) => {
    const isNowFavorite = isFavorite(item.idMeal);

    if (isNowFavorite) {
      removeFavorites(item.idMeal);
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
          <div key={item.idMeal} className="bg-white p-4 flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow w-[250px]">
            <Link to={`/products/${item.idMeal}`}>
              <div className="overflow-hidden w-full h-[200px] bg-center bg-cover rounded-lg" style={{ backgroundImage: `url(${item.strMealThumb})`}}></div>
            </Link>
            <div className="flex justify-between items-start mt-2">
                <div className="flex-1 min-w-0 mr-2 mt-2">
                    <Link to={`/products/${item.idMeal}`} className="font-bold text-gray-800 hover:text-amber-500 block">
                      <h3 className="truncate leading-tight" title={item.strMeal}>
                        {item.strMeal}
                      </h3>
                    </Link>
                    <div className="text-gray-600 truncate" title={item.strCategory}>
                      {item.strCategory}
                    </div>
                </div>
                <button onClick={() => toggleFavorite(item)} className="flex-shrink-0">
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