const express = require('express');
const cors = require('cors');

const articoliRoutes = require('./src/routes/articoli.routes');
const clientiRoutes = require('./src/routes/clienti.routes');
const venditeRoutes = require('./src/routes/vendite.routes');
const authRoutes = require('./src/routes/auth.routes');
const errorMiddleware = require('./src/middlewares/error.middleware');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//  ROUTER DI PROVA:
app.get('/', (req, res) => {
  res.send('API Acquario Dario funzionante 🚀');
});

//  ROUTER
app.use('/api/articoli', articoliRoutes);
app.use('/api/clienti', clientiRoutes);
app.use('/api/vendite', venditeRoutes);
app.use('/api/auth', authRoutes);

app.use(errorMiddleware);

module.exports = app;