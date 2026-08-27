import {
  ArrowRight,
  Headphones,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

import { Link } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <div className="bg-white">

      <section className="px-4 pt-4 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-[#edf4ee] lg:grid-cols-2">

          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              Modern essentials
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Fresh Style.
              <br />
              Everyday.
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-600">
              Discover modern pieces that make you
              look good and feel great. Carefully
              selected essentials for your everyday
              lifestyle.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">

              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-[#111318] px-6 py-3 text-xs font-bold text-white transition hover:bg-green-700"
              >
                Shop Now
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/categories"
                className="border-b border-gray-800 pb-1 text-xs font-bold text-gray-800"
              >
                Explore Categories
              </Link>

            </div>

          </div>

          <div className="relative min-h-[400px] lg:min-h-[540px]">

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
              alt="Modern fashion collection"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white/95 p-3 shadow-xl">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-700">
                <ShoppingBag size={18} />
              </div>

              <div className="flex flex-col">
                <strong className="text-xs">
                  New Collection
                </strong>

                <span className="mt-1 text-[10px] text-gray-500">
                  Explore the latest styles
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="px-4 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 border-b border-gray-100 py-8 lg:grid-cols-4">

          <Service
            icon={<Truck size={21} />}
            title="Free Shipping"
            text="On orders over $50"
          />

          <Service
            icon={<RotateCcw size={21} />}
            title="Easy Returns"
            text="30-day return policy"
          />

          <Service
            icon={<ShieldCheck size={21} />}
            title="Secure Payment"
            text="100% secure checkout"
          />

          <Service
            icon={<Headphones size={21} />}
            title="24/7 Support"
            text="We're here to help"
          />

        </div>

      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Our selection"
            title="Featured Products"
            link="/products"
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>


      <section className="px-4 pb-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Find your style"
            title="Shop by Category"
            link="/categories"
          />

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

            <CategoryCard
              name="Sneakers"
              image={products[0].image}
              count="24 items"
            />

            <CategoryCard
              name="T-Shirts"
              image={products[3].image}
              count="18 items"
            />

            <CategoryCard
              name="Hoodies"
              image={products[1].image}
              count="16 items"
            />

            <CategoryCard
              name="Accessories"
              image={products[4].image}
              count="20 items"
            />

          </div>

        </div>

      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 rounded-2xl bg-[#111318] px-6 py-12 text-white sm:px-10 lg:flex-row lg:items-center lg:px-14">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-500">
              ShopCo. essentials
            </p>

            <h2 className="mt-3 text-4xl font-black leading-none tracking-tight sm:text-5xl">
              Style that fits
              <br />
              your everyday.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
              Simple pieces. Quality materials.
              Designed to work together.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-green-500"
            >
              Start Shopping
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="flex h-36 w-36 shrink-0 flex-col items-center justify-center rounded-full border border-gray-700">

            <strong className="text-4xl font-black">
              100%
            </strong>

            <span className="mt-1 text-center text-[10px] text-gray-400">
              Everyday
              <br />
              essentials
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}

function Service({ icon, title, text }) {
  return (
    <div className="flex items-start gap-3">

      <div className="text-green-700">
        {icon}
      </div>

      <div>
        <strong className="block text-xs">
          {title}
        </strong>

        <p className="mt-1 text-[10px] text-gray-500">
          {text}
        </p>
      </div>

    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  link,
}) {
  return (
    <div className="mb-7 flex items-end justify-between">

      <div>

        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-green-700">
          {eyebrow}
        </p>

        <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
          {title}
        </h2>

      </div>

      <Link
        to={link}
        className="hidden items-center gap-1 text-xs font-bold sm:flex"
      >
        View all
        <ArrowRight size={14} />
      </Link>

    </div>
  );
}

function CategoryCard({
  name,
  image,
  count,
}) {
  return (
    <Link
      to={`/products?category=${name}`}
      className="group overflow-hidden rounded-xl border border-gray-100"
    >

      <div className="overflow-hidden bg-gray-100">

        <img
          src={image}
          alt={name}
          className="aspect-[1/0.8] w-full object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      <div className="flex items-center justify-between p-4">

        <strong className="text-xs">
          {name}
        </strong>

        <span className="text-[10px] text-gray-400">
          {count}
        </span>

      </div>

    </Link>
  );
}

export default Home;