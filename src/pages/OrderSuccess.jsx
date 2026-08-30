import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Package,
  ArrowRight,
} from "lucide-react";

function OrderSuccess() {
  const navigate = useNavigate();

  const order = JSON.parse(
    localStorage.getItem("shopco_last_order") || "null"
  );

  if (!order) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">

        <div className="text-center">

          <h1 className="text-2xl font-black">
            No Order Found
          </h1>

          <button
            onClick={() => navigate("/products")}
            className="mt-5 rounded-lg bg-green-600 px-6 py-3 text-xs font-bold text-white"
          >
            Continue Shopping
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">

      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">

          <CheckCircle
            size={45}
            className="text-green-600"
          />

        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-green-600">
          Order Confirmed
        </p>

        <h1 className="mt-2 text-3xl font-black">
          Thank You For Your Order!
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
          Your order has been successfully placed.
          We will send your order information to your
          email address.
        </p>


        {/* ORDER NUMBER */}

        <div className="mt-8 rounded-xl bg-gray-50 p-5">

          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Order Number
          </p>

          <p className="mt-2 text-lg font-black">
            {order.id}
          </p>

        </div>


        {/* ORDER INFO */}

        <div className="mt-5 grid gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-gray-100 p-4">

            <Package
              size={20}
              className="mx-auto text-green-600"
            />

            <p className="mt-2 text-[10px] text-gray-400">
              Items
            </p>

            <p className="mt-1 text-sm font-bold">
              {order.items.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              )}
            </p>

          </div>


          <div className="rounded-xl border border-gray-100 p-4">

            <p className="text-[10px] text-gray-400">
              Payment
            </p>

            <p className="mt-1 text-sm font-bold capitalize">
              {order.paymentMethod}
            </p>

            <p className="mt-1 text-[10px] font-bold text-green-600">
              {order.paymentStatus}
            </p>

          </div>


          <div className="rounded-xl border border-gray-100 p-4">

            <p className="text-[10px] text-gray-400">
              Total
            </p>

            <p className="mt-1 text-sm font-black text-green-600">
              ${order.total.toFixed(2)}
            </p>

          </div>

        </div>


        {/* BUTTONS */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

          <button
            onClick={() => navigate("/products")}
            className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-xs font-bold text-white hover:bg-green-700"
          >
            Continue Shopping
            <ArrowRight size={15} />
          </button>

          <button
            onClick={() => navigate("/account")}
            className="rounded-lg border border-gray-200 px-6 py-3 text-xs font-bold text-gray-700 hover:bg-gray-50"
          >
            View My Orders
          </button>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;