import { useNavigate } from "react-router-dom";
import {
  Package,
  LogOut,
} from "lucide-react";

import { useAuth } from "../context/AuthContext.jsx";

function Account() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const orders = JSON.parse(
    localStorage.getItem("shopco_orders") || "[]"
  );

  const handleLogout = () => {
    logout();
    navigate("/logout");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-5xl">

        {/* HEADER */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-widest text-green-600">
              My Account
            </p>

            <h1 className="mt-2 text-3xl font-black">
              {user?.name || "My Account"}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {user?.email}
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50"
          >
            <LogOut size={15} />
            Logout
          </button>

        </div>


        {/* ORDERS */}

        <div className="mt-10">

          <h2 className="text-lg font-black">
            My Orders
          </h2>

          {orders.length === 0 ? (

            <div className="mt-5 rounded-2xl bg-white p-10 text-center shadow-sm">

              <Package
                size={40}
                className="mx-auto text-gray-300"
              />

              <h3 className="mt-4 text-sm font-bold">
                No orders yet
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Your orders will appear here.
              </p>

              <button
                onClick={() => navigate("/products")}
                className="mt-5 rounded-lg bg-green-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-green-700"
              >
                Start Shopping
              </button>

            </div>

          ) : (

            <div className="mt-5 space-y-5">

              {orders.map((order) => (

                <div
                  key={order.id}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                      <p className="text-xs font-black">
                        {order.id}
                      </p>

                      <p className="mt-1 text-[11px] text-gray-400">
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString()}
                      </p>

                    </div>


                    <div className="flex gap-2">

                      <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold capitalize text-green-600">
                        {order.orderStatus}
                      </span>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold capitalize text-blue-600">
                        {order.paymentStatus}
                      </span>

                    </div>

                  </div>


                  <div className="my-5 border-t border-gray-100" />


                  <div className="space-y-3">

                    {order.items.map((item) => (

                      <div
                        key={item.id}
                        className="flex items-center gap-3"
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-14 w-14 rounded-lg object-cover"
                        />

                        <div className="flex-1">

                          <p className="text-xs font-bold">
                            {item.name}
                          </p>

                          <p className="mt-1 text-[10px] text-gray-400">
                            Quantity: {item.quantity}
                          </p>

                        </div>

                        <p className="text-xs font-bold">
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </p>

                      </div>

                    ))}

                  </div>


                  <div className="mt-5 flex justify-between border-t border-gray-100 pt-5">

                    <span className="text-xs text-gray-500">
                      Order Total
                    </span>

                    <span className="text-sm font-black text-green-600">
                      ${order.total.toFixed(2)}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Account;