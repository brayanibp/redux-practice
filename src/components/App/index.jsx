import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import Menu from '../Menu';
import Users from '../Users';
import Pubs from '../Pubs';
import Tasks from '../Tasks';

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="container">
      <Route exact path="/" component={Users} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/pubs/:key" component={Pubs} />
    </div>
  </BrowserRouter>
)

export default App;
