import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

import { useCart } from "../context/CartContext.jsx";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const shipping = cartTotal >= 100 ? 0 : 10;

  const total = cartTotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <ShoppingBag size={50} className="mx-auto text-gray-300" />

          <h1 className="mt-5 text-2xl font-black">Your Cart Is Empty</h1>

          <p className="mt-2 text-sm text-gray-500">
            You have not added anything to your cart yet.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-6 rounded-lg bg-green-600 px-6 py-3 text-xs font-bold text-white hover:bg-green-700"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-black">Your Cart</h1>

        <p className="mt-2 text-sm text-gray-500">
          Review your products before checkout.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_350px]">
          {/* PRODUCTS */}

          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase text-gray-400">
                    {item.category}
                  </p>

                  <h2 className="mt-1 text-sm font-bold">{item.name}</h2>

                  <p className="mt-2 text-sm font-black">
                    ${Number(item.price).toFixed(2)}
                  </p>

                  {/* QUANTITY */}

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 hover:bg-gray-50"
                    >
                      <Minus size={12} />
                    </button>

                    <span className="w-6 text-center text-xs font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 hover:bg-gray-50"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                {/* REMOVE */}

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="self-start text-gray-400 hover:text-red-500"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))}
          </div>

          {/* SUMMARY */}

          <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-black">Cart Summary</h2>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>

                <span className="font-bold">${cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>

                <span className="font-bold">
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
            </div>

            <div className="my-5 border-t border-gray-100" />

            <div className="flex justify-between">
              <span className="font-black">Total</span>

              <span className="text-xl font-black text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 w-full rounded-lg bg-green-600 py-3 text-xs font-bold text-white hover:bg-green-700"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="mt-3 block text-center text-xs font-bold text-gray-500 hover:text-green-600"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
