// import SocialMedia from "./SocialMedia"; // Asegúrate de tener este componente
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // logica de búsqueda
    console.log("Buscar:", searchQuery);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">Tourism Calango</h1>

          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="flex space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-700">
                Search
              </button>
            </form>
            <Link to="/" className="hover:text-blue-300">Home</Link>
            <Link to="/about" className="hover:text-blue-300">About</Link>
            <Link to="/login" className="hover:text-blue-300">Login</Link>
            <Link to="/categories" className="hover:text-blue-300">Categories</Link>
            <Link to="/saved" className="hover:text-blue-300">My Recommendations</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form onSubmit={handleSearch} className="flex space-x-2 mb-3">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-700">
                Search
              </button>
            </form>
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
              About
            </Link>
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
              Login
            </Link>
            <Link to="/categories" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
              Categories
            </Link>
            <Link to="/saved" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
              My Recommendations
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
