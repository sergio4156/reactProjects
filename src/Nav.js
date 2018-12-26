import React from 'react';
import NavLink from 'react-router-dom/NavLink';

const Nav = () => {
    return (
        <React.Fragment>
            <nav>
                <NavLink className="nav-styles" to="/home">Home</NavLink>
                <NavLink className="nav-styles" to="/about">About</NavLink>
                <NavLink className="nav-styles" to="/buy">Buy</NavLink>
                <NavLink className="nav-styles" to="/contact">Contact</NavLink>
            </nav>
        </React.Fragment>
    )
}

export default Nav;