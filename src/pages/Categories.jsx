import { Link } from "react-router-dom";

const categories = [
  {
    name: "Clothing",
    description: "Everyday shirts, jackets, hoodies and more.",
    count: "24 Products",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Shoes",
    description: "Comfortable footwear for every occasion.",
    count: "18 Products",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Bags",
    description: "Backpacks, handbags and everyday carry.",
    count: "15 Products",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Accessories",
    description: "Complete your look with simple details.",
    count: "21 Products",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Watches",
    description: "Minimal watches for everyday style.",
    count: "12 Products",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Sunglasses",
    description: "Modern frames for sunny days.",
    count: "10 Products",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
  },
];

function Categories() {
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
              <Link
                key={category.name}
                to="/products"
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-md"
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
                      {category.count}
                    </span>
                  </div>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                    {category.description}
                  </p>

                  <p className="mt-3 text-[11px] font-bold text-green-600">
                    Explore collection →
                  </p>
                </div>
              </Link>
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

export default Categories;
