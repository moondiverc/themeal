export interface ProductProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions?: string;
  strTags?: string;
}

export interface MenuProps {
  name: string;
  price: number;
  thumbnail: string;
}

export interface FormState {
  message: string
  errors?: {
    nameField?: string
    priceField?: string
  }
}