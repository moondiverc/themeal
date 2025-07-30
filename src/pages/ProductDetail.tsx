import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type { ProductProps } from "../types/ProductTypes";

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const [meal, setMeal] = useState<ProductProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMealDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch meal details");
        }

        const data = await response.json();
        const mealData = data.meals?.[0] || null;
        setMeal(mealData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      getMealDetail();
    }
  }, [productId]);

  if (loading) {
    return (
      <div
        className="text-white text-4xl font-bold flex items-center justify-center"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <h1>Loading meal details...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Error: {error}</h1>
        <Link
          to="/products"
          className="text-blue-500 underline mt-4 inline-block"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  if (!meal) {
    return (
      <div
        className="flex flex-col items-center justify-center p-8 pt-30"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="text-center mb-6 bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-black mb-2">
            Meal Not Found!
          </h1>
          <p className="text-gray-500 mb-6 text-center">
            Start exploring meals and add them to your favorites!
          </p>
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
    <div className="p-8 max-w-6xl mx-auto pt-30">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          {/* content */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>

            <div className="mb-4">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                {meal.strCategory}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {meal.strArea}
              </span>
            </div>

            {meal.strTags && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Tags:</h3>
                <p className="text-gray-600">{meal.strTags}</p>
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Instruction:</h3>
              <p className="text-gray-700 leading-relaxed">
                {meal.strInstructions}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Tutorial:</h3>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 leading-relaxed cursor-pointer hover:text-amber-500 hover:underline"
              >
                {meal.strYoutube}
              </a>
            </div>

            <div className="flex gap-4">
              <Link
                to="/products"
                className="bg-amber-400 text-white px-4 py-2 rounded-md mb-6 inline-block"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
