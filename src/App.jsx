import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Categories from "./pages/Categories.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Checkout from "./pages/Checkout.jsx";
import Account from "./pages/Account.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Logout from "./pages/Logout.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

// Context
import { useAuth } from "./context/AuthContext.jsx";
import { useCart } from "./context/CartContext.jsx";

// ======================================================
// PROTECTED ROUTE
// ======================================================

function ProtectedRoute() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

// ======================================================
// PUBLIC LAYOUT
// ======================================================

function PublicLayout() {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* LOGO */}

          <Link
            to="/"
            className="text-xl font-black tracking-tight text-gray-900"
          >
            Shop<span className="text-green-600">Co.</span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              to="/"
              className="text-xs font-semibold text-gray-700 transition hover:text-green-600"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-xs font-semibold text-gray-700 transition hover:text-green-600"
            >
              Products
            </Link>

            <Link
              to="/categories"
              className="text-xs font-semibold text-gray-700 transition hover:text-green-600"
            >
              Categories
            </Link>

            <Link
              to="/about"
              className="text-xs font-semibold text-gray-700 transition hover:text-green-600"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-xs font-semibold text-gray-700 transition hover:text-green-600"
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/account"
                  className="text-xs font-bold text-gray-700 hover:text-green-600"
                >
                  My Account
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-xs font-bold text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-xs font-bold text-gray-700 hover:text-green-600"
              >
                Login
              </Link>
            )}

            <Link
              to="/cart"
              className="relative rounded-lg p-2 text-gray-700 hover:bg-gray-50"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-600 px-1 text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}

      <main>
        <Outlet />
      </main>

      {/* FOOTER */}

      <footer className="border-t border-gray-100 bg-gray-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {/* BRAND */}

          <div>
            <h2 className="text-xl font-black">
              Shop<span className="text-green-500">Co.</span>
            </h2>

            <p className="mt-4 max-w-xs text-xs leading-6 text-gray-400">
              Modern fashion and everyday essentials designed for comfort, style
              and confidence.
            </p>
          </div>

          {/* SHOP */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest">
              Shop
            </h3>

            <div className="mt-4 space-y-3">
              <Link
                to="/products"
                className="block text-xs text-gray-400 hover:text-white"
              >
                All Products
              </Link>

              <Link
                to="/categories"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Categories
              </Link>

              <Link
                to="/cart"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Cart
              </Link>

              <Link
                to="/wishlist"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Wishlist
              </Link>
            </div>
          </div>

          {/* COMPANY */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <Link
                to="/about"
                className="block text-xs text-gray-400 hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Contact
              </Link>

              <Link
                to="/account"
                className="block text-xs text-gray-400 hover:text-white"
              >
                My Account
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICE */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest">
              Customer Service
            </h3>

            <div className="mt-4 space-y-3">
              <p className="text-xs text-gray-400">Free shipping over $100</p>

              <p className="text-xs text-gray-400">30-day easy returns</p>

              <p className="text-xs text-gray-400">Secure checkout</p>

              <p className="text-xs text-gray-400">24/7 support</p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-5 text-center text-[10px] text-gray-500 sm:px-6 lg:px-8">
            © 2026 ShopCo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// ======================================================
// APP
// ======================================================

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* =================================================
            PUBLIC PAGES
        ================================================= */}

        <Route element={<PublicLayout />}>
          {/* HOME */}

          <Route path="/" element={<Home />} />

          {/* LOGIN */}

          <Route path="/login" element={<Login />} />

          {/* REGISTER */}

          <Route path="/register" element={<Register />} />

          {/* FORGOT PASSWORD */}

          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* LOGOUT */}

          <Route path="/logout" element={<Logout />} />

          {/* ABOUT */}

          <Route path="/about" element={<About />} />

          {/* CONTACT */}

          <Route path="/contact" element={<Contact />} />

          {/* PRODUCTS */}

          <Route path="/products" element={<Products />} />

          {/* PRODUCT DETAILS */}

          <Route path="/products/:id" element={<ProductDetails />} />

          {/* CATEGORIES */}

          <Route path="/categories" element={<Categories />} />

          {/* =================================================
              PROTECTED PAGES
          ================================================= */}

          <Route element={<ProtectedRoute />}>

            {/* CART */}

            <Route path="/cart" element={<Cart />} />

            {/* WISHLIST */}

            <Route path="/wishlist" element={<Wishlist />} />

            {/* CHECKOUT */}

            <Route path="/checkout" element={<Checkout />} />

            {/* ACCOUNT */}

            <Route path="/account" element={<Account />} />

            {/* ORDER SUCCESS */}

            <Route path="/order-success" element={<OrderSuccess />} />
          </Route>

          {/* =================================================
              UNKNOWN PAGE
          ================================================= */}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
