import { Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main>
      <div className="py-4 h-20 text-black flex px-4 items-center justify-center fixed top-0 left-0 w-full z-50 pt-15">
        <div className="bg-amber-500/90 backdrop-blur-sm border border-white/20 rounded-3xl max-w-6xl w-full flex items-center justify-between shadow-2xl px-6 md:px-10 h-16">
          <img
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="md:w-[50px] md:h-[50px]"
          />
          <Link to="/" className="font-bold text-2xl md:text-3xl text-white">
            TheMeal
          </Link>
          <div className="hidden lg:flex gap-x-6 xl:gap-x-10 justify-center w-full font-bold text-lg text-white">
            <Link to="/" className="relative group transition-all duration-300">
              <span>Home</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0 transform -translate-x-1/2 group-hover:translate-x-0"></span>
            </Link>
            <Link
              to="/about"
              className="relative group transition-all duration-300"
            >
              <span>About</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0 transform -translate-x-1/2 group-hover:translate-x-0"></span>
            </Link>
            <Link
              to="/products"
              className="relative group transition-all duration-300"
            >
              <span>Products</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0 transform -translate-x-1/2 group-hover:translate-x-0"></span>
            </Link>
            <Link
              to="/contact"
              className="relative group transition-all duration-300"
            >
              <span>Contact</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0 transform -translate-x-1/2 group-hover:translate-x-0"></span>
            </Link>
          </div>

          {/* desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/favorites"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Heart size={25} className="fill-current text-white" />
            </Link>
          </div>

          {/* mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              to="/favorites"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Heart size={22} className="fill-current text-white" />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-1 hover:scale-110 transition-transform duration-200"
            >
              {isMenuOpen ? (
                <X size={26} className="text-white" />
              ) : (
                <Menu size={26} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* sidebar mobile */}
      {isMenuOpen && (
        <>
          {/* background blur ketika membuka sidebar */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMenu}
          />

          {/* sidebar */}
          <div className="fixed top-24 right-4 w-64 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm z-50 lg:hidden transform transition-all duration-300 ease-out">
            {/*  menu di sidebar */}
            <div className="p-4 space-y-3">
              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center gap-3 p-3 text-white font-semibold hover:bg-white/20 rounded-xl transition-all duration-200"
              >
                <p>Home</p>
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="flex items-center gap-3 p-3 text-white font-semibold hover:bg-white/20 rounded-xl transition-all duration-200"
              >
                <p>About</p>
              </Link>
              <Link
                to="/products"
                onClick={closeMenu}
                className="flex items-center gap-3 p-3 text-white font-semibold hover:bg-white/20 rounded-xl transition-all duration-200"
              >
                <p>Products</p>
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex items-center gap-3 p-3 text-white font-semibold hover:bg-white/20 rounded-xl transition-all duration-200"
              >
                <p>Contact</p>
              </Link>
              <Link
                to="/favorites"
                onClick={closeMenu}
                className="flex items-center gap-3 p-3 text-white font-semibold hover:bg-white/20 rounded-xl transition-all duration-200"
              >
                <p>Favorites</p>
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
