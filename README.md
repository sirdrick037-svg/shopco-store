# ShopCo. — Mini E-Commerce Store

A modern, responsive e-commerce frontend built with React, Vite, JSX, and Tailwind CSS.

ShopCo. provides a complete shopping experience with product browsing, categories, product details, cart management, wishlist functionality, authentication, checkout, and order confirmation.

---

##  Features

###  Landing Page
- Modern e-commerce hero section
- "Get Started" call-to-action
- Featured products
- Shop by category
- Responsive design
- Clean and minimal UI

###  Authentication
- User registration
- User login
- Logout functionality
- Forgot password page
- Account page
- Authentication state management
- Protected routes
- Login required for shopping features
- Local storage authentication for frontend demonstration

###  Products
- Product listing
- Product search
- Category filtering
- Price filtering
- Product sorting
- Product details
- Product ratings
- Product images
- Responsive product cards

###  Wishlist
- Add products to wishlist
- Remove products from wishlist
- Wishlist page
- Persistent wishlist experience

###  Shopping Cart
- Add products to cart
- Remove products
- Increase/decrease quantity
- Cart summary
- Subtotal calculation
- Shipping calculation
- Total price calculation

###  Checkout
- Customer information
- Shipping address
- Shipping method
- Payment information UI
- Order summary
- Order placement

###  Order Success
- Order confirmation
- Order number
- Order summary
- Continue shopping button

###  Responsive Design
The application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

---

##  Tech Stack

- **React**
- **Vite**
- **JavaScript / JSX**
- **Tailwind CSS**
- **React Router**
- **Lucide React**
- **LocalStorage**

---

##  Project Structure

```text
shopco/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Categories.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Checkout.jsx
│   │   ├── Account.jsx
│   │   ├── OrderSuccess.jsx
│   │   └── About.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md