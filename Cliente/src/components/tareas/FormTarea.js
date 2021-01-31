import React, {useContext, useState, useEffect} from 'react';
import  proyectoContext from "../../context/proyectos/proyectoContext";
import  tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {

    //Extraer proyectos state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto} = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const {
        obtenerTareas,
        agregarTarea,
        validarTarea,
        errortarea,
        tareaseleccionada,
        actualizarTarea
    } = tareasContext;


    //State del formulario
    const [tarea, setTarea] = useState({
        nombre: ''
    })

    useEffect(() => {
        if(tareaseleccionada !== null) {
            setTarea(tareaseleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);
    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    const [proyectoActual] = proyecto;

    //Leer los valores del forulario
    const handleChane = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const {nombre} = tarea;

    const onSubmit = e => {
        e.preventDefault();
        // validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        if(tareaseleccionada === null) {
            //agregar tarea al state 
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            actualizarTarea(tarea);
        }

        //Obtener y filtrar las tareas
        obtenerTareas(proyectoActual.id);

        setTarea({
            nombre: ''
        })
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type='text'
                        className='input-text' 
                        placeholder='Nombre Tarea...'
                        name='nombre'
                        value={nombre}
                        onChange={handleChane}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errortarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}
 
export default FormTarea;