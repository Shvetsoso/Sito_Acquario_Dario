import React, { useState } from "react";
import { ShoppingCart, User, Menu, X, ChevronDown, Fish } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";

export const Header = ({ cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Negozio", path: "/shop" },
    { name: "Chi Siamo", path: "/info" },
    { name: "Contatti", path: "/contact" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolid = !isHomePage || isScrolled;

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: showSolid
          ? "rgba(8, 51, 68, 0.85)"
          : "rgba(255, 255, 255, 0)",
        paddingTop: showSolid ? "12px" : "24px",
        paddingBottom: showSolid ? "12px" : "24px",
        backdropFilter: showSolid ? "blur(20px)" : "blur(0px)",
        borderBottom: showSolid
          ? "1px solid rgba(165, 243, 252, 0.1)"
          : "1px solid rgba(0,0,0,0)",
        boxShadow: showSolid
          ? "0 10px 40px -10px rgba(0, 0, 0, 0.3)"
          : "0 0px 0px rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-700 ${!showSolid ? "bg-black/10 backdrop-blur-sm" : "bg-transparent"}`}
        >
          <Fish
            className={`w-8 h-8 transition-colors duration-700 ${showSolid ? "text-cyan-400" : "text-cyan-300"}`}
          />
          <span
            className={`text-2xl font-bold tracking-tight transition-colors duration-700 ${showSolid ? "text-white" : "text-white"}`}
          >
            Acquaria
            <span className={showSolid ? "text-cyan-400" : "text-cyan-400"}>
              Shop
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`hidden lg:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-700 ${!showSolid ? "bg-black/10 backdrop-blur-sm" : "bg-transparent"}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                showSolid
                  ? "text-cyan-50/80 hover:text-white hover:bg-white/10"
                  : "text-white hover:text-cyan-300 hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div
          className={`flex items-center gap-2 p-1 rounded-full transition-all duration-500 ${!showSolid ? "bg-black/10 backdrop-blur-sm" : "bg-transparent"}`}
        >
          <Link
            to="/account"
            className={`p-2.5 rounded-full transition-all duration-300 ${showSolid ? "text-cyan-50 hover:bg-white/10" : "text-white hover:bg-white/10"}`}
          >
            <User className="w-5 h-5" />
          </Link>
          <button
            onClick={onCartClick}
            className={`p-2.5 rounded-full transition-all duration-300 relative ${showSolid ? "text-cyan-50 hover:bg-white/10" : "text-white hover:bg-white/10"}`}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-cyan-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-slate-900"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${showSolid ? "text-white" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-cyan-50 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
