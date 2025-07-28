import { BookOpenIcon, Globe, UtensilsCrossedIcon } from "lucide-react"
import logo from '../assets/logo.png';


export default function About() {
    return (
        <div>
            {/* about TheMeal */}
            <div className="flex">
                <img src={logo} alt="About TheMeal" />
                <div>
                    <h1>About TheMeal</h1>
                    <p>We are a company dedicated to providing the best meal experiences.</p>
                    <p>Our mission is to bring delicious meals to your table with the highest quality ingredients and exceptional service.</p>
                </div>
            </div>

            {/* more about us */}
            <div className="flex justify-center py-5">
                <div className="max-w-4xl px-4 text-center justify-center             bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">More About Us</h1>
                        <p className="text-lg text-gray-600 mb-6">We are a company dedicated to providing the best service possible.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mb-4 flex-wrap text-center">
                        {/* 1 */}
                        <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
                            <UtensilsCrossedIcon className="text-amber-500 mb-3" size={32} />
                            <h2>Most Complete Meal</h2>
                            <p className="text-gray-600">Explore our wide range of meals that cater to all tastes and preferences.</p>
                        </div>
                        {/* 2 */}
                        <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
                            <BookOpenIcon className="text-blue-500 mb-3" size={32} />
                            <h2>Best Recipe Meal</h2>
                            <p className="text-gray-600">Discover our top-rated recipes that are sure to impress.</p>
                        </div>
                        {/* 3 */}
                        <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
                            <Globe className="text-green-500 mb-3" size={32} />
                            <h2>Meal Around The World</h2>
                            <p className="text-gray-600">Embark on a culinary journey with our international meal selections.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}