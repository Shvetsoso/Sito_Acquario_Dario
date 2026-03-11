import React from "react";
import { Mail, Phone, MapPin, Send, Clock, Fish } from "lucide-react";
import { motion } from "motion/react";

export const ContactPage = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Contattaci
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Siamo qui per aiutarti. Se hai domande sui nostri prodotti o hai
              bisogno di consigli per il tuo acquario, non esitare a scriverci.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Telefono</h3>
                  <p className="text-slate-600">+39 06 123 4567</p>
                  <p className="text-xs text-slate-400">
                    Lun-Sab: 9:00 - 19:00
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl">
                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600">info@acquariashop.it</p>
                  <p className="text-xs text-slate-400">
                    Rispondiamo entro 24h
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Sede Fisica</h3>
                  <p className="text-slate-600">Via dell'Oceano 123, Roma</p>
                  <p className="text-xs text-slate-400">Vieni a trovarci!</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="bg-white p-8 border border-slate-100 shadow-xl rounded-3xl space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Il tuo nome"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="la-tua@email.it"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Oggetto
                  </label>
                  <input
                    type="text"
                    placeholder="Come possiamo aiutarti?"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Messaggio
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Scrivi qui il tuo messaggio..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20">
                  Invia Messaggio <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InfoPage = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Informazioni e Shop Policy
            </h1>
            <p className="text-slate-600">
              Tutto quello che c'è da sapere sul nostro servizio.
            </p>
          </div>

          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6" /> Spedizioni e Consegna
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p>
                Effettuiamo spedizioni in tutta Italia tramite corrieri
                specializzati per il trasporto di merce fragile e animali vivi.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Tempi di consegna:</strong> 24-48 ore per accessori e
                  attrezzatura. Spedizioni di animali vivi solo dal Lunedì al
                  Mercoledì.
                </li>
                <li>
                  <strong>Costi:</strong> Gratuita per ordini superiori a €99.
                  Per ordini inferiori, contributo fisso di €9.90.
                </li>
                <li>
                  <strong>Tracciamento:</strong> Riceverai il codice di tracking
                  via email non appena il pacco lascerà il nostro magazzino.
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-cyan-600 mb-6 flex items-center gap-2">
              <Fish className="w-6 h-6" /> Cura e Trasporto Animali Vivi
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p>
                La salute dei pesci è la nostra priorità assoluta. Utilizziamo
                tecniche di imballaggio all'avanguardia:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Buste doppie rinforzate con ossigeno puro.</li>
                <li>
                  Box in polistirolo ad alta densità per l'isolamento termico.
                </li>
                <li>
                  Scaldini chimici (heat pack) durante i mesi invernali per
                  mantenere la temperatura costante.
                </li>
                <li>
                  <strong>Garanzia "Arrivo Vivo":</strong> Se un esemplare non
                  dovesse sopravvivere al viaggio, offriamo il rimborso o la
                  sostituzione immediata (previa invio foto entro 2h dalla
                  consegna).
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6" /> Pagamenti e Resi
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p>Accettiamo i seguenti metodi di pagamento:</p>
              <div className="flex gap-4 flex-wrap mb-4">
                <span className="px-4 py-2 bg-slate-100 rounded-lg font-bold text-slate-700">
                  Carta di Credito / Debito
                </span>
                <span className="px-4 py-2 bg-slate-100 rounded-lg font-bold text-slate-700">
                  PayPal
                </span>
                <span className="px-4 py-2 bg-slate-100 rounded-lg font-bold text-slate-700">
                  Bonifico Bancario
                </span>
                <span className="px-4 py-2 bg-slate-100 rounded-lg font-bold text-slate-700">
                  Klarna (3 rate)
                </span>
              </div>
              <p>
                <strong>Resi:</strong> Hai 14 giorni di tempo per restituire
                prodotti sigillati e non utilizzati (esclusi animali vivi e
                piante). Il costo della spedizione di rientro è a carico del
                cliente.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
