import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, MapPin, User, Truck } from "lucide-react";

import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function Checkout() {
  const navigate = useNavigate();

  const { cart, cartTotal, clearCart } = useCart();

  const { user } = useAuth();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    paymentMethod: "card",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [error, setError] = useState("");

  const shipping = cartTotal >= 100 ? 0 : 10;

  const total = cartTotal + shipping;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.country
    ) {
      setError(
        "Please complete all required customer and shipping information.",
      );
      return;
    }

    if (form.paymentMethod === "card") {
      if (!form.cardName || !form.cardNumber || !form.expiry || !form.cvv) {
        setError("Please complete all card information.");
        return;
      }
    }

    const order = {
      id: `ORD-${Date.now()}`,

      customer: {
        name: form.name,
        email: form.email,
        phone: form.phone,
      },

      shippingAddress: {
        address: form.address,
        city: form.city,
        country: form.country,
        postalCode: form.postalCode,
      },

      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: Number(item.price),
        quantity: item.quantity,
        image: item.image,
      })),

      subtotal: cartTotal,
      shipping,
      total,

      paymentMethod: form.paymentMethod,

      paymentStatus: "paid",

      orderStatus: "confirmed",

      createdAt: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(
      localStorage.getItem("shopco_orders") || "[]",
    );

    localStorage.setItem(
      "shopco_orders",
      JSON.stringify([order, ...existingOrders]),
    );

    localStorage.setItem("shopco_last_order", JSON.stringify(order));

    clearCart();

    navigate("/order-success");
  };

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-black">Your Cart Is Empty</h1>

          <p className="mt-2 text-sm text-gray-500">
            Add some products before checking out.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-6 rounded-lg bg-green-600 px-6 py-3 text-xs font-bold text-white hover:bg-green-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-green-600">
            ShopCo.
          </p>

          <h1 className="mt-2 text-3xl font-black">Checkout</h1>

          <p className="mt-2 text-sm text-gray-500">
            Complete your details to place your order.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 lg:grid-cols-[1fr_380px]"
        >
          {/* LEFT SIDE */}

          <div className="space-y-6">
            {/* CUSTOMER */}

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-green-50 p-2">
                  <User size={18} className="text-green-600" />
                </div>

                <div>
                  <h2 className="text-sm font-black">Customer Information</h2>

                  <p className="text-xs text-gray-400">Your contact details</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600 sm:col-span-2"
                />
              </div>
            </div>

            {/* SHIPPING */}

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-green-50 p-2">
                  <MapPin size={18} className="text-green-600" />
                </div>

                <div>
                  <h2 className="text-sm font-black">Shipping Address</h2>

                  <p className="text-xs text-gray-400">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  className="h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600 sm:col-span-2"
                />

                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
                />

                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
                />

                <input
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  placeholder="Postal code"
                  className="h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
                />
              </div>
            </div>

            {/* PAYMENT */}

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-green-50 p-2">
                  <CreditCard size={18} className="text-green-600" />
                </div>

                <div>
                  <h2 className="text-sm font-black">Payment Method</h2>

                  <p className="text-xs text-gray-400">
                    Select how you want to pay.
                  </p>
                </div>
              </div>

              {/* PAYMENT OPTIONS */}

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="cursor-pointer rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={form.paymentMethod === "card"}
                      onChange={handleChange}
                    />

                    <span className="text-xs font-bold">Card Payment</span>
                  </div>
                </label>

                <label className="cursor-pointer rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={form.paymentMethod === "cash"}
                      onChange={handleChange}
                    />

                    <span className="text-xs font-bold">Cash on Delivery</span>
                  </div>
                </label>
              </div>

              {/* CARD */}

              {form.paymentMethod === "card" && (
                <div className="mt-5 space-y-4">
                  <input
                    name="cardName"
                    value={form.cardName}
                    onChange={handleChange}
                    placeholder="Name on card"
                    className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
                  />

                  <input
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    placeholder="Card number"
                    maxLength="19"
                    className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="expiry"
                      value={form.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
                    />

                    <input
                      name="cvv"
                      value={form.cvv}
                      onChange={handleChange}
                      placeholder="CVV"
                      maxLength="4"
                      className="h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600"
                    />
                  </div>

                  <p className="text-[11px] text-gray-400">
                    Demo payment only. No real card is charged.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-6">
            <h2 className="text-lg font-black">Order Summary</h2>

            <div className="mt-5 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold">{item.name}</p>

                    <p className="mt-1 text-[11px] text-gray-400">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="text-xs font-bold">
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-5 border-t border-gray-100" />

            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>

                <span className="font-bold">${cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-1 text-gray-500">
                  <Truck size={13} />
                  Shipping
                </span>

                <span className="font-bold">
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
            </div>

            <div className="my-5 border-t border-gray-100" />

            <div className="flex items-center justify-between">
              <span className="text-sm font-black">Total</span>

              <span className="text-xl font-black text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-green-600 py-3.5 text-xs font-bold text-white transition hover:bg-green-700"
            >
              {form.paymentMethod === "card"
                ? "Pay & Place Order"
                : "Place Order"}
            </button>

            <p className="mt-4 text-center text-[10px] leading-4 text-gray-400">
              By placing your order, you agree to our terms and conditions.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
