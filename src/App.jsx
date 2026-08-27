import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import OrderSuccess from "./pages/OrderSuccess";

import About from "./pages/About";

import { useAuth } from "./context/AuthContext";


// ------------------------------------
// PROTECTED ROUTE
// ------------------------------------

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}


// ------------------------------------
// APP
// ------------------------------------

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>

      {/* Show Header only after login */}
      {user && <Header />}

      <main>
        <Routes>

          {/* ========================= */}
          {/* PUBLIC ROUTES */}
          {/* ========================= */}

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


          {/* ========================= */}
          {/* PROTECTED ROUTES */}
          {/* ========================= */}

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          <Route
            path="/products/:id"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          <Route
            path="/order-success"
            element={
              <ProtectedRoute>
                <OrderSuccess />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />


          {/* ========================= */}
          {/* UNKNOWN URL */}
          {/* ========================= */}

          <Route
            path="*"
            element={
              <Navigate
                to={user ? "/" : "/login"}
                replace
              />
            }
          />

        </Routes>
      </main>


      {/* Footer only after login */}
      {user && <Footer />}

    </BrowserRouter>
  );
}

export default App;