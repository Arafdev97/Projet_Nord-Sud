import React, { useEffect } from "react";
import Services from "./Services";
import CommentCaMarche from "./HowItWorks";
import Faq from "./FAQs";
import Contact from "./Contact";

function Home() {
  useEffect(() => {
    document.title = "Accueil";
    return () => {
      document.title = "React App";
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-gray-100">
      {/* Section d'accueil */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Bienvenue sur <span className="text-green-600">BéninExpress</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Votre solution de services à Cotonou sans bouger de chez vous.
          </p>
          <a
            href="https://wa.me/22940285435"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300"
          >
            Contactez-nous sur WhatsApp
          </a>
        </div>
      </section>

      {/* Nos services */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Services />
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <CommentCaMarche />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Faq />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default Home;
