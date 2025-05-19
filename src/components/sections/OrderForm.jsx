import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Send, Phone, FileText, X } from 'lucide-react';

const OrderForm = () => {
  const [formValues, setFormValues] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    nom: '',
    telephone: '',
    email: '',
    service: '',
    lieu: '',
    destination: '',
    description: '',
  };

  const validationSchema = Yup.object({
    nom: Yup.string().required('Nom requis'),
    telephone: Yup.string().required('Téléphone requis'),
    email: Yup.string().email('Email invalide').required('Email requis'),
    service: Yup.string().required('Service requis'),
    lieu: Yup.string().required('Lieu requis'),
    destination: Yup.string().required('Destination requise'),
    description: Yup.string().required('Description requise'),
  });

  const getWhatsAppLink = (values) => {
    const message = `
Bonjour,

Je souhaiterais obtenir un devis pour la commande suivante :

Nom : ${values.nom}
Téléphone : ${values.telephone}
Email : ${values.email}
Service : ${values.service}
Départ : ${values.lieu}
Destination : ${values.destination}

Description :
${values.description}

Merci de me faire parvenir le devis.
    `.trim();
    return `https://wa.me/22997049068?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (values, { resetForm }) => {
    setFormValues(values);     // Enregistrement local
    setShowModal(true);        // Ouverture de la modale WhatsApp
    resetForm();               // Réinitialiser le formulaire
  };

  const handleWhatsAppClick = () => {
    if (formValues) {
      window.open(getWhatsAppLink(formValues), '_blank');
    }
    setShowModal(false);
    setSubmitted(true); // Afficher le message de succès
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      
      {/* Modale WhatsApp */}
      {showModal && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
              onClick={() => setShowModal(false)}
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Demander un devis</h3>
            <p className="mb-6 text-gray-600">
              Pour continuer, veuillez demander un devis via WhatsApp.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Demander le devis via WhatsApp
            </button>
          </div>
        </div>
      )}

      <div className="z-10 max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 flex items-center justify-center gap-2">
          <FileText size={32} className="text-blue-600" /> Demande de commande
        </h2>

        {!submitted ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-semibold mb-1 block">Nom *</label>
                    <Field
                      name="nom"
                      type="text"
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage name="nom" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="font-semibold mb-1 block">Téléphone *</label>
                    <Field
                      name="telephone"
                      type="text"
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage name="telephone" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="font-semibold mb-1 block">Email *</label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="font-semibold mb-1 block">Service *</label>
                    <Field
                      name="service"
                      as="select"
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="Livraison">Livraison</option>
                      <option value="Transport">Transport</option>
                      <option value="Autre">Autre</option>
                    </Field>
                    <ErrorMessage name="service" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="font-semibold mb-1 block">Ville de départ *</label>
                    <Field
                      name="lieu"
                      as="select"
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Sélectionnez une ville</option>
                      <option value="Abomey-Calavi">Abomey-Calavi</option>
                      <option value="Cotonou">Cotonou</option>
                      <option value="Ouidah">Ouidah</option>
                      <option value="Porto-Novo">Porto-Novo</option>
                    </Field>
                    <ErrorMessage name="lieu" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="font-semibold mb-1 block">Destination *</label>
                    <Field
                      name="destination"
                      as="select"
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Choisir une destination</option>
                      <option value="Bassila">Bassila</option>
                      <option value="Copargo">Copargo</option>
                      <option value="Djougou">Djougou</option>
                      <option value="Ouaké">Ouaké</option>
                      <option value="Natitingou">Natitingou</option>
                      <option value="Parakou">Parakou</option>
                      <option value="Autre">Autre</option>
                    </Field>
                    <ErrorMessage name="destination" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div>
                  <label className="font-semibold mb-1 block">Description *</label>
                  <Field
                    name="description"
                    as="textarea"
                    rows="4"
                    placeholder="Décrivez votre commande ici..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2 shadow-lg"
                  >
                    <Send size={20} /> Envoyer la commande
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="text-center p-6 bg-green-50 border border-green-300 rounded-xl text-green-800">
            <p className="text-lg font-semibold mb-2">Votre demande a été envoyée avec succès !</p>
            <p className="text-sm">
              Pour suivre vos commandes et bénéficier d’un meilleur service,
              <a href="/register" className="text-blue-600 hover:underline font-semibold ml-1">
                créez un compte ici
              </a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderForm;
