import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyecto from './components/proyectos/Proyecto';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/ProyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertasState';
import AuthState from './context/autenticacion/authState';


function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <Route exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;