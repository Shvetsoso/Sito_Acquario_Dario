import { Link } from 'react-router';
import { Fish, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#001f3f]/90 backdrop-blur-xl border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-2 rounded-xl group-hover:scale-110 transition-transform">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                AcquariaShop
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-4">
              La tua destinazione per pesci tropicali, acquari e attrezzature di
              qualità superiore dal 2004.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white/10 hover:bg-cyan-500 rounded-lg transition-all hover:scale-110"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/shop', label: 'Negozio' },
                { to: '/about', label: 'Chi Siamo' },
                { to: '/store-info', label: 'Info Negozio' },
                { to: '/contact', label: 'Contatti' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-4">Categorie</h3>
            <ul className="space-y-2">
              {[
                'Pesci Tropicali',
                'Acquari',
                'Filtri',
                'Illuminazione',
                'Mangimi',
                'Decorazioni',
              ].map((category) => (
                <li key={category}>
                  <Link
                    to="/shop"
                    className="text-white/70 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Via Marina 42, 20100 Milano (MI)</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>+39 02 1234 5678</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>info@acquariashop.it</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-bold mb-2">
              Iscriviti alla Newsletter
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Ricevi offerte esclusive e consigli per il tuo acquario
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all hover:scale-105 text-sm">
                Iscriviti
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © 2024 AcquariaShop. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="text-white/50 hover:text-cyan-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-white/50 hover:text-cyan-400 transition-colors text-sm"
            >
              Termini di Servizio
            </Link>
            <Link
              to="#"
              className="text-white/50 hover:text-cyan-400 transition-colors text-sm"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
