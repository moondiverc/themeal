import type { ProductProps } from "../types/ProductTypes";

export default function ProductList({ items }: { items: ProductProps[] }) {
  return (
    <div>
      <div className="flex flex-wrap gap-4 m-4 items-start">
        {items.map((item) => (
          <a key={item.idMeal} className="bg-white p-4 flex flex-col" href={`/products/${item.idMeal}`}>
            <div className="overflow-hidden w-[200px] h-[200px] bg-center bg-cover" style={{ backgroundImage: `url(${item.strMealThumb})`}}></div>
            <div>
              <div className="font-bold">{item.strMeal}</div>
              <div>{item.strCategory}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}