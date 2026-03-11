import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-24 h-24 text-white/30 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Il tuo carrello è vuoto
          </h2>
          <p className="text-white/70 mb-8">
            Inizia ad aggiungere prodotti per vedere il tuo carrello!
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <ShoppingBag className="w-5 h-5" />
            Vai al Negozio
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Il Tuo Carrello
          </h1>
          <p className="text-white/70 text-lg">
            {cart.length} articol{cart.length !== 1 ? 'i' : 'o'} nel carrello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {item.name}
                        </h3>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">
                            {item.category}
                          </span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                            {item.waterType === 'dolce'
                              ? 'Acqua Dolce'
                              : item.waterType === 'salata'
                              ? 'Acqua Salata'
                              : 'Entrambi'}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 bg-white/10 rounded-lg p-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 rounded-lg hover:bg-white/10 text-white transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 rounded-lg hover:bg-white/10 text-white transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-cyan-400">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-white/50">
                          €{item.price.toFixed(2)} cad.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="w-full px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Svuota Carrello
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 sticky top-28"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Riepilogo Ordine
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-white/70">
                  <span>Subtotale</span>
                  <span>€{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Spedizione</span>
                  <span className="text-green-400">Gratuita</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>IVA (22%)</span>
                  <span>€{(getTotalPrice() * 0.22).toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-white">Totale</span>
                    <span className="text-2xl font-bold text-cyan-400">
                      €{(getTotalPrice() * 1.22).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-2 mb-4">
                <CreditCard className="w-5 h-5" />
                Procedi al Pagamento
              </button>

              <Link
                to="/shop"
                className="block text-center text-white/70 hover:text-white transition-colors"
              >
                Continua lo Shopping
              </Link>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/70 mb-3">Hai un codice sconto?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Codice promozionale"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all">
                    Applica
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Spedizione gratuita per ordini sopra €50</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Garanzia soddisfatti o rimborsati</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Pagamento sicuro al 100%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
