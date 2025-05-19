import React, { useEffect } from "react";
import { Mail, UserCircle2, Phone } from "lucide-react";
import CarteZones from "./CarteZones";

export default function Tracking() {
  useEffect(() => {
    document.title = "Suivi";
    return () => {
      document.title = "React App";
    };
  }, []);

  const handleNotifyUser = () => {
    alert(
      "Une notification vous sera envoyée par email dès qu’une mise à jour sera disponible."
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 pb-0">
      <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Suivi de votre commande
        </h2>

        <div>
          <h1 className="text-xl font-bold text-gray-800">Bonjour Moussa !</h1>
          <p className="text-sm text-gray-500">
            Voici les détails de votre commande
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
          Votre commande est en cours de livraison. Prévue pour aujourd’hui entre{" "}
          <strong>15h et 17h</strong>.
        </div>

        <button
          onClick={handleNotifyUser}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition mb-6"
        >
          <Mail size={18} />
          Recevoir une notification par email
        </button>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Contact du livreur</h3>
          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
            <UserCircle2 size={56} className="text-green-600" />
            <div>
              <p className="font-medium">Dossa Rodrigue</p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Phone size={14} /> +229 96 00 00 00
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Zones d'activité Nord-Sud</h3>
          <CarteZones />
        </div>

      </div>
    </div>
  );
}
