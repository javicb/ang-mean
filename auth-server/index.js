const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// console.log(process.env);

// Crear el servidor/aplicación de express
const app = express();

// Conexión a bbdd
dbConnection();



// MIDDLEWARE
// Directorio público
app.use(express.static('public'));
// Cors
app.use(cors());
// Lectura y parseo del body
app.use(express.json())
// Rutas
app.use('/api/auth', require('./routes/auth'));


app.listen(process.env.PORT, () => {
  console.log(`servidor ejecutandose en el puerto ${process.env.PORT}`);
});