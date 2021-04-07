const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

// Crear usuario
router.post('/new', crearUsuario);

// Login usuario
router.post('/', loginUsuario);

// Validar y revalidar token
router.get('/renew', revalidarToken);

module.exports = router;