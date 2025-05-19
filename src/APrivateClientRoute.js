import { useAuth } from "./authentification/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateClientRoute({ children }) {
  const { user } = useAuth();

  if (!user || user.role !== "client") {
     <Navigate to="/login" replace />;
  }

  return children;
}
