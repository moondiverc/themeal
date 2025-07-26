import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Favorites from './pages/Favorites'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
