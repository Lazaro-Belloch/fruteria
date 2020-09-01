import React from 'react';
import './App.css';
import Header from './components/Header';
import AltaFruta from './components/AltaFruta';
import ListaFrutas from './components/ListaFrutas';
import AltaVerduras from './components/AltaVerduras';
import ListaVerduras from './components/ListaVerduras';
import AltaVarios from './components/AltaVarios';
import ListaVarios from './components/ListaVarios';
import Inicio from './components/Inicio';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" component={Header}></Route>
      <Route exact path="/" component={Inicio}></Route>
      <Route exact path="/altaFruta" component={AltaFruta}></Route>
      <Route exact path="/frutas" component={ListaFrutas}></Route>
      <Route exact path="/altaVerduras" component={AltaVerduras}></Route>
      <Route exact path="/verduras" component={ListaVerduras}></Route>
      <Route exact path="/altaVarios" component={AltaVarios}></Route>
      <Route exact path="/varios" component={ListaVarios}></Route>
    </Router>
    </div>
  );
}

export default App;
