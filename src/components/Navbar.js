import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../assets/logo-gray.png'

const Nav = () => {

    return (
        <div className="navDiv">
            <nav>
                <img src={logo} className='nav-img' />
                <div className="ulNavCenter">
                    <ul>
                        <li className="liNav"><NavLink to="/">Inicio</NavLink></li>
                        <li className="liNav"><NavLink to="/series">Series</NavLink></li>
                        <li className="liNav"><NavLink to="/peliculas">Películas</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;