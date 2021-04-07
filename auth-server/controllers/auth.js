const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {
  return res.json({
    ok: true,
    msn: 'Crear usuario /new'
  })
};

const loginUsuario = (req, res = response) => {
  return res.json({
    ok: true,
    msn: 'Login usuario /'
  })
};

const revalidarToken = (req, res = response) => {
  return res.json({
    ok: true,
    msn: 'Renew'
  })
}

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken
}