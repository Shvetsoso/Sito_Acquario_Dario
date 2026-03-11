import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import '../styles/Shop.css';

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');
  const [selectedWaterType, setSelectedWaterType] = useState('Tutti');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'Tutti',
    'Pesci',
    'Acquari',
    'Filtri',
    'Pompe',
    'Illuminazione',
    'Mangimi',
    'Decorazioni',
    'Pulizia',
  ];

  const waterTypes = ['Tutti', 'Acqua Dolce', 'Acqua Salata', 'Entrambi'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'Tutti') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by water type
    if (selectedWaterType !== 'Tutti') {
      const waterTypeMap = {
        'Acqua Dolce': 'dolce',
        'Acqua Salata': 'salata',
        Entrambi: 'entrambi',
      };
      const waterType = waterTypeMap[selectedWaterType];
      filtered = filtered.filter(
        (p) => p.waterType === waterType || p.waterType === 'entrambi'
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, selectedWaterType, priceRange, sortBy]);

  return (
    <div className="shop-container">
      <div className="shop-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="shop-header"
        >
          <h1 className="shop-title">Il Nostro Negozio</h1>
          <p className="shop-subtitle">
            Esplora la nostra vasta collezione di prodotti per acquariofilia
          </p>
        </motion.div>

        <div className="shop-layout">
          {/* Filters Sidebar - Desktop */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="filters-sidebar"
          >
            <div className="filters-card">
              <div className="filters-header">
                <SlidersHorizontal className="filters-icon" />
                <h2 className="filters-title">Filtri</h2>
              </div>

              {/* Category Filter */}
              <div className="filter-section">
                <h3 className="filter-section-title">Categoria</h3>
                <div className="filter-buttons">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Water Type Filter */}
              <div className="filter-section">
                <h3 className="filter-section-title">Tipo Acqua</h3>
                <div className="filter-buttons">
                  {waterTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedWaterType(type)}
                      className={`filter-button ${selectedWaterType === type ? 'active' : ''}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="filter-section">
                <h3 className="filter-section-title">
                  Fascia di Prezzo
                </h3>
                <div className="price-range-container">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="price-range-input"
                  />
                  <div className="price-range-display">
                    <span>€{priceRange[0]}</span>
                    <span>€{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('Tutti');
                  setSelectedWaterType('Tutti');
                  setPriceRange([0, 500]);
                  setSortBy('featured');
                }}
                className="reset-button"
              >
                Resetta Filtri
              </button>
            </div>
          </motion.aside>

          {/* Mobile Filter Button */}
          <div className="mobile-filter-button-container">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="mobile-filter-button"
            >
              {showFilters ? (
                <X className="mobile-filter-icon" />
              ) : (
                <Filter className="mobile-filter-icon" />
              )}
            </button>
          </div>

          {/* Mobile Filters Overlay */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-filters-overlay"
              onClick={() => setShowFilters(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                onClick={(e) => e.stopPropagation()}
                className="mobile-filters-panel"
              >
                <div className="filters-header">
                  <SlidersHorizontal className="filters-icon" />
                  <h2 className="filters-title">Filtri</h2>
                </div>

                {/* Same filters as desktop */}
                <div className="filter-section">
                  <h3 className="filter-section-title">Categoria</h3>
                  <div className="filter-buttons">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h3 className="filter-section-title">Tipo Acqua</h3>
                  <div className="filter-buttons">
                    {waterTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedWaterType(type)}
                        className={`filter-button ${selectedWaterType === type ? 'active' : ''}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h3 className="filter-section-title">
                    Fascia di Prezzo
                  </h3>
                  <div className="price-range-container">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="price-range-input"
                    />
                    <div className="price-range-display">
                      <span>€{priceRange[0]}</span>
                      <span>€{priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedCategory('Tutti');
                    setSelectedWaterType('Tutti');
                    setPriceRange([0, 500]);
                    setSortBy('featured');
                  }}
                  className="reset-button"
                >
                  Resetta Filtri
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Products Grid */}
          <div className="products-section">
            {/* Sort and Results Count */}
            <div className="sort-bar">
              <p className="results-count">
                {filteredProducts.length} prodott{filteredProducts.length !== 1 ? 'i' : 'o'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">In Evidenza</option>
                <option value="price-low">Prezzo: Basso a Alto</option>
                <option value="price-high">Prezzo: Alto a Basso</option>
                <option value="rating">Migliore Valutazione</option>
                <option value="name">Nome A-Z</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p className="no-results-text">
                  Nessun prodotto trovato con i filtri selezionati
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
