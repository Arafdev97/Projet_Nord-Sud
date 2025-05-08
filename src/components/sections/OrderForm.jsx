import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const OrderForm = () => {
  const initialValues = {
    nom: '',
    telephone: '',
    email: '',
    service: '',
    lieu: '',
    destination: '',
    montant: 0,
  };

  const validationSchema = Yup.object({
    nom: Yup.string().required('Nom requis'),
    telephone: Yup.string().required('Téléphone requis'),
    email: Yup.string().email('Email invalide').required('Email requis'),
    service: Yup.string().required('Service requis'),
    lieu: Yup.string().required('Lieu requis'),
    destination: Yup.string().required('Destination requise'),
    montant: Yup.number().positive('Montant invalide').required('Montant requis'),
  });

  const handleSubmit = (values) => {
    window.KkiapayWidget({
      amount: values.montant,
      key: 'VOTRE_CLÉ_API_KKIAPAY',
      sandbox: true,
      name: values.nom,
      email: values.email,
      phone: values.telephone,
      reason: `Paiement pour le service: ${values.service}`,
    });

    window.addEventListener('kkiapay.success', function (e) {
      const transactionId = e.detail.transactionId;
      console.log('Transaction réussie, ID:', transactionId);
    });
  };

  return (
    <div className="max-w-2xl mx-auto m-25 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Formulaire de commande</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom:</label>
            <Field
              name="nom"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <ErrorMessage name="nom" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Téléphone:</label>
            <Field
              name="telephone"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <ErrorMessage name="telephone" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <Field
              name="email"
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Service:</label>
            <Field
              name="service"
              as="select"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Sélectionnez un service</option>
              <option value="Livraison">Livraison</option>
              <option value="Transport">Transport</option>
              <option value="Autre">Autre</option>
            </Field>
            <ErrorMessage name="service" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Lieu:</label>
            <Field
              name="destination"
              as="select"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Ville desservie</option>
              <option value="ville">Abomey-Calavi</option>
              <option value="ville">Cotonou</option>
              <option value="ville">Ouidah</option>
              <option value="ville">Porto-Novo</option>
            </Field>
            <ErrorMessage name="lieu" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Destination:</label>
            <Field
              name="destination"
              as="select"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Choisir la destination</option>
              <option value="ville">Bassila</option>
              <option value="ville">Copargo</option>
              <option value="ville">Djougou</option>
              <option value="ville">Ouaké</option>
              <option value="ville">Natitingou</option>
              <option value="ville">Parakou</option>
              <option value="ville">Autre</option>
            </Field>
            <ErrorMessage name="destination" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <Field
              name="description"
              type="texte"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <ErrorMessage name="montant" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Commander et Payer
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
