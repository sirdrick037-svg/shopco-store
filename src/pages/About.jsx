import { ArrowRight, Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";

import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      {/* HERO */}

      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-text">
            <p className="eyebrow">About ShopCo.</p>

            <h1>We believe everyday style should be simple.</h1>

            <p>
              ShopCo. was created with one simple idea: shopping for quality
              everyday essentials shouldn't be complicated.
            </p>

            <p>
              We carefully select modern clothing and accessories that are easy
              to wear, easy to combine and made to fit into real everyday life.
            </p>

            <Link to="/products" className="btn btn-dark">
              Explore Our Products
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
              alt="ShopCo store"
            />
          </div>
        </div>
      </section>

      {/* MISSION */}

      <section className="about-mission">
        <div className="container mission-content">
          <div>
            <p className="eyebrow">Our mission</p>

            <h2>Make great style accessible to everyone.</h2>
          </div>

          <div>
            <p>
              Fashion doesn't have to be complicated. We believe the best
              wardrobe is built around versatile pieces that you can wear again
              and again.
            </p>

            <p>
              That's why ShopCo. focuses on clean designs, practical products
              and a shopping experience that puts you first.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <div>
              <p className="eyebrow">What we stand for</p>

              <h2>Our Values</h2>
            </div>
          </div>

          <div className="values-grid">
            <ValueCard
              icon={<Sparkles />}
              title="Simple Design"
              text="We love clean silhouettes, timeless colors and products that work effortlessly together."
            />

            <ValueCard
              icon={<ShieldCheck />}
              title="Quality First"
              text="We look for dependable materials and thoughtful details that make products worth keeping."
            />

            <ValueCard
              icon={<Heart />}
              title="Customer First"
              text="Everything we do starts with creating a better, easier and more enjoyable shopping experience."
            />

            <ValueCard
              icon={<Leaf />}
              title="Mindful Choices"
              text="We believe in buying better, choosing versatile pieces and building a wardrobe with intention."
            />
          </div>
        </div>
      </section>

      {/* IMAGE / STORY */}

      <section className="about-story">
        <div className="container about-story-grid">
          <div className="about-story-image">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
              alt="Shopping experience"
            />
          </div>

          <div className="about-story-text">
            <p className="eyebrow">The ShopCo. experience</p>

            <h2>Less searching. More finding.</h2>

            <p>
              We designed ShopCo. around the way people actually shop. Clear
              categories, straightforward product information and a checkout
              experience without unnecessary distractions.
            </p>

            <ul>
              <li>
                <Check />
                Carefully selected products
              </li>

              <li>
                <Check />
                Simple and transparent pricing
              </li>

              <li>
                <Check />
                Fast, reliable delivery
              </li>

              <li>
                <Check />
                Easy returns
              </li>
            </ul>

            <Link to="/products" className="btn btn-green">
              Start Shopping
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="container about-cta">
        <div>
          <p className="eyebrow">Ready to explore?</p>

          <h2>Find something you'll love.</h2>

          <Link to="/products" className="btn btn-dark">
            Shop Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, text }) {
  return (
    <div className="value-card">
      <div className="value-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function Check() {
  return <span className="check-icon">✓</span>;
}

export default About;
