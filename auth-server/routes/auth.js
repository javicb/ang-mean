const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

// Crear usuario
router.post('/new', crearUsuario);

// Login usuario
router.post('/', [
  check('email', 'Campo email es obligatorio').isEmail(),
  check('password', 'Campo password demasiado corto').isLength({ min: 6 }),
], loginUsuario);

// Validar y revalidar token
router.get('/renew', revalidarToken);

module.exports = router;