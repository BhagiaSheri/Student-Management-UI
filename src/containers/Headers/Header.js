import React from "react";
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/students">Students</Link></li>
                    <li><Link to="add-student"> Add Students</Link></li>
                    <li><Link to="selected-students">Selected Students</Link></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;