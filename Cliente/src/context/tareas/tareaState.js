import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';
import {v4 as uuidv4} from 'uuid';

const TareaState = props => {
    const initialState = {
        tareas : [
            {id: 1, proyectoId: 1, nombre: 'Elegir Plataforma', estado: true},
            {id: 2, proyectoId: 2, nombre: 'Elegir Colores', estado: false},
            {id: 3, proyectoId: 2, nombre: 'Elegir Plataformas de Pago', estado: false},
            {id: 4, proyectoId: 3, nombre: 'Elegir Hosting', estado: true},
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null,
    }
    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //crear las funciones


    //Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch ({
            type: TAREAS_PROYECTO,
            payload: proyectoId,
        })
    }

    //Agregar Tarea
    const agregarTarea = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea,
        })
    }

    //Validar tarea
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        })
    }

    //Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id,
        })
    }

    //Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea,
        })
    }

    //Tarea actual
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //EDITA UNA TAREA
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea,
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto : state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                agregarTarea,
                obtenerTareas,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;