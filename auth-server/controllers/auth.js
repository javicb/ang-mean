const { response } = require('express');

const crearUsuario = (req, res) => {
  return res.json({
    ok: true,
    msn: 'Crear usuario /new'
  })
};

const loginUsuario = (req, res) => {
  return res.json({
    ok: true,
    msn: 'Login usuario /'
  })
};

const revalidarToken = (req, res) => {
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