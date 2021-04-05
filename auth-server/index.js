const express = require('express');

// Crear el servidor/aplicación de express
const app = express();

// Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(3000, () => {
  console.log(`servidor ejecutandose en el puerto ${3000}`);
});