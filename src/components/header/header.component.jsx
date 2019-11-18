import React from 'react';
import {Link} from "react-router-dom";

import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => (
    <div className='header'>


        <Link className='logo-container' to="/">

            <Logo className='logo'/>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
            </div>
            <div className='options'>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>


            </div>


        </Link>

    </div>
);

export default Header;
