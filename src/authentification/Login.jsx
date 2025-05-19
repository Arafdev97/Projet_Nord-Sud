import React, { useEffect, useState } from 'react'; 
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { LogIn } from 'lucide-react';
import { useAuth } from '../authentification/AuthContext'; 

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = 'Connexion - NordSud Services';
    return () => {
      document.title = 'NordSud Services';
    };
  }, []);

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate("/DashboardAdmin");
      } else {
        navigate('/Dashboard'); 
      }
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Connexion à votre compte
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 text-sm px-4 py-2 rounded mb-4 text-center">
            {errorMessage}
          </div>
        )}

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email requis';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Adresse email invalide';
            }

            if (!values.password) {
              errors.password = 'Mot de passe requis';
            }

            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            setErrorMessage('');

            // Simuler la vérification des identifiants locaux
            const validUsers = [
              { email: 'admin@nordsud.bj', password: 'admin123', role: 'admin' },
              { email: 'client@nordsud.bj', password: 'client00123', role: 'client' }
            ];

            const foundUser = validUsers.find(
              (u) => u.email === values.email && u.password === values.password
            );

            if (foundUser) {
              const fakeToken = '123456789fake';
              login(fakeToken, foundUser.role);

              if (foundUser.role === 'admin') {
                navigate("/DashboardAdmin");
              } else {
                navigate("/Dashboard");
              }
            } else {
              setErrorMessage('Email ou mot de passe incorrect');
            }

            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Adresse email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="exemple@mail.com"
                />
                {errors.email && touched.email && (
                  <div className="text-sm text-red-500 mt-1">{errors.email}</div>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="********"
                />
                {errors.password && touched.password && (
                  <div className="text-sm text-red-500 mt-1">{errors.password}</div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-green-700 transition duration-200">
                {isSubmitting ? (
                  <>
                    <ClipLoader size={20} color="#fff" />
                    <span>Connexion...</span>
                  </>
                ) : (
                  <>
                    <LogIn size={20} />
                    <span>Se connecter</span>
                  </>
                )}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
