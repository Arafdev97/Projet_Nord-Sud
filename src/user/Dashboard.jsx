import React from 'react';
import { PackageSearch, UserCircle, LogOut, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../authentification/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const {logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout= () => {
    logout(); //Déconnecte le contexte
    navigate('/login');
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-green-600">Tableau de bord client</h1>
          <Link 
            to="/deconnexion"
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-800" 
            >
            <LogOut size={20} />
            <span>Déconnexion</span>
          </Link>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4 text-green-600">
              <Truck size={32} />
              <h2 className="text-xl font-semibold">Suivre ma commande</h2>
            </div>
            <p className="text-gray-600 mb-4">Consultez l'état actuel de vos commandes en un clic.</p>
            <Link
              to="/tracking"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Voir le suivi
            </Link>
          </div>

          
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4 text-green-600">
              <UserCircle size={32} />
              <h2 className="text-xl font-semibold">Mon profil</h2>
            </div>
            <p className="text-gray-600 mb-4">Gérez vos informations personnelles et mot de passe.</p>
            <Link
              to="/profile"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Modifier le profil
            </Link>
          </div>

          
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4 text-green-600">
              <PackageSearch size={32} />
              <h2 className="text-xl font-semibold">Historique de commandes</h2>
            </div>
            <p className="text-gray-600 mb-4">Consultez vos anciennes commandes en toute simplicité.</p>
            <Link 
              to="/OrderHistorique"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
              Voir l'historique
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
