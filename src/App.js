import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./App.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import OrderForm from "./components/sections/OrderForm";
import Login from "./authentification/Login";
import Register from "./authentification/Register";
import DashboardAdmin from "./admin/DashboardAdmin";
import Clients from "./admin/ClientsAdmin";
import Orders from "./admin/OrdersAdmin";
import Settings from "./admin/SettingsAdmin";
import Sidebar from "./admin/SidebarAdmin";
import StatsCard from "./admin/StatsCardAdmin";
import Tracking from "./pages/Tracking";
import HowItWorks from "./pages/HowItWorks";
import FAQs from "./pages/FAQs";
import DashboardUser from "./user/Dashboard";
import Profile from "./user/Profile";
import OrderHistorique from "./user/OrderHistorique";
import { AuthProvider } from "./authentification/AuthContext";
import PrivateRoute from "./APrivateRoute";
import PrivateClientRoute from "./APrivateClientRoute";

function App() {
  const location = useLocation();

  // Pages sans MainLayout/Navbar
  const noLayoutRoutes = ["/Tracking", "/Profile", "/OrderHistorique"];

  const showLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>
      <AuthProvider>
        <Routes>
          {showLayout && (
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Services" element={<Services />} />
              <Route path="Orderform" element={<OrderForm />} />
              <Route path="Tracking" element={<Tracking />} />
              <Route path="HowItWorks" element={<HowItWorks />} />
              <Route path="FAQs" element={<FAQs />} />
            </Route>
          )}

          {!showLayout && (
            <>
              <Route path="/Tracking" element={<Tracking />} />
              <Route
                path="/Profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/OrderHistorique"
                element={
                  <PrivateRoute>
                    <OrderHistorique />
                  </PrivateRoute>
                }
              />
            </>
          )}

          <Route
            path="DashboardAdmin/*"
            element={
              <PrivateRoute>
                <DashboardAdmin />
              </PrivateRoute>
            }
          />
          <Route path="Clients" element={<Clients />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Sidebar" element={<Sidebar />} />
          <Route path="StatsCard" element={<StatsCard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/Dashboard"
            element={
              <PrivateClientRoute>
                <DashboardUser />
              </PrivateClientRoute>
            }
          />
        </Routes>
      </AuthProvider>

      <FloatingWhatsApp
        phoneNumber="22940285435"
        accountName="BéninExpress"
        avatar="/logo.png"
        statusMessage="Réponse rapide"
        chatMessage="Bonjour ! Comment pouvons-nous vous aider ?"
        placeholder="Tapez votre message..."
        allowEsc
        allowClickAway
        notification
        notificationSound
        darkMode
      />
    </>
  );
}

export default App;
