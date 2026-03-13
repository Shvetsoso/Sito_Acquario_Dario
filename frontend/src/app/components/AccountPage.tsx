import React from 'react';
import { motion } from 'motion/react';
import { Package, Truck, Calendar, ShoppingBag, User, Settings, LogOut, ChevronRight } from 'lucide-react';

export const AccountPage = () => {
  const user = {
    name: "Mario Rossi",
    email: "mario.rossi@example.com",
    memberSince: "Gennaio 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
  };

  const orders = [
    {
      id: "ORD-9921",
      date: "12 Febbraio 2026",
      status: "In Transito",
      deliveryDate: "16 Febbraio 2026",
      total: "245.00€",
      items: [
        { name: "Acquario Orizzonte 100", qty: 1, img: "https://images.unsplash.com/photo-1542345647781-7c1c1350f7fb?q=80&w=200" },
        { name: "Filtro CrystalFlow Pro", qty: 1, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=200" }
      ]
    },
    {
      id: "ORD-8845",
      date: "28 Gennaio 2026",
      status: "Consegnato",
      deliveryDate: "31 Gennaio 2026",
      total: "89.50€",
      items: [
        { name: "Mangime Tropical Mix", qty: 2, img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=200" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center shadow-2xl">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover border-4 border-white/30" />
                <div className="absolute bottom-0 right-0 bg-green-400 w-5 h-5 rounded-full border-4 border-slate-900"></div>
              </div>
              <h2 className="text-xl font-bold text-white">{user.name}</h2>
              <p className="text-sm text-blue-200/70">{user.email}</p>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-blue-200/50">
                <span>Membro da:</span>
                <span>{user.memberSince}</span>
              </div>
            </div>

            <nav className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20 shadow-2xl">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-cyan-300 bg-white/10 rounded-xl">
                <ShoppingBag className="w-5 h-5" /> Miei Ordini
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-blue-100/70 hover:bg-white/5 rounded-xl transition-colors">
                <User className="w-5 h-5" /> Profilo
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-blue-100/70 hover:bg-white/5 rounded-xl transition-colors">
                <Settings className="w-5 h-5" /> Impostazioni
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-xl transition-colors mt-2">
                <LogOut className="w-5 h-5" /> Esci
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h1 className="text-3xl font-bold text-white mb-2">I tuoi Ordini</h1>
              <p className="text-blue-100/60">Gestisci i tuoi acquisti e monitora le spedizioni in tempo reale.</p>
            </div>

            <div className="space-y-6">
              {orders.map((order) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={order.id} 
                  className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
                >
                  <div className="p-6 border-b border-white/10 bg-white/5 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === 'In Transito' ? 'bg-cyan-400/20 text-cyan-300' : 'bg-green-400/20 text-green-300'
                      }`}>
                        {order.status}
                      </div>
                      <span className="text-sm text-blue-100/50 font-medium">{order.id}</span>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="block text-xs text-blue-200/40 uppercase font-bold">Data Ordine</span>
                        <span className="font-semibold text-white">{order.date}</span>
                      </div>
                      <div>
                        <span className="block text-xs text-blue-200/40 uppercase font-bold">Totale</span>
                        <span className="font-semibold text-cyan-300">{order.total}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-6">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-5">
                          <div className="relative group">
                            <img src={item.img} alt={item.name} className="w-20 h-20 rounded-2xl object-cover border border-white/10 group-hover:scale-105 transition-transform" />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-white text-lg">{item.name}</h4>
                            <p className="text-sm text-blue-100/60">Quantità: {item.qty}</p>
                          </div>
                          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-cyan-300 text-xs font-bold rounded-lg border border-white/10 transition-colors uppercase tracking-wider">
                            Dettagli
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-between items-end gap-6">
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-cyan-500/20 rounded-2xl border border-cyan-500/30">
                          <Truck className="w-7 h-7 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-xs text-blue-200/40 font-bold uppercase tracking-widest">Arrivo previsto</p>
                          <p className="font-bold text-white text-xl">{order.deliveryDate}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button className="px-8 py-3 bg-cyan-500 text-white rounded-xl text-sm font-black hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
                          TRACCIA PACCO
                        </button>
                        <button className="px-8 py-3 bg-white/5 border border-white/20 text-white rounded-xl text-sm font-bold hover:bg-white/10 transition-all">
                          AIUTO
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
