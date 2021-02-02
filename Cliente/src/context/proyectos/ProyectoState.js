import React, {useReducer} from 'react';

import proyectoReducer from './proyectoReducer';
import proyectoContext from './proyectoContext';
import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    PROYECTO_ERROR,
    ELIMINAR_PROYECTO,
} from '../../types';
import clienteAxios from '../../config/axios';


const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Intraner'},
        {id: 3, nombre: 'Diseño de Sitio Web'},
        {id: 4, nombre: 'MERN'},
    ];

    const initialState = {
        formulario: false,
        proyectos: [],
        errorformulario: false,
        proyecto: null,
        mensaje: null,
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Serie de funciones Crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener Proyectos
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('api/proyectos');

            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos,
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error',
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta,
            })
        }
    }

    //Agregar nuevo proyecto
    const agregarProyecto = async proyecto => {
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            console.log(resultado);
            //Insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error',
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta,
            })
        }
    }

    //Validar formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId,
        })
    }

    //Elimina un proyecto
    const eliminarProyecto = async proyectoId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);

            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId,
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error',
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta,
            })
        }
    }

    return(
        <proyectoContext.Provider
            value = {{
                proyectos: state.proyectos,
                formulario : state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto,
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;