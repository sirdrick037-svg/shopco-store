import { CheckCircle, Package } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();

  const savedOrder =
    location.state?.order ||
    JSON.parse(localStorage.getItem("shopco_last_order") || "null");

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
          <CheckCircle size={34} className="text-green-600" />
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-600">
          Order Confirmed
        </p>

        <h1 className="mt-2 text-3xl font-black">Thank you for your order!</h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Your order has been successfully placed. We appreciate your shopping
          with ShopCo.
        </p>

        {savedOrder && (
          <div className="mt-8 rounded-xl bg-gray-50 p-5 text-left">
            <div className="flex items-center gap-3">
              <Package size={20} className="text-green-600" />

              <div>
                <p className="text-[10px] uppercase tracking-wide text-gray-400">
                  Order Number
                </p>

                <p className="text-sm font-black">{savedOrder.id}</p>
              </div>
            </div>

            <div className="mt-5 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Items</span>

                <span className="font-bold">
                  {savedOrder.items.reduce(
                    (total, item) => total + item.quantity,
                    0,
                  )}
                </span>
              </div>

              <div className="mt-3 flex justify-between text-xs">
                <span className="text-gray-500">Total</span>

                <span className="font-black">
                  ${savedOrder.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/products"
            className="flex-1 rounded-lg bg-green-600 px-5 py-3 text-xs font-bold text-white hover:bg-green-700"
          >
            Continue Shopping
          </Link>

          <Link
            to="/account"
            className="flex-1 rounded-lg border border-gray-200 px-5 py-3 text-xs font-bold hover:bg-gray-50"
          >
            View Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
