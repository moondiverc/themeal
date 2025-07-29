import { Link } from 'react-router-dom'
import bgFood from '../assets/bg-food-4.jpg'

export default function Home() {
    return (
        <div>
            <div 
            style={{
                backgroundImage: `url(${bgFood})`,
                backgroundSize: 'cover',
                backgroundPosition: '0% 80%',
                backgroundRepeat: 'no-repeat',
                alignItems: 'center',
                position: 'relative',
                display: 'flex',
                minHeight: '100vh',
            }}>
                <div className="py-5 px-[7%] max-w-240">
                    <h1 className="text-5xl font-bold text-amber-50 text-shadow-md animate-fade-in opacity-0 animation-fill-forwards">
                        Welcome to The<span className="text-amber-600">Meal</span>!
                    </h1>
                    <p className="text-2xl text-amber-100 text-shadow-2xs animate-fade-in opacity-0 animation-fill-forwards animation-delay-300">
                        Discover delicious meals and recipes from around the world.
                    </p>
                    <Link to="/products" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg mt-4 inline-block animate-fade-in opacity-0 animation-fill-forwards animation-delay-600 transition-transform hover:scale-105">
                        Get Started!
                    </Link>
                </div>
            </div>

        </div>
    )
}