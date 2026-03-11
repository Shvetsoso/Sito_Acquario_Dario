import { Link, useLocation } from 'react-router';
import { ShoppingCart, User, Fish, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Negozio' },
    { to: '/about', label: 'Chi Siamo' },
    { to: '/store-info', label: 'Info Negozio' },
    { to: '/contact', label: 'Contatti' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism navbar */}
      <div className="bg-[#001f3f]/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Fish className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                AcquariaShop
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3 py-2 transition-all duration-300 ${
                    isActive(link.to)
                      ? 'text-cyan-400'
                      : 'text-white/90 hover:text-cyan-300'
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
              >
                <ShoppingCart className="w-5 h-5 text-white group-hover:text-cyan-300 transition-colors" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              {/* User */}
              {isAuthenticated ? (
                <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <User className="w-5 h-5 text-cyan-400" />
                  <span className="text-white/90 text-sm">{user?.name}</span>
                  <button
                    onClick={logout}
                    className="text-xs text-white/70 hover:text-white transition-colors ml-2"
                  >
                    Esci
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Accedi</span>
                </Link>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#001f3f]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActive(link.to)
                      ? 'bg-white/20 text-cyan-400'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <div className="px-4 py-3 rounded-lg bg-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-cyan-400" />
                    <span className="text-white/90">{user?.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Esci
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                >
                  <User className="w-4 h-4" />
                  <span>Accedi</span>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
