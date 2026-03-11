import { Outlet } from 'react-router';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import { Navbar } from './Navbar';
import { OceanBackground } from './OceanBackground';
import { Footer } from './Footer';

export function Root() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="relative min-h-screen">
          <OceanBackground />
          <Navbar />
          <main className="relative z-10">
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
