import { motion } from 'motion/react';
import { Fish, Home, Search } from 'lucide-react';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        {/* Animated Fish */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mb-8"
        >
          <Fish className="w-32 h-32 text-cyan-400/50 mx-auto" />
        </motion.div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
            404
          </span>
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pagina Non Trovata
        </h2>
        <p className="text-xl text-white/70 mb-12">
          Ops! Sembra che questa pagina sia nuotata via. Il pesce che stavi cercando
          non è nell'acquario.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <Home className="w-5 h-5" />
            Torna alla Home
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-white/20"
          >
            <Search className="w-5 h-5" />
            Esplora il Negozio
          </Link>
        </div>

        {/* Bubbles */}
        <div className="mt-16 flex justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-cyan-400/30 rounded-full"
              animate={{
                y: [0, -100],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
