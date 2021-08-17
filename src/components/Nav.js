import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <nav>
            <h3>
                <img className='logo' src='https://icon-library.com/images/icon-for-blog/icon-for-blog-28.jpg' alt='logo'></img>
            </h3>
            <ul className='nav-links'>
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/blog">
                    <li>Blog</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
