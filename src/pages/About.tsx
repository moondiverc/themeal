import {
  BookOpenIcon,
  Globe,
  UtensilsCrossedIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import bgFood1 from "../assets/bg-food-1.jpg";
import bgFood2 from "../assets/bg-food-2.jpg";
import bgFood3 from "../assets/bg-food-3.jpg";
import bgFood4 from "../assets/bg-food-4.jpg";
import bgFood5 from "../assets/bg-food-5.jpg";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // metadata/doc title
  useEffect(() => {
    document.title = "TheMeal | About";

    return () => {
      document.title = "The Meal";
    };
  }, []);

  // array image food
  const foodImages = [bgFood1, bgFood2, bgFood3, bgFood4, bgFood5];

  // auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [foodImages.length]);

  // fungsi untuk navigasi ke next
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
  };

  // fungsi untuk navigasi ke previous
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + foodImages.length) % foodImages.length
    );
  };

  return (
    <main style={{ padding: "0 8%" }}>
      {/* about TheMeal */}
      <div className="flex justify-center pb-5 pt-30 gap-10">
        <div className="max-w-5xl px-4 justify-center flex flex-col lg:flex-row items-center gap-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent pb-4">
              About TheMeal
            </h1>
            <p className="text-lg text-gray-400">
              We are a company dedicated to providing the best meal experiences.
            </p>
            <p className="text-lg text-gray-400">
              Our mission is to bring delicious meals to your table using only
              the highest quality ingredients, crafted with care, passion, and
              attention to detail.
            </p>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div className="flex justify-center">
        <div className="max-w-4xl px-4 w-full">
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            {/* caontainer */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {foodImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Delicious meal ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* more about us */}
      <div className="flex justify-center py-30 pt-35">
        <div className="max-w-4xl px-4 text-center justify-center bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">
              Why Choose TheMeal?
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We are a company dedicated to providing the best service possible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-4 flex-wrap text-center">
            {/* 1 */}
            <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
              <UtensilsCrossedIcon
                className="text-amber-500 mb-3 mx-auto"
                size={32}
              />
              <h2 className="font-bold">Most Complete Meal</h2>
              <p className="text-gray-600">
                Explore our wide range of meals that cater to all tastes and
                preferences.
              </p>
            </div>
            {/* 2 */}
            <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
              <BookOpenIcon className="text-blue-500 mb-3 mx-auto" size={32} />
              <h2 className="font-bold">Best Recipe Meal</h2>
              <p className="text-gray-600">
                Discover our top-rated recipes that are sure to impress.
              </p>
            </div>
            {/* 3 */}
            <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
              <Globe className="text-green-500 mb-3 mx-auto" size={32} />
              <h2 className="font-bold">Meal Around The World</h2>
              <p className="text-gray-600">
                Embark on a culinary journey with our international meal
                selections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
