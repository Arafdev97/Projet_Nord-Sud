import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaBoxOpen, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Services";
    return () => { document.title = "React App"; };
  }, []);

  const services = [
    {
      title: 'Achats et courses',
      description: 'Nous effectuons vos achats à Cotonou, Ouidah et Porto-Novo selon vos besoins.',
      icon: <FaShoppingCart className="text-green-600 w-8 h-8" />
    },
    {
      title: 'Expédition de colis',
      description: 'Envoi et réception de colis entre Cotonou et les villes du Nord en toute sécurité.',
      icon: <FaBoxOpen className="text-yellow-500 w-8 h-8" />
    },
    {
      title: 'Démarches administratives',
      description: 'Nous réalisons vos démarches administratives sans que vous ayez à vous déplacer.',
      icon: <FaFileAlt className="text-blue-600 w-8 h-8" />
    },
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12">
          Nos Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border-t-4 border-green-600 rounded-xl shadow hover:shadow-lg p-6 text-left transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={() => navigate('/OrderForm')}
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300"
          >
            Commander ici
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
