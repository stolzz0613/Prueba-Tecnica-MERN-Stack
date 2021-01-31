import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';

const SideBar = () => {
    return ( 
        <aside>
            <h1>Prueba Tecnica<span>MERN</span></h1>
            
            <NuevoProyecto />

            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProyectos />
            </div>
        </aside>

     );
}
 
export default SideBar;