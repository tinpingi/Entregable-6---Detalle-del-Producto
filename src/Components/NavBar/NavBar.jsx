import React from 'react'
import CardWidget from '../CardWidget/CardWidget.jsx'


import './NavBar.css';

const NavBar = () => {
    return (
        <div className ='NavBar'>
            <ul>
            <CardWidget />
            
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Carrito</a></li>
        </ul>
        
        </div>
        
    )
}


export default NavBar;

