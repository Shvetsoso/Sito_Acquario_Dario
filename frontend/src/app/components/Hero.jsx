import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold mb-4 border border-cyan-500/30">
            Professional Aquarium Shop
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Immergiti nel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Puro Design
            </span>
          </h1>
          <p className="text-lg md:text-xl text-cyan-50/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            AcquariaShop trasforma il tuo spazio in un ecosistema vivente.
            Scopri l'eccellenza dell'acquariologia professionale con un tocco di
            eleganza moderna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/shop"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-cyan-500/30"
            >
              Vai al Negozio
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Contattaci
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542345647781-7c1c1350f7fb?q=80&w=800"
              alt="Aquarium Detail"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};
