import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const REVIEWS = [
  {
    id: 1,
    name: "Marco Rossi",
    role: "Appassionato di acquari marini",
    content: "Ho acquistato il mio primo acquario marino qui e sono rimasto colpito dalla competenza dello staff. I pesci sono arrivati in perfetta salute.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=marco"
  },
  {
    id: 2,
    name: "Giulia Bianchi",
    role: "Amante dei Betta",
    content: "Spedizione velocissima e imballaggio impeccabile. Il mio Betta splendens è bellissimo e molto vivace. Consigliatissimo!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=giulia"
  },
  {
    id: 3,
    name: "Luca Verdi",
    role: "Acquariofilo esperto",
    content: "Ottima selezione di attrezzatura tecnica. Ho trovato pezzi di ricambio per il mio filtro che non riuscivo a trovare altrove.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=luca"
  }
];

export const ReviewSection = () => {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">La Voce dei Clienti</h2>
          <div className="flex justify-center gap-1 text-cyan-400 mb-6">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 fill-current" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-4 right-6 w-12 h-12 text-white/5" />
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-cyan-400" />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-xs text-cyan-300">{review.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic mb-4 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
