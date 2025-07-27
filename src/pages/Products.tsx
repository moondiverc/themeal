import { Search } from "lucide-react";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import type { ProductProps } from "../types/ProductTypes";

export default function Products() {
    const [items, setItems] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const getData = async (query: string = "") => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
            );
            
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            
            const data = await response.json();
            setItems(data.meals ?? []);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        getData(searchQuery);
    };

    useEffect(() => {
        getData(); // Load all meals on first render
    }, []);

    if (loading) {
        return (
            <div 
                className="text-white text-4xl font-bold flex items-center justify-center"
                style={{height: 'calc(100vh - 80px)'}}
            >
                <h1 className="text-center">Loading...</h1>
            </div>
        );
    }
    
    if (error) return <div className="text-red-500 text-center p-8">Error: {error}</div>;

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-white">Start Planning Your <span className="text-amber-400">Meal</span>!</h1>
            <p className="text-lg text-white">Explore our wide range of delicious meal options.</p>
            
            <div className="flex justify-center mt-4">
                <form onSubmit={handleSearch} className="flex items-center">
                    <input 
                        className="bg-white rounded-l border border-white px-4 py-2" 
                        type="text" 
                        placeholder="Search for meals..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="bg-amber-400 hover:bg-amber-500 border border-white border-l-0 rounded-r px-3 py-2 transition-colors"
                    >
                        <Search size={24} className="text-white" />
                    </button>
                </form>
            </div>
            {items.length === 0 && !loading && !error && (
                <div className="text-white text-lg">No meals found.</div>
            )}
            <ProductList items={items} />
        </div>
    )
}
