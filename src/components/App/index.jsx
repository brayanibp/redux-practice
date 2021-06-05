import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import Menu from '../Menu';
import Users from '../Users';

const Tareas = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path="/" component={Users} />
    <Route exact path="/tasks" component={Tareas} />
  </BrowserRouter>
)

export default App;
