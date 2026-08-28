import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    category: "Clothing",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    category: "Clothing",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Everyday Sneakers",
    category: "Shoes",
    price: 74.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Leather Handbag",
    category: "Bags",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Minimal Watch",
    category: "Accessories",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Premium Sunglasses",
    category: "Accessories",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Cotton Hoodie",
    category: "Clothing",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Classic Backpack",
    category: "Bags",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Relaxed T-Shirt",
    category: "Clothing",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Running Shoes",
    category: "Shoes",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Leather Belt",
    category: "Accessories",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Canvas Tote Bag",
    category: "Bags",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 13,
    name: "White Casual Sneakers",
    category: "Shoes",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Classic Black Trainers",
    category: "Shoes",
    price: 84.99,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Modern Running Shoes",
    category: "Shoes",
    price: 94.99,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Classic Leather Shoes",
    category: "Shoes",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = ["All", "Clothing", "Shoes", "Bags", "Accessories"];

function Products() {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HEADER ================= */}

      <section className="border-b border-gray-100 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
            ShopCo. Collection
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            All Products
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Discover our collection of clothing, shoes, accessories, bags and
            everyday essentials.
          </p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* CATEGORY BUTTONS */}

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                    selectedCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* SEARCH */}

            <div className="flex w-full items-center gap-2 rounded-lg border border-gray-200 px-3 md:w-64">
              <Search size={17} className="shrink-0 text-gray-400" />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="h-10 w-full text-xs outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* PRODUCT COUNT */}

          <div className="mb-5">
            <p className="text-xs text-gray-500">
              Showing{" "}
              <span className="font-bold text-gray-900">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>
          </div>

          {/* PRODUCT GRID */}

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group min-w-0">
                {/* ================= IMAGE ================= */}

                <Link to={`/products/${product.id}`} className="block">
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* ================= DETAILS ================= */}

                <div className="pt-3">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                    {product.category}
                  </p>

                  <Link to={`/products/${product.id}`}>
                    <h2 className="mt-1 truncate text-xs font-bold text-gray-900 hover:text-green-600">
                      {product.name}
                    </h2>
                  </Link>

                  {/* PRICE + RATING */}

                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </p>

                    <span className="text-[10px] text-gray-400">★ 4.8</span>
                  </div>

                  {/* ================= ADD TO CART ================= */}

                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-2 text-[10px] font-bold text-white transition hover:bg-green-700"
                  >
                    <ShoppingBag size={13} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* == NO RESULTS == */}

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <ShoppingBag size={35} className="mx-auto text-gray-300" />

              <h2 className="mt-4 text-sm font-bold">No products found</h2>

              <p className="mt-1 text-xs text-gray-500">
                Try another search or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
                className="mt-5 rounded-lg bg-green-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-green-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;
