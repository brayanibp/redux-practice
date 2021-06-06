import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import Menu from '../Menu';
import Users from '../Users';
import Pubs from '../Pubs';

const Tareas = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="container">
      <Route exact path="/" component={Users} />
      <Route exact path="/tasks" component={Tareas} />
      <Route exact path="/pubs/:key" component={Pubs} />
    </div>
  </BrowserRouter>
)

export default App;
