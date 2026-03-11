import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Fish, ShoppingBag, Droplets, Sparkles, Star, Award } from 'lucide-react';
import { products } from '../data/products';

export function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Immergiti
              </span>
              <br />
              <span className="text-white">nel Mondo Marino</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              Scopri la nostra collezione di pesci tropicali, acquari professionali
              e attrezzature di alta qualità per il tuo angolo di paradiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/shop"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Esplora il Negozio
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 border border-white/20"
              >
                Chi Siamo
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 text-cyan-400/30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Fish className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 text-blue-400/30"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Droplets className="w-20 h-20" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Perché Scegliere AcquariaShop
            </h2>
            <p className="text-xl text-white/70">
              Qualità, esperienza e passione per il mondo acquatico
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Prodotti Premium',
                description:
                  'Solo i migliori prodotti selezionati per la salute dei tuoi pesci',
              },
              {
                icon: Award,
                title: 'Esperienza Ventennale',
                description:
                  'Oltre 20 anni di passione e competenza nel settore acquariofilia',
              },
              {
                icon: Sparkles,
                title: 'Assistenza Dedicata',
                description:
                  'Supporto personalizzato per ogni esigenza del tuo acquario',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Prodotti in Evidenza
            </h2>
            <p className="text-xl text-white/70">
              Scopri i nostri articoli più richiesti
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">
                      €{product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white/90 text-sm font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <ShoppingBag className="w-5 h-5" />
              Vedi Tutti i Prodotti
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Inizia la Tua Avventura Acquatica
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Ricevi il 15% di sconto sul tuo primo ordine! Iscriviti alla nostra
              newsletter per offerte esclusive e consigli di esperti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
                Iscriviti
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
