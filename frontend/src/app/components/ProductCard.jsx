import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { useState } from 'react';

export function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
      {/* Image */}
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Esaurito</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium">
            {product.category}
          </span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
            {product.waterType === 'dolce'
              ? 'Acqua Dolce'
              : product.waterType === 'salata'
              ? 'Acqua Salata'
              : 'Entrambi'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-white/20'
                }`}
              />
            ))}
          </div>
          <span className="text-white/70 text-sm">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-cyan-400">
            €{product.price.toFixed(2)}
          </span>
          <motion.button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              product.inStock
                ? isAdding
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                : 'bg-white/10 text-white/50 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">
              {isAdding ? 'Aggiunto!' : product.inStock ? 'Aggiungi' : 'Esaurito'}
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
