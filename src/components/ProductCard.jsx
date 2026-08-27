import {
  Heart,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="group min-w-0">

      <div className="relative overflow-hidden rounded-xl bg-gray-100">

        <Link to={`/products/${product.id}`}>

          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
          />

        </Link>

        {product.newProduct && (
          <span className="absolute left-2.5 top-2.5 rounded-md bg-green-600 px-2 py-1 text-[9px] font-bold uppercase text-white">
            New
          </span>
        )}

        <button
          className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition hover:text-green-600"
          aria-label="Add to wishlist"
        >
          <Heart size={16} />
        </button>

      </div>

      <div className="pt-3">

        <p className="text-[9px] uppercase tracking-wide text-gray-400">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="mt-1 block text-xs font-bold transition hover:text-green-700 sm:text-sm"
        >
          {product.name}
        </Link>

        <div className="mt-2 flex items-center justify-between">

          <span className="text-xs font-extrabold sm:text-sm">
            ${product.price.toFixed(2)}
          </span>

          <span className="flex items-center gap-1 text-[10px] font-bold text-green-700">
            <Star
              size={12}
              fill="currentColor"
            />
            {product.rating}
          </span>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;