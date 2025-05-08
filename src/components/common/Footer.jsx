import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section supérieure */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div>
            <h2 className="text-xl font-bold mb-2">BéninExpress</h2>
            <p className="text-sm">
              Plateforme de services à distance reliant le nord et le sud du Bénin.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li><Link to="/home" className="hover:underline">Accueil</Link></li>
              <li><Link to="/services" className="hover:underline">Nos services</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li>📍 Cotonou, Bénin</li>
              <li>📞  <Link to="/tel:0197785744" className="hover:underline">0197785744</Link>/ <Link to="/tel:0164447736" className="hover:underline">0164447736</Link></li>
              <li> <Link to="/https://wa.me/22940285435" target="_blank" rel="noopener noreferrer" className="hover:underline">
                         <FaWhatsapp size={24} />
                    </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
            <div className="flex space-x-4">
                <Link to="/"  aria-label="Facebook" className="hover:text-blue-500">
                    <FaFacebook size={24} />
                </Link>
                <Link to="/"  aria-label="Twitter" className="hover:text-blue-400">
                     <FaTwitter size={24} />
                </Link>
                <Link to="/" aria-label="Instagram" className="hover:text-pink-500">
                    <FaInstagram size={24} />
                </Link>
            </div>
          </div>
        </div>

        {/* Section inférieure */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} BéninExpress. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:underline">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
