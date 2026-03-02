import React from "react";
import "../styles/_home.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="header">
    <h1>Benvenuti nel Mondo degli Acquari</h1>
  </header>
);

const MainContent = () => (
  <main>
    <section className="container-section">
      <div className="section">
        <h2>Acquari</h2>
        <img
          src="/path/to/acquari.jpg"
          alt="Acquari"
          className="section-image"
        />
        <p>
          Scopri la nostra vasta gamma di acquari di diverse dimensioni e stili.
        </p>
      </div>
    </section>
    <section className="container-section">
      <div className="section">
        <h2>Pesci</h2>
        <img src="/path/to/pesci.jpg" alt="Pesci" className="section-image" />
        <p>Trova i pesci più belli e colorati per il tuo acquario.</p>
      </div>
    </section>
    <section className="container-section">
      <div className="section">
        <h2>Cibo</h2>
        <img src="/path/to/cibo.jpg" alt="Cibo" className="section-image" />
        <p>Offri ai tuoi pesci il miglior cibo per una vita sana e felice.</p>
      </div>
    </section>
  </main>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2026 Acquari Sito - Tutti i diritti riservati</p>
  </footer>
);

export default App;
