import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();

    const timer = setTimeout(() => {
      navigate("/login", { replace: true });
    }, 500);

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4">
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100">
        <h1 className="text-2xl font-black text-gray-900">Logging out...</h1>
        <p className="mt-2 text-sm text-gray-500">
          You are being signed out of your account.
        </p>
      </div>
    </div>
  );
}

export default Logout;
