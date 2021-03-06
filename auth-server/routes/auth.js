const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Crear usuario
router.post('/new', [
  check('name', 'Campo nombre es obligatorio').notEmpty(),
  check('email', 'Campo email es obligatorio').isEmail(),
  check('password', 'Campo password demasiado corto').isLength({ min: 6 }),
  validarCampos
], crearUsuario);

// Login usuario
router.post('/', [
  check('email', 'Campo email es obligatorio').isEmail(),
  check('password', 'Campo password demasiado corto').isLength({ min: 6 }),
  validarCampos
], loginUsuario);

// Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken);

module.exports = router;