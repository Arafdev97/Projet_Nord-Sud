import React, { useEffect } from 'react';
import { PackageCheck, PackageX, Clock, ChevronRight } from 'lucide-react';

export default function OrderHistory() {
  useEffect(() => {
    document.title = "Historique des commandes";
    return () => { document.title = "React App"; };
  }, []);

  const orders = [
    {
      id: 'CMD-001',
      date: '12 Mai 2025',
      status: 'Livré',
      total: '45 000 FCFA',
    },
    {
      id: 'CMD-002',
      date: '9 Mai 2025',
      status: 'En cours',
      total: '30 500 FCFA',
    },
    {
      id: 'CMD-003',
      date: '5 Mai 2025',
      status: 'Annulé',
      total: '22 000 FCFA',
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Livré':
        return <span className="flex items-center gap-1 text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full text-sm font-semibold"><PackageCheck size={16} /> Livré</span>;
      case 'En cours':
        return <span className="flex items-center gap-1 text-amber-700 bg-amber-100 px-3 py-1 rounded-full text-sm font-semibold"><Clock size={16} /> En cours</span>;
      case 'Annulé':
        return <span className="flex items-center gap-1 text-rose-700 bg-rose-100 px-3 py-1 rounded-full text-sm font-semibold"><PackageX size={16} /> Annulé</span>;
      default:
        return <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">Inconnu</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">📦 Historique de Commandes</h2>

        <div className="grid gap-8">
          {orders.map((order) => (
            <div key={order.id} className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{order.id}</h3>
                  <p className="text-sm text-gray-500">Passée le {order.date}</p>
                  <p className="mt-2 text-lg font-semibold text-gray-700">Total : {order.total}</p>
                </div>
                <div className="text-right">
                  {getStatusBadge(order.status)}
                </div>
              </div>
              <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition duration-300">
                <button className="flex items-center text-green-600 font-semibold hover:underline">
                  Voir détails
                  <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
