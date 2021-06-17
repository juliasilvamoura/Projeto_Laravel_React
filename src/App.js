import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ListarCliente from './cliente/Listar';
import CadastrarCliente from './cliente/Cadastrar';
import AlterarCliente from './cliente/Alterar';
import Login from '../login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" component={Login}/>
            <div className="app-content">
            <Route path="/cliente/listar" component={ListarCliente}/>
            <Route path="/cliente/Cadastrar" component={CadastrarCliente}/>
            <Route path="/cliente/alterar/:id" component={AlterarCliente}/>
            </div>
          </Switch>
        </Router>

        <ListarCliente/>
      </header>
    </div>
  );
}

export default App;
