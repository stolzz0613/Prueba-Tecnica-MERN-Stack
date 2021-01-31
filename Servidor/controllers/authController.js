const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }
    
    //extraer email y password
    const {email, password} =req.body;

    try {
        let usuario = await Usuario.findOne({email});
        if(!usuario) {
            return res.status(400).json({msg: 'El usuario no existe'});
        }

        //revisar el password
        const passCorrecto = await bcrypt.compare(password, usuario.password);
        if(!passCorrecto) {
            return res.status(400).json({msg: 'Password Incorrecto'});
        }

        //crear jwt
        const payload = {
            usuario: {
                id:usuario.id
            }
        }

        //firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;

            //Mensaje de confirmacion
            res.json({token});
        });
    } catch(error) {
        console.log(error);
    }
}