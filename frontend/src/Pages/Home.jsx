import React, { useState, useEffect } from "react";
import "../styles/_home.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import { getArticoli } from "../api/articoli";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [articoli, setArticoli] = useState([]);

  useEffect(() => {
    getArticoli()
      .then((res) => {
        setArticoli(res);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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

const Card = ({ title, image, description, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="container-section" data-aos="fade-up">
      <div
        className={`card-inner ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {!isFlipped ? (
          <div className="card-front">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
          </div>
        ) : (
          <div className="card-back">
            <p>{backContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const MainContent = () => {
  const cards = [
    {
      title: "Acquari",
      image: "/path/to/acquari.jpg",
      description: "Vasta gamma di acquari di diverse dimensioni e stili.",
      backContent: "Acquari in vetro e acrilico, adatti a tutti gli ambienti.",
    },
    {
      title: "Pesci",
      image: "/path/to/pesci.jpg",
      description: "Ampia varietà di pesci per ogni tipo di acquario.",
      backContent: "Pesci tropicali, d'acqua dolce e marina.",
    },
    {
      title: "Accessori",
      image: "/path/to/accessori.jpg",
      description: "Tutto ciò che serve per mantenere il tuo acquario.",
      backContent: "Filtri, pompe, decorazioni e illuminazione.",
    },
  ];

  return (
    <main>
      <div className="container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </main>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>© 2026 Acquari Sito - Tutti i diritti riservati</p>
  </footer>
);

export default App;
