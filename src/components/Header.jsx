import {
  Search,
  UserRound,
  ShoppingBag,
  Menu,
  X,
  LogOut,
} from "lucide-react";

import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Header() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    setMobileMenu(false);
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">

      {/* MAIN HEADER */}

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}

        <Link
          to="/"
          className="shrink-0 text-xl font-black tracking-tight"
        >
          ShopCo.
        </Link>


        {/* DESKTOP NAV */}

        <nav className="hidden items-center gap-7 md:flex">

          <Link
            to="/"
            className="whitespace-nowrap text-sm font-medium hover:text-green-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="whitespace-nowrap text-sm font-medium hover:text-green-600"
          >
            Products
          </Link>

          <Link
            to="/categories"
            className="whitespace-nowrap text-sm font-medium hover:text-green-600"
          >
            Categories
          </Link>

          <Link
            to="/about"
            className="whitespace-nowrap text-sm font-medium hover:text-green-600"
          >
            About
          </Link>

        </nav>


        {/* RIGHT SIDE */}

        <div className="flex shrink-0 items-center gap-4">

          {/* SEARCH */}

          <Link
            to="/products"
            className="hidden sm:block"
          >
            <Search
              size={19}
              strokeWidth={1.8}
            />
          </Link>


          {/* ACCOUNT / LOGIN */}

          {user ? (
            <Link
              to="/account"
              className="flex items-center gap-2"
            >
              <UserRound
                size={19}
                strokeWidth={1.8}
              />

              <span className="hidden text-xs font-semibold lg:block">
                {user.name}
              </span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="hidden text-xs font-bold sm:block"
            >
              Sign In
            </Link>
          )}


          {/* CART */}

          <Link
            to="/cart"
            className="relative"
          >
            <ShoppingBag
              size={19}
              strokeWidth={1.8}
            />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[8px] font-bold text-white">
              0
            </span>
          </Link>


          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="md:hidden"
          >
            {mobileMenu ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      {mobileMenu && (
        <div className="border-t border-gray-100 bg-white md:hidden">

          <nav className="flex flex-col gap-1 px-4 py-4">

            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-3 py-3 text-sm hover:bg-gray-50"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-3 py-3 text-sm hover:bg-gray-50"
            >
              Products
            </Link>

            <Link
              to="/categories"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-3 py-3 text-sm hover:bg-gray-50"
            >
              Categories
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-3 py-3 text-sm hover:bg-gray-50"
            >
              About
            </Link>

            <div className="my-2 border-t border-gray-100" />

            {user ? (
              <>
                <Link
                  to="/account"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm"
                >
                  <UserRound size={17} />
                  My Account
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-lg px-3 py-3 text-left text-sm text-red-600"
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenu(false)}
                className="rounded-lg bg-[#111318] px-3 py-3 text-center text-sm font-bold text-white"
              >
                Sign In
              </Link>
            )}

          </nav>

        </div>
      )}

    </header>
  );
}

export default Header;