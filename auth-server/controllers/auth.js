const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

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
    const token = await generarJWT(dbUser.id, dbUser.name);

    // Crear usuario en BBDD
    await dbUser.save();

    // Generar respuesta
    return res.status(201).json({
      ok: true,
      uid: dbUser.id,
      name,
      token,
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

const loginUsuario = async (req, res = response) => {

  const { email, password } = req.body;

  try {
    const dbUser = await Usuario.findOne({ email });
    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario incorrecto'
      });
    }

    // Confimar si la contraseña coincide
    const validPassword = bcrypt.compareSync(password, dbUser.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Contraseña incorrecta'
      });
    }

    // Generar el JWT
    const token = await generarJWT(dbUser.id, dbUser.name);

    // Respuesta del servicio
    return res.status(200).json({
      ok: true,
      uid: dbUser.id,
      name: dbUser.name,
      token,
      msg: 'Login correcto'
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msn: 'Póngase en contacto con el administrador'
    })

  }
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