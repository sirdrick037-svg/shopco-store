const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    category: "Shoes",
    price: 59.99,
    rating: 4.5,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description:
      "Clean, comfortable and timeless sneakers designed for everyday wear.",
    sizes: ["7", "8", "9", "10", "11"],
    featured: true,
  },

  {
    id: 2,
    name: "Essential Hoodie",
    category: "Clothing",
    price: 39.99,
    rating: 4.7,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    description:
      "A soft everyday hoodie with a relaxed fit and premium feel.",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    newProduct: true,
  },

  {
    id: 3,
    name: "Urban Cap",
    category: "Accessories",
    price: 19.99,
    rating: 4.6,
    reviews: 61,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85",
    description:
      "A clean six-panel cap with an adjustable back strap.",
    featured: true,
  },

  {
    id: 4,
    name: "Minimal T-Shirt",
    category: "Clothing",
    price: 24.99,
    rating: 4.4,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description:
      "Premium cotton T-shirt with a minimal everyday silhouette.",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
  },

  {
    id: 5,
    name: "Canvas Backpack",
    category: "Bags",
    price: 49.99,
    rating: 4.8,
    reviews: 52,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description:
      "A durable everyday backpack with room for all your essentials.",
  },

  {
    id: 6,
    name: "Oversized Hoodie",
    category: "Clothing",
    price: 44.99,
    rating: 4.6,
    reviews: 71,
    image:
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=900&q=85",
    description:
      "Relaxed oversized hoodie made for comfort and effortless style.",
    sizes: ["S", "M", "L", "XL"],
  },

  {
    id: 7,
    name: "Striped T-Shirt",
    category: "Clothing",
    price: 28.99,
    rating: 4.3,
    reviews: 43,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
    description:
      "Classic striped T-shirt with a relaxed fit.",
    sizes: ["S", "M", "L", "XL"],
  },

  {
    id: 8,
    name: "High Top Sneakers",
    category: "Shoes",
    price: 69.99,
    rating: 4.4,
    reviews: 39,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
    description:
      "Retro-inspired high tops with a comfortable cushioned sole.",
    sizes: ["7", "8", "9", "10", "11"],
  },

  {
    id: 9,
    name: "Leather Crossbody Bag",
    category: "Bags",
    price: 79.99,
    rating: 4.7,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    description:
      "Stylish leather crossbody bag perfect for everyday use.",
    featured: true,
  },

  {
    id: 10,
    name: "Classic Gold Watch",
    category: "Watches",
    price: 129.99,
    rating: 4.8,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85",
    description:
      "Elegant gold watch with minimalist design.",
    featured: true,
  },

  {
    id: 11,
    name: "Polarized Sunglasses",
    category: "Sunglasses",
    price: 89.99,
    rating: 4.6,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=85",
    description:
      "UV protected polarized sunglasses with comfortable fit.",
  },

  {
    id: 12,
    name: "Leather Messenger Bag",
    category: "Bags",
    price: 95.99,
    rating: 4.7,
    reviews: 38,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description:
      "Premium leather messenger bag with multiple compartments.",
  },

  {
    id: 13,
    name: "Black Leather Watch",
    category: "Watches",
    price: 149.99,
    rating: 4.9,
    reviews: 72,
    image:
      "https://images.unsplash.com/photo-1495561050849-3681ea2dc9b4?auto=format&fit=crop&w=900&q=85",
    description:
      "Premium black leather watch with date display.",
  },

  {
    id: 14,
    name: "Sports Sunglasses",
    category: "Sunglasses",
    price: 99.99,
    rating: 4.5,
    reviews: 41,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=85",
    description:
      "High-performance sports sunglasses with wraparound design.",
  },

  {
    id: 15,
    name: "Canvas Shoes",
    category: "Shoes",
    price: 45.99,
    rating: 4.4,
    reviews: 52,
    image:
      "https://images.unsplash.com/photo-1540361567153-c3bccdc11d7e?auto=format&fit=crop&w=900&q=85",
    description:
      "Comfortable canvas shoes perfect for casual everyday wear.",
  },

  {
    id: 16,
    name: "Vintage Round Sunglasses",
    category: "Sunglasses",
    price: 85.99,
    rating: 4.7,
    reviews: 59,
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=85",
    description:
      "Trendy vintage round sunglasses with premium lenses.",
  },

  {
    id: 17,
    name: "Casual Blazer",
    category: "Clothing",
    price: 119.99,
    rating: 4.6,
    reviews: 48,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=900&q=85",
    description:
      "Stylish casual blazer that works for any occasion.",
  },

  {
    id: 18,
    name: "Tote Bag",
    category: "Bags",
    price: 65.99,
    rating: 4.5,
    reviews: 43,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    description:
      "Spacious tote bag ideal for work or shopping.",
  },
];

export default products;