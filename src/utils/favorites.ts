import type { ProductProps } from "../types/ProductTypes";

// ambil data favorite meal dari localStorage
export const getFavorites = (): ProductProps[] => {
  const saved = localStorage.getItem("liked");
  return saved ? JSON.parse(saved) : [];
};

// add meal ke dalam daftar favorite di localStorage
export const addToFavorites = (meal: ProductProps): ProductProps[] => {
  const favorites = getFavorites();
  const isAlreadyFavorite = favorites.some((fav) => fav.idMeal === meal.idMeal);

  if (!isAlreadyFavorite) {
    const newFavorites = [...favorites, meal];
    localStorage.setItem("liked", JSON.stringify(newFavorites));
    return newFavorites;
  }

  return favorites;
};

// hapus meal dari daftar favorite di localStorage
export const removeFavorites = (mealId: string): ProductProps[] => {
  const favorites = getFavorites();
  const newFavorites = favorites.filter((fav) => fav.idMeal !== mealId);
  localStorage.setItem("liked", JSON.stringify(newFavorites));
  return newFavorites;
};

// cek apakah meal ada di daftar favorite
export const isFavorite = (mealId: string): boolean => {
  const favorites = getFavorites();
  return favorites.some((fav) => fav.idMeal === mealId);
};

// bersihkan semua favorite meals dari localStorage
export const deleteAllFavorites = (): void => {
  localStorage.setItem("liked", JSON.stringify([]));
};
