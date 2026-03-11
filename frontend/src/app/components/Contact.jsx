import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Contattaci
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Siamo qui per aiutarti! Scrivici per qualsiasi domanda o chiarimento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white">Invia un Messaggio</h2>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="bg-green-500/20 text-green-400 p-4 rounded-xl mb-4">
                  <p className="text-lg font-semibold">
                    ✓ Messaggio inviato con successo!
                  </p>
                  <p className="text-sm mt-2">Ti risponderemo al più presto.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/90 mb-2 text-sm font-medium">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Mario Rossi"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/90 mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="mario@esempio.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/90 mb-2 text-sm font-medium">
                    Oggetto
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  >
                    <option value="">Seleziona un argomento</option>
                    <option value="info">Informazioni Prodotto</option>
                    <option value="order">Stato Ordine</option>
                    <option value="support">Supporto Tecnico</option>
                    <option value="consultation">Consulenza Acquario</option>
                    <option value="other">Altro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/90 mb-2 text-sm font-medium">
                    Messaggio
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Scrivi qui il tuo messaggio..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Invia Messaggio
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {[
              {
                icon: Phone,
                title: 'Telefono',
                content: '+39 02 1234 5678',
                description: 'Lun-Ven: 9:00 - 18:00',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@acquariashop.it',
                description: 'Risposta entro 24 ore',
              },
              {
                icon: MapPin,
                title: 'Indirizzo',
                content: 'Via Marina 42, 20100 Milano',
                description: 'Vieni a trovarci in negozio!',
              },
              {
                icon: Clock,
                title: 'Orari di Apertura',
                content: 'Lun-Sab: 9:00 - 19:00',
                description: 'Domenica: 10:00 - 13:00',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-1">
                      {item.content}
                    </p>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 overflow-hidden h-64"
            >
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white/70">Mappa del Negozio</p>
                  <p className="text-white/50 text-sm">Via Marina 42, Milano</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">Seguici sui Social</h3>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
                  <button
                    key={social}
                    className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white text-sm font-medium transition-all hover:scale-105"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Domande Frequenti?</h2>
          <p className="text-white/70 mb-6">
            Prima di contattarci, dai un'occhiata alle nostre FAQ
          </p>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-semibold transition-all hover:scale-105">
            Vai alle FAQ
          </button>
        </motion.div>
      </div>
    </div>
  );
}
