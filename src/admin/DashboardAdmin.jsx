import { Routes, Route } from "react-router-dom";
import Sidebar from "./SidebarAdmin";
import HomeAdmin from "./HomeAdmin";
import Clients from "./ClientsAdmin";
import Orders from "./OrdersAdmin";
import Settings from "./SettingsAdmin";
import StatsCard from "./StatsCardAdmin";
import { motion } from "framer-motion";

export default function DashboardAdmin() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route index element={<HomeAdmin />} />
          <Route path="clients" element={<Clients />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
          <Route path="statsCard" element={<StatsCard />} />
        </Routes>
      </main>
    </div>
    </motion.div>
  );
}
