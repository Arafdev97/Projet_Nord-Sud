import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../authentification/AuthContext'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate("/login"); 
  };

  const linkClasses =
    "text-gray-100 font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300";
  const buttonClasses =
    "bg-gray-100 text-gray-800 font-bold text-sm px-3 py-1 rounded-lg hover:bg-white transition duration-300";

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              BéninExpress
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link to="/home" className={linkClasses}>
              Accueil
            </Link>
            <Link to="/#services" className={linkClasses}>
              Nos services
            </Link>
            <Link to="/#contact" className={linkClasses}>
              Contact
            </Link>
            <Link to="/#HowItWorks" className={linkClasses}>
              Comment ça marche
            </Link>
            <Link to="/#FAQs" className={linkClasses}>
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex space-x-2">
            {!user ? (
              <>
                <Link to="/register" className={buttonClasses}>
                  S'inscrire
                </Link>
                <Link to="/login" className={buttonClasses}>
                  Se connecter
                </Link>
              </>
            ) : (
              <button onClick={handleLogout} className="bg-red-500 text-white font-bold text-sm px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300">
                Déconnexion
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-100 hover:text-gray-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div key="mobile-menu" className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          <Link to="/home" className={linkClasses}>
            Accueil
          </Link>
          <Link to="/services" className={linkClasses}>
            Nos services
          </Link>
          <Link to="/contact" className={linkClasses}>
            Contact
          </Link>
          <Link to="/Comment ça marche" className={linkClasses}>
            Comment ça marche
          </Link>
          <Link to="/FAQ" className={linkClasses}>
            FAQ
          </Link>


          {!user ? (
            <>
              <Link to="/register" className={buttonClasses}>
                S'inscrire
              </Link>
              <Link to="/login" className={buttonClasses}>
                Se connecter
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="bg-red-500 text-white font-bold text-sm px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Déconnexion
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
