import { Search, ArrowUpDown } from "lucide-react";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import type { ProductProps } from "../types/ProductTypes";

export default function Products() {
  const [items, setItems] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // metadata/doc title
  useEffect(() => {
    document.title = "TheMeal | Products";

    return () => {
      document.title = "The Meal";
    };
  }, []);

  // fungsi ambil data dari API
  const getData = async (query: string = "") => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setItems(data.meals ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  // fungsi untuk menangani pencarian (mencari meal)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    getData(searchQuery);
  };

  // toggle buat sorting ascend/descend
  const toggleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);

    const sortedItems = [...items].sort((a, b) => {
      if (newOrder === "asc") {
        return a.strMeal.localeCompare(b.strMeal);
      } else {
        return b.strMeal.localeCompare(a.strMeal);
      }
    });
    setItems(sortedItems);
  };

  // fetch data ketika pertama kali render
  useEffect(() => {
    getData();
  }, []);

  // page ketika loading
  if (loading) {
    return (
      <div
        className="text-white text-4xl font-bold flex items-center justify-center"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  }

  // page ketika error
  if (error) {
    return (
      <div
        className="text-white text-4xl font-bold flex items-center justify-center"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <h1 className="text-center">Error: {error}</h1>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center p-4 pt-30">
      {/* title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent text-center leading-tight pb-1">
        Start Planning Your Meal!
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-center text-gray-400 mb-4">
        Explore our wide range of delicious meal recipes.
      </p>

      {/* search form dan button sorting */}
      <div className="flex justify-center gap-2 sm:gap-4 px-4 sm:px-8 md:px-16 lg:px-20 w-full max-w-2xl">
        <form
          onSubmit={handleSearch}
          className="flex items-center flex-1 max-w-md"
        >
          <input
            className="bg-white rounded-l border border-white px-3 sm:px-4 py-2 text-sm sm:text-base flex-1"
            type="text"
            placeholder="Search for meals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 border border-white border-l-0 px-2 sm:px-3 py-2 transition-colors"
          >
            <Search size={20} className="text-white sm:w-6 sm:h-6" />
          </button>
        </form>
        <button
          type="button"
          onClick={toggleSort}
          className="bg-amber-400 hover:bg-amber-500 border border-white px-3 py-2 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base flex-shrink-0"
          title={sortOrder === "asc" ? "Sort A-Z" : "Sort Z-A"}
        >
          <ArrowUpDown size={16} className="text-white sm:w-5 sm:h-5" />
          <span className="text-white font-semibold">
            {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </span>
        </button>
      </div>

      {/* jika meal tidak ditemukan */}
      {items.length === 0 && !loading && !error && (
        <div className="text-gray-500 text-lg mt-4">No meals found.</div>
      )}
      <ProductList items={items} />
    </main>
  );
}
