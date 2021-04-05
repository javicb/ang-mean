const { Router } = require('express');

const router = Router();

// Crear usuario
router.post('/new', (request, response) => {
  return response.json({
    ok: true,
    msn: 'Crear usuario /new'
  })
});

// Login usuario
router.post('/', (request, response) => {
  return response.json({
    ok: true,
    msn: 'Login usuario /'
  })
});

// Validar y revalidar token
router.get('/renew', (request, response) => {
  return response.json({
    ok: true,
    msn: 'Renew'
  })
});

module.exports = router;