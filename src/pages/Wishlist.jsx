import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { useState } from "react";

const wishlistProducts = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 59.99,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Essential Hoodie",
    price: 39.99,
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Minimal T-Shirt",
    price: 24.99,
    category: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Urban Cap",
    price: 19.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "High Top Sneakers",
    price: 69.99,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
  },
];

function Wishlist() {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("shopco_wishlist");

    try {
      return saved ? JSON.parse(saved) : wishlistProducts;
    } catch {
      return wishlistProducts;
    }
  });

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((product) => product.id !== id);

    setWishlist(updatedWishlist);

    localStorage.setItem("shopco_wishlist", JSON.stringify(updatedWishlist));
  };

  const moveToCart = (product) => {
    addToCart(product);

    removeFromWishlist(product.id);
  };

  const buyNow = (product) => {
    addToCart(product);

    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
              <Heart size={20} className="text-green-600" />
            </div>

            <div>
              <h1 className="text-3xl font-black text-gray-900">My Wishlist</h1>

              <p className="mt-1 text-xs text-gray-500">
                Save your favorite products for later.
              </p>
            </div>
          </div>
        </div>

        {/* EMPTY WISHLIST */}

        {wishlist.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <Heart size={50} className="mx-auto text-gray-200" />

            <h2 className="mt-5 text-xl font-black text-gray-900">
              Your Wishlist Is Empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              You haven't saved any products yet. Browse our products and add
              your favorites to your wishlist.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="mt-6 rounded-lg bg-green-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-green-700"
            >
              Browse Products
            </button>
          </div>
        ) : (
          /* PRODUCTS */

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* IMAGE */}

                <div className="relative">
                  <Link to={`/products/${product.id}`}>
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* REMOVE BUTTON */}

                  <button
                    type="button"
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-red-50"
                    title="Remove from wishlist"
                  >
                    <Trash2 size={14} className="text-red-500" />
                  </button>
                </div>

                {/* DETAILS */}

                <div className="p-2">
                  <p className="text-[10px] font-medium uppercase text-gray-400">
                    {product.category}
                  </p>

                  <Link to={`/products/${product.id}`}>
                    <h2 className="mt-1 line-clamp-2 text-xs font-bold text-gray-900 hover:text-green-600">
                      {product.name}
                    </h2>
                  </Link>

                  <p className="mt-2 text-sm font-black text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>

                  {/* ADD TO CART */}

                  <button
                    type="button"
                    onClick={() => moveToCart(product)}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-2.5 text-[10px] font-bold text-white transition hover:bg-green-700"
                  >
                    <ShoppingBag size={13} />
                    Add to Cart
                  </button>

                  {/* BUY NOW */}

                  <button
                    type="button"
                    onClick={() => buyNow(product)}
                    className="mt-2 w-full rounded-lg border border-gray-200 py-2.5 text-[10px] font-bold text-gray-700 transition hover:border-green-600 hover:text-green-600"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
