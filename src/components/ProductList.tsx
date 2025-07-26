import { Link } from "react-router-dom";
import type { ProductProps } from "../types/ProductTypes";
import { Heart } from "lucide-react";

export default function ProductList({ items }: { items: ProductProps[] }) {
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
                <Heart size={30} className="mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}