import { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const result = login(email.trim(), password);

    if (!result.success) {
      setError(result.message);
      setLoading(false);

      return;
    }

    setLoading(false);

    const destination = location.state?.from?.pathname || "/products";

    navigate(destination, {
      replace: true,
    });
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm sm:p-10">
        {/* HEADER */}

        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Welcome back
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight">Sign In</h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to your ShopCo. account.
          </p>
        </div>

        {/* ERROR MESSAGE */}

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* LOGIN FORM */}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* EMAIL */}

          <div>
            <label className="mb-2 block text-xs font-bold text-gray-900">
              Email Address
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 transition focus-within:border-green-600">
              <Mail size={18} className="shrink-0 text-gray-400" />

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* PASSWORD */}

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-xs font-bold text-gray-900">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-[11px] font-semibold text-green-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 transition focus-within:border-green-600">
              <Lock size={18} className="shrink-0 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-lg bg-[#111318] text-xs font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* REGISTER */}

        <p className="mt-7 text-center text-xs text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-green-700 hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
