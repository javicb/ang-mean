const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {
  console.log(req.body);

  const { email, name, password } = req.body;
  console.log(email, name, password);

  return res.json({
    ok: true,
    msn: 'Crear usuario /new'
  })
};

const loginUsuario = (req, res = response) => {
  console.log(req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  const { email, password } = req.body;
  console.log(email, password);

  return res.json({
    ok: true,
    msn: 'Login usuario /'
  })
};

const revalidarToken = (req, res = response) => {
  console.log(req.body);

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