import React, { useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // ✅ icône officielle WhatsApp

function Contact() {
  useEffect(() => {
    document.title = "Contact";
    return () => {
      document.title = "React App";
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Contactez-nous</h1>
        <p className="text-gray-700 text-lg text-center mb-10">
          Nous sommes à votre écoute pour toute commande ou renseignement.
        </p>

        <div className="space-y-6">
          {/* WhatsApp */}
          <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <FaWhatsapp className="text-green-600 w-6 h-6" /> {/* ✅ icône WhatsApp */}
            <div>
              <p className="text-gray-600 font-semibold">WhatsApp :</p>
              <a
                href="https://wa.me/22940285435"
                className="text-green-700 underline hover:text-green-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                +229 40 28 54 35
              </a>
            </div>
          </div>

          {/* Appels */}
          <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <PhoneCall className="text-blue-600 w-6 h-6" />
            <div>
              <p className="text-gray-600 font-semibold">Appels directs :</p>
              <p className="text-gray-800">01 97 78 57 44</p>
              <p className="text-gray-800">01 64 44 77 36</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
