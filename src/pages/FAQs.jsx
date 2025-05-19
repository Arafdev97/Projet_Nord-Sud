import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment passer une commande sur BéninExpress ?",
    answer: "Pour passer une commande, il suffit de vous connecter, choisir un service, remplir les informations demandées et soumettre votre demande.",
  },
  {
    question: "Quels types de services proposez-vous ?",
    answer: "Nous proposons des services d’achats, d’expédition de colis, de réception et d’assistance dans les démarches administratives entre le Nord et le Sud du Bénin.",
  },
  {
    question: "Comment suivre ma commande ?",
    answer: "Une fois connecté à votre compte, vous pouvez suivre l’état de votre commande depuis votre tableau de bord dans la section 'Suivi de commande'.",
  },
  {
    question: "Puis-je annuler une commande ?",
    answer: "Oui, tant que la commande n’a pas été traitée, vous pouvez l’annuler depuis votre tableau de bord. Une fois en cours de traitement, l’annulation n’est plus possible.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-4 text-left"
    >
      <span className="text-lg font-semibold text-gray-800">{question}</span>
      <ChevronDown
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3 }}
        className="text-gray-600 pb-4"
      >
        {answer}
      </motion.div>
    )}
  </div>
);

const FAQs = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
        Questions Fréquemment Posées (FAQ)
      </h1>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          {...faq}
          isOpen={openIndex === index}
          onClick={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQs;
