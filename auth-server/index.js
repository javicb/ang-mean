const express = require('express');

// Crear el servidor/aplicación de express
const app = express();

// GET
app.get('/', (request, response) => {
  response.json({
    ok: true,
    msg: 'Correcto',
    uio: 1234
  })
});

app.listen(3000, () => {
  console.log(`servidor ejecutandose en el puerto ${3000}`);
});