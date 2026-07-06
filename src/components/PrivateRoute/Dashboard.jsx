import { Navigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import { useAuthContext } from "../../context/AuthContext";

const DashboardPrivate = () => {
  const { user, isAuth } = useAuthContext();

  if (!isAuth) return <Navigate to="/auth/login" />;

  if (user?.email === `${import.meta.env.VITE_ADMIN_EMAIL}`)
    return <Dashboard />;
  return <Navigate to="/" />;
};

export default DashboardPrivate;
