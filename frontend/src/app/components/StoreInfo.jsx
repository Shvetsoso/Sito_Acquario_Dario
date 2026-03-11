import { motion } from 'motion/react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Truck,
  CreditCard,
  Shield,
  RefreshCw,
  Award,
  Package,
} from 'lucide-react';

export function StoreInfo() {
  return (
    <div className="min-h-screen pt-20 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Informazioni Negozio
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Tutto quello che devi sapere per acquistare con noi
          </p>
        </motion.div>

        {/* Store Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Dove Trovarci</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Indirizzo</h3>
                <p className="text-white/80 text-lg">
                  Via Marina 42
                  <br />
                  20100 Milano (MI)
                  <br />
                  Italia
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Come Raggiungerci
                </h3>
                <ul className="space-y-2 text-white/70">
                  <li>🚇 Metro: Fermata Duomo (Linea Rossa)</li>
                  <li>🚌 Autobus: Linee 54, 61, 94</li>
                  <li>🚗 Parcheggio gratuito disponibile</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 bg-white/10 rounded-xl p-4">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-white/70 text-sm mb-1">Telefono</p>
                  <p className="text-white font-semibold">+39 02 1234 5678</p>
                </div>
                <div className="flex-1 bg-white/10 rounded-xl p-4">
                  <Mail className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-white/70 text-sm mb-1">Email</p>
                  <p className="text-white font-semibold text-sm">
                    info@acquariashop.it
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <p className="text-white text-lg">Mappa Interattiva</p>
                <p className="text-white/60 text-sm mt-2">
                  Via Marina 42, Milano
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Orari di Apertura</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { day: 'Lunedì', hours: '9:00 - 19:00' },
              { day: 'Martedì', hours: '9:00 - 19:00' },
              { day: 'Mercoledì', hours: '9:00 - 19:00' },
              { day: 'Giovedì', hours: '9:00 - 19:00' },
              { day: 'Venerdì', hours: '9:00 - 19:00' },
              { day: 'Sabato', hours: '9:00 - 19:00' },
              { day: 'Domenica', hours: '10:00 - 13:00', special: true },
              { day: 'Festivi', hours: 'Chiuso', closed: true },
            ].map((schedule, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-4 rounded-xl ${
                  schedule.closed
                    ? 'bg-red-500/10 border border-red-500/20'
                    : schedule.special
                    ? 'bg-yellow-500/10 border border-yellow-500/20'
                    : 'bg-white/10 border border-white/10'
                }`}
              >
                <span className="text-white font-semibold">{schedule.day}</span>
                <span
                  className={`${
                    schedule.closed
                      ? 'text-red-400'
                      : schedule.special
                      ? 'text-yellow-400'
                      : 'text-cyan-400'
                  } font-semibold`}
                >
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
            <p className="text-cyan-300 text-sm">
              ℹ️ Gli orari potrebbero variare durante le festività. Contattaci per
              confermare.
            </p>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            I Nostri Servizi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Truck,
                title: 'Spedizione Veloce',
                description:
                  'Spedizione gratuita per ordini superiori a €50. Consegna in 24-48 ore.',
              },
              {
                icon: CreditCard,
                title: 'Pagamenti Sicuri',
                description:
                  'Accettiamo carte di credito, PayPal, bonifico e contanti in negozio.',
              },
              {
                icon: Shield,
                title: 'Garanzia Qualità',
                description:
                  'Tutti i nostri prodotti sono coperti da garanzia del produttore.',
              },
              {
                icon: RefreshCw,
                title: 'Reso Facile',
                description:
                  'Reso gratuito entro 30 giorni dall\'acquisto, senza domande.',
              },
              {
                icon: Award,
                title: 'Consulenza Gratuita',
                description:
                  'I nostri esperti sono a tua disposizione per consigli personalizzati.',
              },
              {
                icon: Package,
                title: 'Ritiro in Negozio',
                description:
                  'Ordina online e ritira gratuitamente presso il nostro punto vendita.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Metodi di Pagamento Accettati
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Visa', icon: '💳' },
              { name: 'Mastercard', icon: '💳' },
              { name: 'PayPal', icon: '💰' },
              { name: 'Bonifico', icon: '🏦' },
            ].map((payment, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-4xl mb-2">{payment.icon}</div>
                <p className="text-white font-semibold">{payment.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/70 mt-6">
            Tutti i pagamenti sono protetti e crittografati con SSL
          </p>
        </motion.div>
      </div>
    </div>
  );
}
