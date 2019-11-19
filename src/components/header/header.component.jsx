import React from 'react';
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";

import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser}) => (
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
        {
            currentUser ?
                <div className='option' onClick={()=> auth.signOut() }> SIGN OUT </div>
                :
                <Link className='option' to='/signin'> SIGN IN</Link>
        }

    </div>
);

export default Header;
