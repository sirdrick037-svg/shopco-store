import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

// Authentication
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

// Checkout & Account
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import OrderSuccess from "./pages/OrderSuccess";

// Other
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">

        {/* HEADER */}
        <Header />

        {/* PAGES */}
        <main>
          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* PRODUCTS */}
            <Route
              path="/products"
              element={<Products />}
            />

            {/* PRODUCT DETAILS */}
            <Route
              path="/products/:id"
              element={<ProductDetails />}
            />

            {/* CATEGORIES */}
            <Route
              path="/categories"
              element={<Categories />}
            />

            {/* CART */}
            <Route
              path="/cart"
              element={<Cart />}
            />

            {/* WISHLIST */}
            <Route
              path="/wishlist"
              element={<Wishlist />}
            />

            {/* AUTHENTICATION */}
            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/forgot-password"
              element={<ForgotPassword />}
            />

            {/* CHECKOUT */}
            <Route
              path="/checkout"
              element={<Checkout />}
            />

            {/* ACCOUNT */}
            <Route
              path="/account"
              element={<Account />}
            />

            {/* ORDER SUCCESS */}
            <Route
              path="/order-success"
              element={<OrderSuccess />}
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* 404 PAGE */}
            <Route
              path="*"
              element={
                <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">

                  <h1 className="text-6xl font-black">
                    404
                  </h1>

                  <h2 className="mt-4 text-2xl font-bold">
                    Page Not Found
                  </h2>

                  <p className="mt-2 max-w-md text-sm text-gray-500">
                    Sorry, the page you're looking for
                    doesn't exist.
                  </p>

                  <a
                    href="/"
                    className="mt-6 rounded-lg bg-[#111318] px-6 py-3 text-xs font-bold text-white transition hover:bg-green-700"
                  >
                    Back to Home
                  </a>

                </div>
              }
            />

          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;