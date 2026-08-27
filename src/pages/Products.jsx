import { Search, SlidersHorizontal, X } from "lucide-react";

import { useMemo, useState } from "react";

import { Link, useSearchParams } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [mobileFilters, setMobileFilters] = useState(false);

  const selectedCategory = searchParams.get("category") || "All";

  const selectedSort = searchParams.get("sort") || "featured";

  const categories = ["All", "Sneakers", "T-Shirts", "Hoodies", "Accessories"];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    if (search.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (selectedSort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (selectedSort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (selectedSort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedSort, search]);

  function changeCategory(category) {
    const params = new URLSearchParams(searchParams);

    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    setSearchParams(params);
  }

  function changeSort(sort) {
    const params = new URLSearchParams(searchParams);

    params.set("sort", sort);

    setSearchParams(params);
  }

  function handleSearch(value) {
    setSearch(value);

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  }

  return (
    <div className="page">
      <div className="container">
        {/* BREADCRUMB */}

        <div className="breadcrumb">
          <Link to="/">Home</Link>

          <span>/</span>

          <span>Products</span>
        </div>

        {/* HEADER */}

        <div className="products-header">
          <div>
            <p className="eyebrow">Shop our collection</p>

            <h1 className="page-title">All Products</h1>

            <p className="page-subtitle">
              Discover our collection of modern everyday essentials.
            </p>
          </div>

          <button
            className="mobile-filter-button"
            onClick={() => setMobileFilters(true)}
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        <div className="products-layout">
          {/* FILTER SIDEBAR */}

          <aside
            className={`products-sidebar ${
              mobileFilters ? "mobile-filter-open" : ""
            }`}
          >
            <div className="mobile-filter-header">
              <strong>Filters</strong>

              <button onClick={() => setMobileFilters(false)}>
                <X size={19} />
              </button>
            </div>

            <div className="filter-section">
              <h3>Categories</h3>

              <div className="filter-options">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      changeCategory(category);

                      setMobileFilters(false);
                    }}
                    className={
                      selectedCategory === category
                        ? "filter-option active"
                        : "filter-option"
                    }
                  >
                    <span>{category}</span>

                    <small>
                      {category === "All"
                        ? products.length
                        : products.filter((p) => p.category === category)
                            .length}
                    </small>
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Price</h3>

              <div className="price-range">
                <span>$0</span>
                <span>$100+</span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                defaultValue="100"
                className="range-input"
              />
            </div>
          </aside>

          {/* PRODUCTS */}

          <section className="products-content">
            <div className="products-toolbar">
              <div className="search-box">
                <Search size={17} />

                <input
                  value={search}
                  onChange={(event) => handleSearch(event.target.value)}
                  placeholder="Search products..."
                />
              </div>

              <div className="sort-control">
                <label>Sort by</label>

                <select
                  value={selectedSort}
                  onChange={(event) => changeSort(event.target.value)}
                >
                  <option value="featured">Featured</option>

                  <option value="rating">Top Rated</option>

                  <option value="price-low">Price: Low to High</option>

                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="products-result-count">
              {filteredProducts.length} products
            </div>

            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-products">
                <Search size={35} />

                <h2>No products found</h2>

                <p>Try changing your search or category filter.</p>

                <button
                  className="btn btn-green"
                  onClick={() => {
                    setSearch("");
                    setSearchParams({});
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Products;
