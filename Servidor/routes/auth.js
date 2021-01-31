//Rutas para autenticar Usuarios
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');

//Crean un usuario
// api/auth

router.post('/',
    [
        check('email', 'Ingresa un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min: 6})
    ],
    authController.autenticarUsuario
);
module.exports = router;