import React from "react";
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./components/Layout/MainLayout";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import OrderForm from "./components/sections/OrderForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
          <Route path="/Orderform" element={<OrderForm />} />
        </Route>
      </Routes>

      <FloatingWhatsApp
        phoneNumber="22940285435"
        accountName="BéninExpress"
        avatar="/logo.png" 
        statusMessage="Réponse rapide"
        chatMessage="Bonjour ! Comment pouvons-nous vous aider ?"
        placeholder="Tapez votre message..."
        allowClickAway
        notification
        notificationSound
      />
    </>
  );
}

export default App;
