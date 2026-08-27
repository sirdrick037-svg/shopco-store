import {
  ArrowRight,
  Check,
  ShoppingBag,
} from "lucide-react";

import { Link } from "react-router-dom";

import products from "../data/products";

const categoryData = [
  {
    name: "Sneakers",
    description:
      "Everyday sneakers designed for comfort, movement and clean style.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
  },

  {
    name: "T-Shirts",
    description:
      "Simple, versatile T-shirts made for everyday outfits.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
  },

  {
    name: "Hoodies",
    description:
      "Soft layers that bring comfort and effortless street style.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85",
  },

  {
    name: "Accessories",
    description:
      "Finishing touches designed to complete your everyday look.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
  },
];

function Categories() {
  return (
    <div className="page">

      <div className="container">

        {/* HEADER */}

        <div className="category-page-header">

          <div>

            <p className="eyebrow">
              Explore ShopCo.
            </p>

            <h1 className="page-title">
              Shop by Category
            </h1>

            <p className="page-subtitle">
              Find exactly what you're looking
              for with our curated collections.
            </p>

          </div>

        </div>

        {/* CATEGORY GRID */}

        <div className="category-page-grid">

          {categoryData.map(
            (category, index) => {

              const count =
                products.filter(
                  (product) =>
                    product.category ===
                    category.name
                ).length;

              return (
                <Link
                  key={category.name}
                  to={`/products?category=${category.name}`}
                  className={`category-large-card ${
                    index === 0
                      ? "category-large-featured"
                      : ""
                  }`}
                >

                  <div className="category-large-image">

                    <img
                      src={category.image}
                      alt={category.name}
                    />

                    <div className="category-overlay" />

                  </div>

                  <div className="category-large-content">

                    <span>
                      {count} products
                    </span>

                    <h2>
                      {category.name}
                    </h2>

                    <p>
                      {category.description}
                    </p>

                    <div className="category-link">
                      Shop {category.name}
                      <ArrowRight size={15} />
                    </div>

                  </div>

                </Link>
              );
            }
          )}

        </div>

        {/* WHY SHOP */}

        <section className="why-shop-section">

          <div className="why-shop-heading">

            <p className="eyebrow">
              Why ShopCo.
            </p>

            <h2>
              Everything you need.
              <br />
              Nothing you don't.
            </h2>

          </div>

          <div className="why-shop-grid">

            <WhyItem
              icon={<Check size={20} />}
              title="Curated Products"
              text="We focus on timeless essentials instead of overwhelming you with endless options."
            />

            <WhyItem
              icon={<ShoppingBag size={20} />}
              title="Easy Shopping"
              text="A clean, simple shopping experience designed to help you find what you need quickly."
            />

            <WhyItem
              icon={<Check size={20} />}
              title="Quality First"
              text="Every product is selected with comfort, quality and everyday use in mind."
            />

          </div>

        </section>

      </div>

    </div>
  );
}

function WhyItem({
  icon,
  title,
  text,
}) {
  return (
    <div className="why-shop-item">

      <div className="why-shop-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}

export default Categories;