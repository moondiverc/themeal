import { Link } from 'react-router-dom'
import bgFood from '../assets/bg-food-4.jpg'

export default function Home() {
    return (
        <div style={{ height: "200vh" }}>
            <div 
            style={{
                backgroundImage: `url(${bgFood})`,
                backgroundSize: 'cover',
                backgroundPosition: '10% 90%',
                backgroundRepeat: 'no-repeat',
                alignItems: 'center',
                position: 'relative',
                display: 'flex',
                minHeight: 'calc(100vh - 80px)',
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

            {/* testimonial */}
            <div>
                <h1>Testimonials</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='bg-white p-4 rounded-lg shadow-md'>
                        <p className='text-gray-600'>"TheMeal has changed the way I cook!"</p>
                        <p className='text-gray-500 text-sm'>- Happy Customer</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-md'>
                        <p className='text-gray-600'>"I love the variety of recipes available."</p>
                        <p className='text-gray-500 text-sm'>- Satisfied User</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-md'>
                        <p className='text-gray-600'>"TheMeal makes cooking fun and easy!"</p>
                        <p className='text-gray-500 text-sm'>- Cooking Enthusiast</p>
                    </div>
                </div>
            </div>
        </div>
    )
}