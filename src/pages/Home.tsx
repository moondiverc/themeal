import { Link } from 'react-router-dom'
import bgFood from '../assets/bg-food-4.jpg'
import people1 from '../assets/people1.jpg'
import people2 from '../assets/people2.jpg'
import people3 from '../assets/people3.jpg'

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
                    <h1 className="text-5xl font-bold text-amber-50 animate-fade-in opacity-0 animation-fill-forwards">
                        Welcome to <span className='font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent'>TheMeal!</span>
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
            <div className="py-30 flex items-center" style={{ paddingInline: '10%' }}>
                <div className="max-w-6xl mx-auto px-4 w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">What Our Customers Say</h1>
                        <p className="text-xl text-gray-600">Hear from people who love TheMeal</p>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* testi 1 */}
                        <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
                            <div className="flex items-center mb-4">
                                <img 
                                    src={people1} 
                                    alt="Customer 1" 
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Blair Waldorf</h3>
                                    <p className="text-gray-500 text-sm">Businesswoman</p>
                                </div>
                            </div>
                            <p className='text-gray-600 italic mb-4'>"I already tried lots of recipe in TheMeal and they are all tastes GREAT! I always recommend it to my friends."</p>
                            <div className="flex text-amber-500">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                        
                        {/* testi 2 */}
                        <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
                            <div className="flex items-center mb-4">
                                <img 
                                    src={people2} 
                                    alt="Customer 2" 
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Serena Van Der Wodsen</h3>
                                    <p className="text-gray-500 text-sm">Home Chef</p>
                                </div>
                            </div>
                            <p className='text-gray-600 italic mb-4'>"I thought I wouldn't find my country recipes, but TheMeal has it all! I hope they keep expanding their recipes collection."</p>
                            <div className="flex text-amber-500">
                                ⭐⭐⭐⭐
                            </div>
                        </div>
                        
                        {/* testi 3 */}
                        <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
                            <div className="flex items-center mb-4">
                                <img 
                                    src={people3} 
                                    alt="Customer 3" 
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Chuck Bass</h3>
                                    <p className="text-gray-500 text-sm">Software Engineer</p>
                                </div>
                            </div>
                            <p className='text-gray-600 italic mb-4'>"The meal has best recipes and I love how easy they are to make! Especially for someone busy like me!"</p>
                            <div className="flex text-amber-500">
                                ⭐⭐⭐⭐
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}