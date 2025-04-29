require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./src/routes/bookRoutes');
const app = express();

app.use(express.json());
app.use('/api', bookRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB conectado');
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
  });
}).catch(err => {
  console.error('Erro ao conectar no MongoDB:', err);
});
