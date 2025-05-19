import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';

export default function Register() {
  useEffect(() => {
    document.title = "Inscription | Nord-Sud Services";
    return () => { document.title = "React App"; };
  }, []);

  const [isConnected, setIsConnected] = useState(false);

  const initialValues = {
    lastname: '',
    firstname: '',
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  };

  const validate = values => {
    const errors = {};

    if (!values.lastname) errors.lastname = 'Champ requis';
    if (!values.firstname) errors.firstname = 'Champ requis';
    if (!values.username) errors.username = 'Champ requis';

    if (!values.email) {
      errors.email = 'Champ requis';
    } else if (!/^[\w.%+-]+@[\w.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Adresse email invalide';
    }

    if (!values.password) {
      errors.password = 'Champ requis';
    } else {
      if (values.password.length < 8) errors.password = 'Min. 8 caractères requis';
      if (!/[A-Z]/.test(values.password)) errors.password = 'Au moins une majuscule';
      if (!/[a-z]/.test(values.password)) errors.password = 'Au moins une minuscule';
      if (!/[0-9]/.test(values.password)) errors.password = 'Au moins un chiffre';
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = 'Champ requis';
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = 'Les mots de passe ne correspondent pas';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log("Utilisateur inscrit :", values);
      setIsConnected(true);
      setSubmitting(false);
      resetForm();
    }, 300); // simulation d’un appel API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-10 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700">Créer un compte</h2>
          <p className="text-gray-600 mt-1 text-sm">
            Rejoignez notre plateforme pour accéder aux services Nord ↔ Sud
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ values, 
              errors, 
              touched, 
              handleChange, 
              handleBlur, 
              handleSubmit, 
              isSubmitting }) => (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'lastname', label: 'Nom', placeholder: 'Ex : Bio' },
                { name: 'firstname', label: 'Prénom', placeholder: 'Ex : Abdou' },
                { name: 'username', label: 'Nom d\'utilisateur', placeholder: 'Ex : abdou123' },
              ].map(({ name, label, placeholder }) => (
                <div key={name} className="col-span-1">
                  <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>
                  <input
                    type="text"
                    name={name}
                    id={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                    placeholder={placeholder}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {errors[name] && touched[name] && (
                    <p className="text-sm text-red-500">{errors[name]}</p>
                  )}
                </div>
              ))}

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Ex : vous@email.com"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.email && touched.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="col-span-1">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Mot de passe"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.password && touched.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="col-span-1">
                <label htmlFor="confirmpassword" className="text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmpassword}
                  placeholder="Confirmer mot de passe"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.confirmpassword && touched.confirmpassword && (
                  <p className="text-sm text-red-500">{errors.confirmpassword}</p>
                )}
              </div>

              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <ClipLoader color="#fff" size={20} />
                      <span>Création en cours...</span>
                    </>
                  ) : isConnected ? "Inscrit avec succès !" : "S'inscrire"}
                </button>
              </div>

              <div className="col-span-1 md:col-span-2 text-center text-sm text-gray-600">
                Déjà inscrit ?{' '}
                <Link to="/login" className="text-green-700 font-semibold hover:underline">
                  Se connecter
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
