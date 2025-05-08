import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Achats et courses',
      description: 'Nous effectuons vos achats à Cotonou, Ouidah et Porto-Novo selon vos besoins.',
    },
    {
      title: 'Expédition de colis',
      description: 'Envoi et réception de colis entre Cotonou et les villes du Nord en toute sécurité.',
    },
    {
      title: 'Démarches administratives',
      description: 'Nous réalisons vos démarches administratives sans que vous ayez à vous déplacer.',
    },
  ];

  return (
    <section className="min-h-screen bg-white mt-12 py-12 px-6">
      <div className=" flex flex-col justify-center items-center ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Nos Services
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-6 flex-1 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <Link to="/OrderForm">
            <button
            onClick={() => navigate('/OrderForm')}
            className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300"
          >
            Commander ici
          </button>
            </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
