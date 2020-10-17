import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='background'>
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <img className="logo" src={logo} alt=""/>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <Link to="/" >
                    <a class="nav-link mr-5 text-dark" href="#">Home <span class="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5 text-dark" href="#">Our Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5 text-dark" href="#">Our Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5 text-dark" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                    <Link to='/login'>
                    <button class=" btn btn-dark">Login</button>
                    </Link>
                   
                </li>
            </ul>

        </div>
    </nav>
    </div>
    );
};

export default Header;