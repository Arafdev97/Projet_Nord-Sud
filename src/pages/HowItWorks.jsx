import React from "react";
import { ShoppingBag, Package, Send, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion"; // Ajout d'animations

const steps = [
  {
    icon: <ShoppingBag className="w-10 h-10 text-white" />,
    title: "1. Commande",
    description:
      "Vous choisissez le service souhaité (achat, colis, démarches, etc.) et remplissez un formulaire simple en ligne.",
    color: "bg-blue-600",
  },
  {
    icon: <Send className="w-10 h-10 text-white" />,
    title: "2. Traitement",
    description:
      "Notre équipe sur place à Cotonou, Porto-Novo ou Ouidah réceptionne et traite votre demande dans les meilleurs délais.",
    color: "bg-green-600",
  },
  {
    icon: <Package className="w-10 h-10 text-white" />,
    title: "3. Expédition",
    description:
      "Le colis ou la preuve de la démarche est envoyé vers votre localité du Nord Bénin (Ouaké, Djougou, Natitingou...).",
    color: "bg-yellow-500",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    title: "4. Livraison sécurisée",
    description:
      "Nous assurons une livraison sécurisée et suivie. Vous recevez une confirmation dès que la mission est accomplie.",
    color: "bg-purple-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Comment ça marche ?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez en quatre étapes simples comment BéninExpress facilite vos services à distance entre le Nord et le Sud du Bénin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`p-3 rounded-full ${step.color} mr-4`}>
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
