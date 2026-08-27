import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand */}

        <div className="footer-brand">
          <h2>ShopCo.</h2>

          <p>
            Modern style made for everyday life. Discover quality pieces
            designed to look good and feel even better.
          </p>
        </div>

        {/* Shop */}

        <div className="footer-column">
          <h3>Shop</h3>

          <Link to="/products">All Products</Link>

          <Link to="/products">New Arrivals</Link>

          <Link to="/products">Best Sellers</Link>

          <Link to="/categories">Categories</Link>
        </div>

        {/* Company */}

        <div className="footer-column">
          <h3>Company</h3>

          <Link to="/about">About Us</Link>

          <Link to="/contact">Contact Us</Link>

          <Link to="/about">FAQs</Link>
        </div>

        {/* Customer Service */}

        <div className="footer-column">
          <h3>Customer Service</h3>

          <Link to="/contact">Shipping & Returns</Link>

          <Link to="/account">Track Order</Link>

          <Link to="/contact">Help Center</Link>
        </div>
      </div>

      {/* Bottom */}

      <div className="container footer-bottom">
        <p>© 2026 ShopCo. All rights reserved.</p>

<div className="social-links">
  <a href="#" aria-label="Instagram">
    <FaInstagram size={17} />
  </a>
  <a href="#" aria-label="Twitter">
    <FaTwitter size={17} />
  </a>
  <a href="#" aria-label="Facebook">
    <FaFacebook size={17} />
  </a>
</div>
      </div>
    </footer>
  );
}

export default Footer;
