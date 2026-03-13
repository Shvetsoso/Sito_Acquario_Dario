import { motion } from 'motion/react';
import { Heart, Award, Users, Globe, Target, Sparkles } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-20 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Chi Siamo
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            La tua passione per l'acquariofilia è la nostra missione
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">La Nostra Storia</h2>
          </div>
          <div className="space-y-4 text-white/80 text-lg">
            <p>
              AcquariaShop nasce nel 2004 dalla passione di un gruppo di appassionati
              acquariofili che sognavano di creare un punto di riferimento per tutti
              gli amanti del mondo sottomarino.
            </p>
            <p>
              Da oltre 20 anni, serviamo con dedizione migliaia di clienti, offrendo
              non solo prodotti di altissima qualità, ma anche consulenza
              specializzata e supporto continuo per creare e mantenere acquari
              meravigliosi.
            </p>
            <p>
              La nostra esperienza ci ha permesso di selezionare i migliori fornitori
              a livello mondiale, garantendo sempre pesci sani, attrezzature
              all'avanguardia e prodotti sicuri per l'ambiente acquatico.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            I Nostri Valori
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Award,
                title: 'Qualità Premium',
                description:
                  'Selezioniamo solo i migliori prodotti per garantire la salute e il benessere dei tuoi pesci.',
              },
              {
                icon: Users,
                title: 'Supporto Dedicato',
                description:
                  'Il nostro team di esperti è sempre disponibile per consigli personalizzati e assistenza tecnica.',
              },
              {
                icon: Globe,
                title: 'Sostenibilità',
                description:
                  'Promuoviamo pratiche sostenibili e rispettose dell\'ambiente marino e degli ecosistemi.',
              },
              {
                icon: Target,
                title: 'Innovazione',
                description:
                  'Cerchiamo costantemente le ultime tecnologie e soluzioni innovative per l\'acquariofilia.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Il Nostro Team</h2>
          </div>
          <p className="text-white/80 text-lg mb-8">
            Il nostro staff è composto da biologi marini, acquariofili professionisti
            e appassionati con anni di esperienza nel settore. Siamo qui per aiutarti
            a realizzare l'acquario dei tuoi sogni, che tu sia un principiante o un
            esperto.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '20+', label: 'Anni di Esperienza' },
              { number: '10K+', label: 'Clienti Soddisfatti' },
              { number: '500+', label: 'Prodotti Disponibili' },
              { number: '24/7', label: 'Supporto Clienti' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-4xl font-bold text-cyan-400">{stat.number}</p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            La Nostra Missione
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            "Rendere accessibile a tutti la bellezza e la serenità di un acquario
            perfetto, fornendo prodotti di qualità superiore, conoscenza esperta e
            servizio eccezionale. Vogliamo ispirare e supportare ogni acquariofilo nel
            suo viaggio acquatico."
          </p>
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
            <p className="text-white font-semibold">
              🐠 Passione • Qualità • Sostenibilità 🌊
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
