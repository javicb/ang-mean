const { response } = require('express');

const crearUsuario = (req, res) => {
  console.log(req.body);
  const { email, name, password } = req.body;
  console.log(email, name, password);


  return res.json({
    ok: true,
    msn: 'Crear usuario /new'
  })
};

const loginUsuario = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email, password);

  return res.json({
    ok: true,
    msn: 'Login usuario /'
  })
};

const revalidarToken = (req, res) => {
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