const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

const crearUsuario = async (req, res = response) => {

  const { email, name, password } = req.body;

  try {
    // Verificar email
    const usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'Ya existe un usuario con ese email'
      });
    }

    // Crear usuario con le modelo
    const dbUser = new Usuario(req.body);

    // Hash password
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    // Generar JWT

    // Crear usuario en BBDD
    await dbUser.save();

    // Generar respuesta
    return res.status(201).json({
      ok: true,
      uid: dbUser.id,
      name,
      msg: 'Usuario creado correctamente'
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msn: 'Póngase en contacto con el administrador'
    })
  };
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