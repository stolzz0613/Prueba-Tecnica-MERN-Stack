import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertasContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevaCuenta = (props) => {
    //extrer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario} = authContext;
    
    // Si el usuario se registra, autentica o es un registro duplicado
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        
    }, [mensaje, autenticado, props.history]);

    // State para iniciar sesión
    const [usuario, setUsuario] = useState({
        nombre : '',
        email: '',
        password: '',
        confirmar: '',
    });

    //Extraer de usuario
    const {nombre, email, password, confirmar} = usuario;
    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario inicia sesión
    const onSubmit = e => {
        e.preventDefault();
        // Validar campos vacios
        if (
            nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmar.trim() === ''
        ) {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // Password minimo 6 caracteres
        if(password.length < 6){
            mostrarAlerta('El password debe ser de minimo 6 caracteres', 'alerta-error');
            return;
        }

        //Los 2 passwords son iguales
        if(password !== confirmar) {
            mostrarAlerta('Los password no son iguales', 'alerta-error');
            return;
        }

        //Pasarlo al action
        registrarUsuario({nombre, email, password});
    }

    return (
        <div className="form-usuario">
            {
                alerta 
                    ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>)
                    : null
            }
            <div className="contenedor-form sombra-dark">
                <h1>Obtener Cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange ={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange ={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value = {password}
                            onChange ={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            value = {confirmar}
                            onChange ={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block"
                            value ="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;