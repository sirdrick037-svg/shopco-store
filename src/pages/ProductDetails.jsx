import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 59.99,
    category: "Shoes",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description:
      "Classic white sneakers designed for everyday comfort and a clean modern look.",
  },
  {
    id: 2,
    name: "Essential Hoodie",
    price: 39.99,
    category: "Hoodies",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    description: "A comfortable everyday hoodie with a simple modern design.",
  },
  {
    id: 3,
    name: "Minimal T-Shirt",
    price: 24.99,
    category: "T-Shirts",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description: "A clean and versatile t-shirt suitable for everyday outfits.",
  },
  {
    id: 4,
    name: "Urban Cap",
    price: 19.99,
    category: "Accessories",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    description: "A stylish urban cap that completes your casual look.",
  },
  {
    id: 8,
    name: "High Top Sneakers",
    price: 69.99,
    category: "Shoes",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    description:
      "Comfortable high-top sneakers with a modern streetwear style.",
  },
];

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black">Product Not Found</h1>

          <button
            onClick={() => navigate("/products")}
            className="mt-5 rounded-lg bg-green-600 px-5 py-3 text-xs font-bold text-white"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/products"
          className="mb-8 flex w-fit items-center gap-2 text-xs font-bold text-gray-500 hover:text-green-600"
        >
          <ArrowLeft size={15} />
          Back to Products
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* IMAGE */}

          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>

          {/* DETAILS */}

          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-widest text-green-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-black text-gray-900">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    className="fill-green-500 text-green-500"
                  />
                ))}
              </div>

              <span className="text-xs text-gray-500">{product.rating}</span>
            </div>

            <p className="mt-6 text-3xl font-black">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500">
              {product.description}
            </p>

            {/* FEATURES */}

            <div className="mt-7 space-y-3 text-xs text-gray-600">
              <p>✓ Free shipping on orders over $50</p>

              <p>✓ Easy 30-day returns</p>

              <p>✓ Secure checkout</p>

              <p>✓ Quality materials</p>
            </div>

            {/* BUTTONS */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-xs font-bold text-white hover:bg-green-700"
              >
                <ShoppingBag size={16} />
                Add to Cart
              </button>

              <button
                onClick={() => {
                  addToCart(product);
                  navigate("/checkout");
                }}
                className="rounded-lg border border-gray-200 px-8 py-4 text-xs font-bold text-gray-900 hover:bg-gray-50"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
