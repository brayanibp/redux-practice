import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Menu = () => (
  <nav id="menu">
    <Link to="/">Usuarios</Link>
    <Link to="tasks">Tareas</Link>
  </nav>
)

export default Menu;