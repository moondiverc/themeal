export default function About() {
    return (
        <div className="flex justify-center py-5">
            <div className="max-w-4xl px-4 text-center justify-center             bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
                    <p className="text-lg text-gray-600 mb-6">We are a company dedicated to providing the best service possible.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-4 flex-wrap text-center">
                    {/* 1 */}
                    <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
                        <h2>Most Complete Meal</h2>
                        <p className="text-gray-600">Explore our wide range of meals that cater to all tastes and preferences.</p>
                    </div>
                    {/* 2 */}
                    <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
                        <h2>Best Value Meal</h2>
                        <p className="text-gray-600">Get the most bang for your buck with our best value meal options.</p>
                    </div>
                    {/* 3 */}
                    <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
                        <h2>Quick Meal</h2>
                        <p className="text-gray-600">Satisfy your hunger in no time with our quick meal options.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}