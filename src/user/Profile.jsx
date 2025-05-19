import React, { useEffect, useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';

export default function Profile() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.title = "Mon Profil";
    return () => {
      document.title = "React App";
    };
  }, []);

  return (
    <div className="min-h-screen mt-16 bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <User className="text-green-600" size={48} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Moussa Abdou</h2>
          <p className="text-gray-500">abdoumous@email.com</p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-6 bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200"
          >
            {showForm ? 'Fermer le formulaire' : 'Modifier mon profil'}
          </button>
        </div>

        {/* Formulaire (affiché uniquement si showForm est true) */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-green-600 mb-6">Modifier mes informations</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                  <User className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    className="w-full outline-none placeholder-gray-400"
                    placeholder="Abdou Moussa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                  <Mail className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    className="w-full outline-none placeholder-gray-400"
                    placeholder="abdoumous@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                  <Lock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    className="w-full outline-none placeholder-gray-400"
                    placeholder="********"
                  />
                </div>
              </div>

              <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-200">
                Enregistrer les modifications
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
