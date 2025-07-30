import { Search, ArrowUpDown } from "lucide-react";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import type { ProductProps } from "../types/ProductTypes";

export default function Products() {
    const [items, setItems] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // metadata/doc title
    useEffect(() => {
        document.title = "TheMeal | Products";
        
        return () => {
            document.title = "The Meal";
        };
    }, []);

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

    // toggle buat sorting ascend/descend
    const toggleSort = () => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);
        
        const sortedItems = [...items].sort((a, b) => {
            if (newOrder === 'asc') {
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

    // menu ketika loading
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

    // menu ketika error
    if (error) {
        return (
            <div 
                className="text-white text-4xl font-bold flex items-center justify-center"
                style={{height: 'calc(100vh - 80px)'}}
            >
                <h1 className="text-center">Error: {error}</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 pt-30">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent leading-tight pb-1">Start Planning Your Meal!</h1>
            <p className="text-lg text-gray-400">Explore our wide range of delicious meal options.</p>

            <div className="flex justify-center mt-4 gap-4" style={{ paddingInline : '3' }}>
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
                        className="bg-amber-400 hover:bg-amber-500 border border-white border-l-0 px-3 py-2 transition-colors"
                    >
                        <Search size={24} className="text-white" />
                    </button>
                </form>
                <button 
                    type="button"
                    onClick={toggleSort}
                    className="bg-amber-400 hover:bg-amber-500 border border-white border-l-0 px-3 py-2 transition-colors flex items-center"
                    title={sortOrder === 'asc' ? 'Sort A-Z' : 'Sort Z-A'}
                >
                    <ArrowUpDown size={20} className="text-white" />
                    <span className="text-white text-sm font-semibold">
                        {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
                    </span>
                </button>
            </div>
            {items.length === 0 && !loading && !error && (
                <div className="text-white text-lg mt-4">No meals found.</div>
            )}
            <ProductList items={items} />
        </div>
    )
}
