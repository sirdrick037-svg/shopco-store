import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import products from "../data/products.js";

const categories = [
  {
    name: "Clothing",
    description: "Everyday shirts, jackets, hoodies and more.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Shoes",
    description: "Comfortable footwear for every occasion.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Bags",
    description: "Backpacks, handbags and everyday carry.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Accessories",
    description: "Complete your look with simple details.",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Watches",
    description: "Minimal watches for everyday style.",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Sunglasses",
    description: "Modern frames for sunny days.",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
  },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : [];

  const categoryCount = (categoryName) => {
    return products.filter((p) => p.category === categoryName).length;
  };

  // PRODUCT VIEW
  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-white">
        {/* HEADER */}

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs font-semibold text-green-600 hover:text-green-700 mb-4"
            >
              ← Back to Categories
            </button>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              {selectedCategory}
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Showing {filteredProducts.length} products
            </p>
          </div>
        </section>

        {/* PRODUCTS GRID */}

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="group"
                  >
                    {/* IMAGE */}

                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* INFO */}

                    <div className="mt-4">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {product.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${
                                i < Math.floor(product.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>

                      <p className="mt-2 text-lg font-bold text-gray-900">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // CATEGORIES VIEW
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
            ShopCo.
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Shop by Category
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Explore our collections and find products that fit your style and
            everyday needs.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-md text-left"
              >
                {/* IMAGE */}

                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* INFORMATION */}

                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-sm font-black">{category.name}</h2>

                    <span className="text-[10px] font-semibold text-green-600">
                      {categoryCount(category.name)} Products
                    </span>
                  </div>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                    {category.description}
                  </p>

                  <p className="mt-3 text-[11px] font-bold text-green-600">
                    Explore collection →
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-gray-50 px-6 py-10 text-center">
          <h2 className="text-2xl font-black">Can't decide what to shop?</h2>

          <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-gray-500">
            Browse our complete collection and discover something new.
          </p>

          <Link
            to="/products"
            className="mt-5 inline-flex rounded-lg bg-green-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-green-700"
          >
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
