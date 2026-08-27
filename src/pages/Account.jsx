import {
  LogOut,
  Mail,
  User,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Account() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">

        <div className="text-center">

          <h1 className="text-2xl font-black">
            You're not signed in
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to access your account.
          </p>

          <Link
            to="/login"
            className="mt-6 inline-flex rounded-lg bg-[#111318] px-6 py-3 text-xs font-bold text-white"
          >
            Sign In
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            My Account
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Hello, {user.name}
          </h1>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* ACCOUNT MENU */}

          <div className="rounded-xl bg-white p-5 shadow-sm">

            <Link
              to="/account"
              className="block rounded-lg bg-gray-100 px-4 py-3 text-xs font-bold"
            >
              Account Details
            </Link>

            <Link
              to="/orders"
              className="mt-2 block rounded-lg px-4 py-3 text-xs hover:bg-gray-50"
            >
              My Orders
            </Link>

            <Link
              to="/wishlist"
              className="mt-2 block rounded-lg px-4 py-3 text-xs hover:bg-gray-50"
            >
              Wishlist
            </Link>

            <button
              onClick={handleLogout}
              className="mt-2 flex w-full items-center gap-2 rounded-lg px-4 py-3 text-left text-xs text-red-600 hover:bg-red-50"
            >
              <LogOut size={15} />
              Logout
            </button>

          </div>

          {/* DETAILS */}

          <div className="rounded-xl bg-white p-6 shadow-sm md:col-span-2">

            <h2 className="text-lg font-black">
              Account Details
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-4 rounded-lg border border-gray-100 p-4">

                <User
                  size={18}
                  className="text-green-700"
                />

                <div>
                  <p className="text-[10px] uppercase text-gray-400">
                    Name
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {user.name}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4 rounded-lg border border-gray-100 p-4">

                <Mail
                  size={18}
                  className="text-green-700"
                />

                <div>
                  <p className="text-[10px] uppercase text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {user.email}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Account;