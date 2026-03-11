import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Fish, Waves, ShieldCheck, Zap } from "lucide-react";

const categories = [
  {
    title: "Pesci Tropicali",
    image:
      "https://images.unsplash.com/photo-1744366071536-7c0c536962a0?w=600&q=80",
    path: "/shop?category=fish&sub=tropical",
    icon: <Fish className="w-6 h-6" />,
  },
  {
    title: "Pesci d'Acqua Dolce",
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&q=80",
    path: "/shop?category=fish&sub=freshwater",
    icon: <Waves className="w-6 h-6" />,
  },
  {
    title: "Pesci Marini",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    path: "/shop?category=fish&sub=marine",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Acquari Completi",
    image:
      "https://images.unsplash.com/photo-1542345647781-7c1c1350f7fb?w=600&q=80",
    path: "/shop?category=aquarium",
    icon: <Zap className="w-6 h-6" />,
  },
];

export const CategorySection = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Esplora le Categorie
          </h2>
          <p className="text-cyan-100/70 max-w-2xl mx-auto text-lg">
            Tutto il necessario per il tuo hobby preferito, selezionato dai
            nostri esperti per garantire la massima qualità e salute dei tuoi
            pesci.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={cat.path}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <div className="bg-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:-translate-y-2 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{cat.title}</h3>
                  <span className="text-sm text-cyan-300 font-medium group-hover:underline flex items-center gap-1">
                    Scopri di più →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
