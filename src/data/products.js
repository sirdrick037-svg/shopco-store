const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    category: "Sneakers",
    price: 59.99,
    rating: 4.5,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    description:
      "Clean, comfortable and timeless sneakers designed for everyday wear.",
    sizes: ["7", "8", "9", "10", "11"],
    featured: true,
  },

  {
    id: 2,
    name: "Essential Hoodie",
    category: "Hoodies",
    price: 39.99,
    rating: 4.7,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1556821552-5ff63b1b0e7d?auto=format&fit=crop&w=600&q=80",
    description:
      "A soft everyday hoodie with a relaxed fit and premium feel.",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    newProduct: true,
  },

  {
    id: 3,
    name: "Urban Cap",
    category: "Caps",
    price: 19.99,
    rating: 4.6,
    reviews: 61,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
    description:
      "A clean six-panel cap with an adjustable back strap.",
    featured: true,
  },

  {
    id: 4,
    name: "Minimal T-Shirt",
    category: "Shirts",
    price: 24.99,
    rating: 4.4,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    description:
      "Premium cotton T-shirt with a minimal everyday silhouette.",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
  },

  {
    id: 5,
    name: "Canvas Backpack",
    category: "Backpacks",
    price: 49.99,
    rating: 4.8,
    reviews: 52,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    description:
      "A durable everyday backpack with room for all your essentials.",
  },

  {
    id: 6,
    name: "Oversized Hoodie",
    category: "Hoodies",
    price: 44.99,
    rating: 4.6,
    reviews: 71,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    description:
      "Relaxed oversized hoodie made for comfort and effortless style.",
    sizes: ["S", "M", "L", "XL"],
  },

  {
    id: 7,
    name: "Striped T-Shirt",
    category: "Shirts",
    price: 28.99,
    rating: 4.3,
    reviews: 43,
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?auto=format&fit=crop&w=600&q=80",
    description:
      "Classic striped T-shirt with a relaxed fit.",
    sizes: ["S", "M", "L", "XL"],
  },

  {
    id: 8,
    name: "High Top Sneakers",
    category: "Sneakers",
    price: 69.99,
    rating: 4.4,
    reviews: 39,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
    description:
      "Retro-inspired high tops with a comfortable cushioned sole.",
    sizes: ["7", "8", "9", "10", "11"],
  },

  {
    id: 9,
    name: "Leather Crossbody Bag",
    category: "Crossbody Bags",
    price: 79.99,
    rating: 4.7,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    description:
      "Stylish leather crossbody bag perfect for everyday use.",
    featured: true,
  },

  {
    id: 10,
    name: "Classic Gold Watch",
    category: "Analog Watches",
    price: 129.99,
    rating: 4.8,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",
    description:
      "Elegant gold watch with minimalist design.",
    featured: true,
  },

  {
    id: 11,
    name: "Polarized Sunglasses",
    category: "Aviators",
    price: 89.99,
    rating: 4.6,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
    description:
      "UV protected polarized sunglasses with comfortable fit.",
  },

  {
    id: 12,
    name: "Leather Messenger Bag",
    category: "Messenger Bags",
    price: 95.99,
    rating: 4.7,
    reviews: 38,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    description:
      "Premium leather messenger bag with multiple compartments.",
  },

  {
    id: 13,
    name: "Black Leather Watch",
    category: "Analog Watches",
    price: 149.99,
    rating: 4.9,
    reviews: 72,
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80",
    description:
      "Premium black leather watch with date display.",
  },

  {
    id: 14,
    name: "Sports Sunglasses",
    category: "Oversized",
    price: 99.99,
    rating: 4.5,
    reviews: 41,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988c2477d?auto=format&fit=crop&w=600&q=80",
    description:
      "High-performance sports sunglasses with wraparound design.",
  },

  {
    id: 15,
    name: "Canvas Shoes",
    category: "Casual Shoes",
    price: 45.99,
    rating: 4.4,
    reviews: 52,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",
    description:
      "Comfortable canvas shoes perfect for casual everyday wear.",
  },

  {
    id: 16,
    name: "Vintage Round Sunglasses",
    category: "Wayfarer",
    price: 85.99,
    rating: 4.7,
    reviews: 59,
    image:
      "https://images.unsplash.com/photo-1577803947579-9f7a5b53e48a?auto=format&fit=crop&w=600&q=80",
    description:
      "Trendy vintage round sunglasses with premium lenses.",
  },

  {
    id: 17,
    name: "Casual Blazer",
    category: "Jackets",
    price: 119.99,
    rating: 4.6,
    reviews: 48,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80",
    description:
      "Stylish casual blazer that works for any occasion.",
  },

  {
    id: 18,
    name: "Tote Bag",
    category: "Tote Bags",
    price: 65.99,
    rating: 4.5,
    reviews: 43,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
    description:
      "Spacious tote bag ideal for work or shopping.",
  },
];

export default products;