import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 59.99,
    category: "Shoes",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Essential Hoodie",
    price: 39.99,
    category: "Hoodies",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Minimal T-Shirt",
    price: 24.99,
    category: "T-Shirts",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Urban Cap",
    price: 19.99,
    category: "Accessories",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Canvas Backpack",
    price: 49.99,
    category: "Accessories",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Oversized Hoodie",
    price: 44.99,
    category: "Hoodies",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Striped T-Shirt",
    price: 26.99,
    category: "T-Shirts",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "High Top Sneakers",
    price: 69.99,
    category: "Shoes",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Black Running Shoes",
    price: 74.99,
    category: "Shoes",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Everyday Casual Shoes",
    price: 64.99,
    category: "Shoes",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
  },
  {
  id: 11,
  name: "Classic Leather Belt",
  price: 29.99,
  category: "Belts",
  rating: 4.6,
  image:
    "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80",
  description:
    "A classic leather belt with a simple design that works perfectly with casual and formal outfits.",
},

{
  id: 12,
  name: "Classic Wrist Watch",
  price: 79.99,
  category: "Watches",
  rating: 4.8,
  image:
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
  description:
    "A stylish everyday wrist watch with a clean design that adds a sophisticated touch to any outfit.",
},

{
  id: 13,
  name: "Modern Sunglasses",
  price: 34.99,
  category: "Sunglasses",
  rating: 4.5,
  image:
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
  description:
    "Modern sunglasses designed to complete your look while providing comfortable protection from the sun.",
},

{
  id: 14,
  name: "Leather Shoulder Bag",
  price: 54.99,
  category: "Bags",
  rating: 4.7,
  image:
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
  description:
    "A stylish and practical shoulder bag suitable for everyday use.",
},

{
  id: 15,
  name: "Classic Wallet",
  price: 24.99,
  category: "Accessories",
  rating: 4.6,
  image:
    "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
  description:
    "A compact and elegant wallet designed to keep your everyday essentials organized.",
},

{
  id: 16,
  name: "Fashion Bracelet",
  price: 19.99,
  category: "Accessories",
  rating: 4.4,
  image:
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80",
  description:
    "A simple fashion bracelet that adds a stylish finishing touch to your outfit.",
},
];

function Products() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-green-600">
            ShopCo.
          </p>

          <h1 className="mt-2 text-3xl font-black text-gray-900">
            All Products
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Discover our latest collection.
          </p>
        </div>

        {/* PRODUCTS */}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white p-2 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* CLICKABLE IMAGE */}

              <Link to={`/products/${product.id}`}>
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* PRODUCT INFORMATION */}

              <div className="p-2">
                <Link to={`/products/${product.id}`}>
                  <p className="mt-1 text-[10px] font-medium uppercase text-gray-400">
                    {product.category}
                  </p>

                  <h2 className="mt-1 line-clamp-2 text-xs font-bold text-gray-900">
                    {product.name}
                  </h2>
                </Link>

                {/* RATING */}

                <div className="mt-2 flex items-center gap-1">
                  <Star size={11} className="fill-green-500 text-green-500" />

                  <span className="text-[10px] text-gray-500">
                    {product.rating}
                  </span>
                </div>

                {/* PRICE */}

                <p className="mt-2 text-sm font-black text-gray-900">
                  ${product.price.toFixed(2)}
                </p>

                {/* ADD TO CART */}

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-2.5 text-[10px] font-bold text-white transition hover:bg-green-700"
                >
                  <ShoppingBag size={13} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
