import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  const shipping =
    cartTotal >= 100 || cartTotal === 0
      ? 0
      : 10;

  const total = cartTotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <ShoppingBag
              size={28}
              className="text-gray-400"
            />
          </div>

          <h1 className="mt-6 text-3xl font-black">
            Your cart is empty
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Looks like you haven't added anything
            to your cart yet.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-xs font-bold text-white hover:bg-green-700"
          >
            Start Shopping
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
            ShopCo.
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Shopping Cart
          </h1>

        </div>


        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">

          {/* CART ITEMS */}

          <div className="space-y-3">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex gap-4 rounded-xl bg-white p-4"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 shrink-0 rounded-lg object-cover"
                />

                <div className="flex min-w-0 flex-1 flex-col justify-between">

                  <div>

                    <p className="text-[10px] uppercase tracking-wide text-gray-400">
                      {item.category}
                    </p>

                    <h2 className="mt-1 truncate text-sm font-bold">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-xs font-semibold">
                      ${item.price.toFixed(2)}
                    </p>

                  </div>


                  <div className="mt-3 flex items-center justify-between">

                    {/* QUANTITY */}

                    <div className="flex items-center rounded-lg border border-gray-200">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="p-2 hover:bg-gray-50"
                      >
                        <Minus size={13} />
                      </button>

                      <span className="w-8 text-center text-xs font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="p-2 hover:bg-gray-50"
                      >
                        <Plus size={13} />
                      </button>

                    </div>


                    {/* REMOVE */}

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* SUMMARY */}

          <div className="h-fit rounded-xl bg-white p-6">

            <h2 className="text-lg font-black">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-xs">

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-bold">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Shipping
                </span>

                <span className="font-bold">
                  {shipping === 0
                    ? "Free"
                    : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="border-t border-gray-100 pt-4">

                <div className="flex justify-between">

                  <span className="font-bold">
                    Total
                  </span>

                  <span className="text-lg font-black">
                    ${total.toFixed(2)}
                  </span>

                </div>

              </div>

            </div>


            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-600 text-xs font-bold text-white hover:bg-green-700"
            >
              Proceed to Checkout
              <ArrowRight size={15} />
            </button>

            <Link
              to="/products"
              className="mt-4 block text-center text-xs font-bold text-gray-500 hover:text-green-600"
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