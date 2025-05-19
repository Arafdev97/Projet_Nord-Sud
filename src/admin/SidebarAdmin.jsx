import { LayoutDashboard, Package, Users, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Tableau de bord", icon: LayoutDashboard, path: "/DashboardAdmin" },
  { label: "Commandes", icon: Package, path: "/DashboardAdmin/orders" },
  { label: "Clients", icon: Users, path: "/DashboardAdmin/clients" },
  { label: "Paramètres", icon: Settings, path: "/DashboardAdmin/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-400 shadow-lg p-6 space-y-6">
      <h1 className="text-2xl font-bold text-primary">Nord-Sud Admin</h1>
      <nav className="flex flex-col space-y-2">
        {links.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-black-700 hover:bg-gray-100"
              }`
            }
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
