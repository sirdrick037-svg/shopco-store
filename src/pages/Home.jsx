import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 39.99,
    image:
      "https://api.example.com/images/shirt-1.jpg",
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    price: 59.99,
    image:
      "https://api.example.com/images/jacket-1.jpg",
  },
  {
    id: 3,
    name: "Everyday Sneakers",
    price: 74.99,
    image:
      "https://api.example.com/images/shoe-1.jpg",
  },
  {
    id: 4,
    name: "Leather Handbag",
    price: 89.99,
    image:
      "https://api.example.com/images/bag-1.jpg",
  },
  {
    id: 5,
    name: "Minimal Watch",
    price: 49.99,
    image:
      "https://api.example.com/images/watch-1.jpg",
  },
  {
    id: 6,
    name: "Premium Sunglasses",
    price: 34.99,
    image:
      "https://api.example.com/images/sunglasses-1.jpg",
  },
  {
    id: 7,
    name: "Cotton Hoodie",
    price: 44.99,
    image:
      "https://api.example.com/images/hoodie-1.jpg",
  },
  {
    id: 8,
    name: "Classic Backpack",
    price: 64.99,
    image:
      "https://api.example.com/images/backpack-1.jpg",
  },
];

function Home() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}

      <section className="px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

          {/* TEXT */}

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              Welcome to ShopCo.
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Discover your
              <br />
              everyday style.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500">
              Explore carefully selected products designed
              to bring comfort, style, and simplicity into
              your everyday life.
            </p>

            {/* GET STARTED */}

            <Link
              to="/login"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-xs font-bold text-white shadow-sm transition duration-200 hover:bg-green-700 hover:shadow-md"
            >
              Get Started
              <ArrowRight size={15} />
            </Link>

          </div>


          {/* HERO IMAGE */}

          <div className="overflow-hidden rounded-2xl">

            <img
              src="https://api.example.com/images/hero-banner.jpg"
              alt="ShopCo collection"
              className="h-[420px] w-full object-cover"
            />

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-7">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              Shop by category
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Find what you need
            </h2>

          </div>


          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

            {[
              {
                name: "Clothing",
                image:
                  "https://api.example.com/images/category-clothing.jpg",
              },
              {
                name: "Shoes",
                image:
                  "https://api.example.com/images/category-shoes.jpg",
              },
              {
                name: "Accessories",
                image:
                  "https://api.example.com/images/category-accessories.jpg",
              },
              {
                name: "Bags",
                image:
                  "https://api.example.com/images/category-bags.jpg",
              },
            ].map((category) => (
              <Link
                key={category.name}
                to="/categories"
                className="group relative overflow-hidden rounded-xl"
              >

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/25" />

                <h3 className="absolute bottom-4 left-4 text-sm font-bold text-white">
                  {category.name}
                </h3>

              </Link>
            ))}

          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADER */}

          <div className="mb-7 flex items-end justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                Featured collection
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Popular products
              </h2>

            </div>

            <Link
              to="/products"
              className="text-xs font-bold text-green-600 hover:text-green-700"
            >
              View all →
            </Link>

          </div>


          {/* SMALL PRODUCT GRID */}

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {products.map((product) => (

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


                {/* DETAILS */}

                <div className="pt-3">

                  <h3 className="truncate text-xs font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>

                  <p className="mt-1 text-[10px] text-gray-500">
                    ★ 4.8
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="px-4 pb-14 sm:px-6 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-2xl bg-green-600 px-8 py-10 text-center text-white md:flex-row md:text-left">

          <div>

            <h2 className="text-2xl font-black">
              Ready to start shopping?
            </h2>

            <p className="mt-2 text-sm text-green-700">
              Create your account and explore our collection.
            </p>

          </div>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-xs font-bold text-green-700 transition hover:bg-gray-700"
          >
            Get Started
            <ArrowRight size={15} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;