import type { ProductProps } from "../types/ProductTypes";

// Get favorites from localStorage
export const getFavorites = (): ProductProps[] => {
    const saved = localStorage.getItem("liked");
    return saved ? JSON.parse(saved) : [];
};

// Add meal to favorites
export const addToFavorites = (meal: ProductProps): ProductProps[] => {
    const favorites = getFavorites();
    const isAlreadyFavorite = favorites.some(fav => fav.idMeal === meal.idMeal);
    
    if (!isAlreadyFavorite) {
        const newFavorites = [...favorites, meal];
        localStorage.setItem("liked", JSON.stringify(newFavorites));
        return newFavorites;
    }
    
    return favorites;
};

// Remove meal from favorites
export const removeFromFavorites = (mealId: string): ProductProps[] => {
    const favorites = getFavorites();
    const newFavorites = favorites.filter(fav => fav.idMeal !== mealId);
    localStorage.setItem("liked", JSON.stringify(newFavorites));
    return newFavorites;
};

// Check if meal is in favorites
export const isFavorite = (mealId: string): boolean => {
    const favorites = getFavorites();
    return favorites.some(fav => fav.idMeal === mealId);
};

// Clear all favorites
export const clearFavorites = (): void => {
    localStorage.setItem("liked", JSON.stringify([]));
};
