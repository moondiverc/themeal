import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="h-20 text-black flex px-4 items-center justify-center">
            <div className="bg-amber-600/90 backdrop-blur-sm border border-white/20 h-15 rounded-3xl max-w-6xl w-full flex items-center justify-between shadow-2xl px-10">
            <p>&copy; 2025 <Link to="/" className="font-bold text-amber-100 hover:text-white transition-colors">TheMeal</Link>. All rights reserved.</p>
        </div>
        </div>
    )
}
