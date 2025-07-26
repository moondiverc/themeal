import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Heart } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="bg-amber-600 h-20 text-white flex px-4 items-center justify-between">
            <img src={logo} alt="Logo" width={50} height={50} />
            <Link to="/" className="font-bold text-3xl">TheMeal</Link>
            <div className="flex gap-x-10 justify-center w-full font-bold text-lg">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/products" className="hover:underline">Products</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
            <Link to="/favorites" className="hover:underline"><Heart size={25} className="fill-current text-white" /></Link>
        </div>
    )
}