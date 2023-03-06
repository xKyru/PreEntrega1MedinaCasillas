import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = React.memo(() => {

    const toggleMenu = () => {
        const navBar = document.querySelector(".navbar-wrap");
        navBar.classList.toggle("menu-active");
    }
    return (
        <>
            <ul className="nav-menu">
                <li className='nav-item'><Link to={"/"}>Inicio</Link></li>
                <li className='nav-item'><Link to={"/category/hamburguesa"}>Hamburguesas</Link></li>
                <li className='nav-item'><Link to={"/category/hot-dog"}>Hot Dogs</Link></li>
                <li className='nav-item'><Link to={"/category/alitas"}>Alitas</Link></li>
                <li className='nav-item'><Link to={"/category/otros"}>Otros</Link></li>
            </ul>

            <ul className="nav-menu mobile-menu">
                <li className='toggle-menu' onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </li>
                <li className='nav-item'><Link to={"/"}>Inicio</Link></li>
                <li className='nav-item'><Link to={"/category/hamburguesa"}>Hamburguesas</Link></li>
                <li className='nav-item'><Link to={"/category/hot-dog"}>Hot Dogs</Link></li>
                <li className='nav-item'><Link to={"/category/alitas"}>Alitas</Link></li>
                <li className='nav-item'><Link to={"/category/otros"}>Otros</Link></li>
            </ul>
        </>
    )
})

export default Navigation