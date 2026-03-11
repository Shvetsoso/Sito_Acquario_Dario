import React from "react";
import { motion } from "motion/react";
import { PRODUCTS } from "./data";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { toast } from "sonner";

export const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden group hover:border-white/40 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white/70 hover:text-red-400 border border-white/10 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        {product.isOnSale && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-cyan-500 text-white text-[10px] font-black rounded shadow-lg uppercase tracking-wider">
            OFFERTA
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 text-cyan-400 mb-2">
          <Star className="w-3 h-3 fill-current" />
          <span className="text-xs font-bold text-cyan-200/60">
            {product.rating}
          </span>
        </div>
        <h3 className="font-bold text-white mb-1 line-clamp-1 group-hover:text-cyan-300 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-blue-100/50 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            {product.isOnSale && (
              <span className="text-[10px] text-white/30 line-through">
                €{product.originalPrice?.toFixed(2)}
              </span>
            )}
            <span className="text-xl font-black text-cyan-300">
              €{product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="p-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-90"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const FeaturedProducts = ({ onAddToCart }) => {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black text-white mb-2">
              Prodotti in Evidenza
            </h2>
            <p className="text-blue-100/60 font-medium">
              Le nostre migliori scelte per il tuo acquario.
            </p>
          </div>
          <button className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center gap-1 group">
            Vedi Tutti{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
