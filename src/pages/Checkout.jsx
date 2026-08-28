import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const [payment, setPayment] = useState("card");

  const [loading, setLoading] = useState(false);

  const shipping = cartTotal >= 100 ? 0 : 10;

  const total = cartTotal + shipping;

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      navigate("/products");
      return;
    }

    setLoading(true);

    const order = {
      id: `SHOP-${Date.now()}`,
      customer: form,
      items: cart,
      subtotal: cartTotal,
      shipping,
      total,
      payment,
      date: new Date().toISOString(),
    };

    localStorage.setItem("shopco_last_order", JSON.stringify(order));

    setTimeout(() => {
      clearCart();

      navigate("/order-success", {
        state: {
          order,
        },
      });
    }, 800);
  };

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-black">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-black">Checkout</h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-6 lg:grid-cols-[1fr_350px]"
        >
          {/* CUSTOMER DETAILS */}

          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6">
              <h2 className="text-lg font-black">Contact Information</h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <input
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="h-11 rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
                />

                <input
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="h-11 rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="h-11 rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
                />

                <input
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="h-11 rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
                />
              </div>
            </div>

            {/* SHIPPING */}

            <div className="rounded-xl bg-white p-6">
              <h2 className="text-lg font-black">Shipping Address</h2>

              <div className="mt-5 space-y-4">
                <input
                  name="address"
                  placeholder="Street address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="h-11 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="h-11 rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
                  />

                  <input
                    name="country"
                    placeholder="Country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="h-11 rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600"
                  />
                </div>
              </div>
            </div>

            {/* PAYMENT */}

            <div className="rounded-xl bg-white p-6">
              <h2 className="text-lg font-black">Payment Method</h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4">
                  <input
                    type="radio"
                    value="card"
                    checked={payment === "card"}
                    onChange={(event) => setPayment(event.target.value)}
                  />

                  <span className="text-xs font-bold">Card Payment</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4">
                  <input
                    type="radio"
                    value="cash"
                    checked={payment === "cash"}
                    onChange={(event) => setPayment(event.target.value)}
                  />

                  <span className="text-xs font-bold">Cash on Delivery</span>
                </label>
              </div>

              {payment === "card" && (
                <div className="mt-5 grid gap-4">
                  <input
                    placeholder="Card number"
                    required
                    className="h-11 rounded-lg border border-gray-200 px-3 text-sm outline-none"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      placeholder="MM / YY"
                      required
                      className="h-11 rounded-lg border border-gray-200 px-3 text-sm outline-none"
                    />

                    <input
                      placeholder="CVV"
                      required
                      className="h-11 rounded-lg border border-gray-200 px-3 text-sm outline-none"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ORDER SUMMARY */}

          <div className="h-fit rounded-xl bg-white p-6">
            <h2 className="text-lg font-black">Your Order</h2>

            <div className="mt-5 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold">{item.name}</p>

                    <p className="mt-1 text-[10px] text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="text-xs font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-gray-100 pt-5 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>

                <span className="font-bold">${cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>

                <span className="font-bold">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between border-t border-gray-100 pt-4">
                <span className="font-black">Total</span>

                <span className="text-lg font-black">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 h-12 w-full rounded-lg bg-green-600 text-xs font-bold text-white hover:bg-green-700 disabled:opacity-60"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
