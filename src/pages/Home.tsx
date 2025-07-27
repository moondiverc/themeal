import { Link } from 'react-router-dom'
import bgFood from '../assets/bg-food-2.jpg'

export default function Home() {
    return (
        <div 
        style={{
            backgroundImage: `url(${bgFood})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            alignItems: 'center',
            position: 'relative',
            display: 'flex',
            minHeight: 'calc(100vh - 80px)',
        }}>
            <div className="py-5 px-[7%] max-w-240">
                <h1 className="text-5xl font-bold text-amber-50 text-shadow-md">Welcome to The<span className="text-amber-600">Meal</span>!</h1>
                <p className="text-2xl text-amber-100 text-shadow-2xs">Discover delicious meals and recipes from around the world.</p>
                <Link to="/products" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg mt-4 inline-block transition-colors">
                    Get Started!
                </Link>
            </div>
        </div>
    )
}