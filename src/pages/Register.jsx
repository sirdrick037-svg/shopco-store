import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (
      form.password !==
      form.confirmPassword
    ) {
      setError("Passwords do not match.");
      return;
    }

    if (form.password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    register(
      form.name,
      form.email,
      form.password
    );

    navigate("/products");
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4 py-12">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm sm:p-10">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Join ShopCo.
          </p>

          <h1 className="mt-3 text-3xl font-black">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create your account and start shopping.
          </p>

        </div>

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-xs text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >

          {/* NAME */}

          <div>

            <label className="mb-2 block text-xs font-bold">
              Full Name
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3">

              <User
                size={17}
                className="text-gray-400"
              />

              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="h-12 w-full outline-none"
              />

            </div>

          </div>

          {/* EMAIL */}

          <div>

            <label className="mb-2 block text-xs font-bold">
              Email Address
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3">

              <Mail
                size={17}
                className="text-gray-400"
              />

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="h-12 w-full outline-none"
              />

            </div>

          </div>

          {/* PASSWORD */}

          <div>

            <label className="mb-2 block text-xs font-bold">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3">

              <Lock
                size={17}
                className="text-gray-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                className="h-12 w-full outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="text-gray-400"
              >
                {showPassword ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>

            </div>

          </div>

          {/* CONFIRM PASSWORD */}

          <div>

            <label className="mb-2 block text-xs font-bold">
              Confirm Password
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3">

              <Lock
                size={17}
                className="text-gray-400"
              />

              <input
                type="password"
                name="confirmPassword"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                className="h-12 w-full outline-none"
              />

            </div>

          </div>

          <button
            type="submit"
            className="mt-3 h-12 w-full rounded-lg bg-[#111318] text-xs font-bold text-white hover:bg-green-700"
          >
            Create Account
          </button>

        </form>

        <p className="mt-7 text-center text-xs text-gray-500">

          Already have an account?{" "}

          <Link
            to="/login"
            className="font-bold text-green-700 hover:underline"
          >
            Sign In
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;