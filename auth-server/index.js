const express = require('express');
const cors = require('cors');

// Crear el servidor/aplicación de express
const app = express();


// MIDDELWARES
// Cors
app.use(cors());
// Lectura y parseo del body
app.use(express.json())
// Rutas
app.use('/api/auth', require('./routes/auth'));


app.listen(3000, () => {
  console.log(`servidor ejecutandose en el puerto ${3000}`);
});