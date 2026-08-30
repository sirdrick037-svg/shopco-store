import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductDetails from "./pages/ProductDetails.jsx";
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

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* HOME - Anyone can see this */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* PRODUCTS - Login required */}
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />

        {/* PRODUCT DETAILS - Login required */}
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />

        {/* CATEGORIES - Login required */}
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          }
        />

        {/* CART - Login required */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* WISHLIST - Login required */}
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

        {/* LOGIN - Public */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER - Public */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* FORGOT PASSWORD - Public */}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* CHECKOUT - Login required */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* ACCOUNT - Login required */}
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />

        {/* ORDER SUCCESS - Login required */}
        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />

        {/* ABOUT - Public */}
        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;