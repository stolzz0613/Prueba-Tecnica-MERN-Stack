import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import  proyectoContext from "../../context/proyectos/proyectoContext";
import  {CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertaContext from "../../context/alertas/alertasContext";

const ListadoProyectos = () => {

    //Extraer proyectos state inicial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos} = proyectosContext;

    const alertasContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertasContext;

    useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
    }, [mensaje])
    
    //Revisar si proyecto tiene contenido
    if(proyectos.lenght === 0) return <p>No hay proyectos, comienza creando uno</p>;
    
    return ( 
        <ul className='listado-proyectos'>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            {proyectos.map(proyecto => (
                <TransitionGroup
                    key = {proyecto._id}
                >
                    <CSSTransition
                         timeout={200}
                         classNames='proyecto'
                    >
                        <Proyecto 
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                </TransitionGroup>
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;