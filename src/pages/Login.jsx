import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const result = login(
      email,
      password
    );

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/products");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">

        <div className="text-center">

          <h1 className="text-2xl font-black">
            Welcome Back
          </h1>

          <p className="mt-2 text-xs text-gray-500">
            Login to continue shopping with ShopCo.
          </p>

        </div>

        {error && (
          <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
            className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
            className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
          />

          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-green-600 text-xs font-bold text-white hover:bg-green-700"
          >
            Login
          </button>

        </form>

        <div className="mt-6 text-center text-xs text-gray-500">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-bold text-green-600 hover:text-green-700"
          >
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;