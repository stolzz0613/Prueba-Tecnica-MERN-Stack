import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import  proyectoContext from "../../context/proyectos/proyectoContext";
import  {CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {

    //Extraer proyectos state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos} = proyectosContext;

    useEffect(() => {
        obtenerProyectos();
    }, [])
    
    //Revisar si proyecto tiene contenido
    if(proyectos.lenght === 0) return <p>No hay proyectos, comienza creando uno</p>;
    
    return ( 
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (
                <TransitionGroup
                    key = {proyecto.id}
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