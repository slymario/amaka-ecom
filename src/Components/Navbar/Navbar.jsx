import React, {useState} from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");


    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => {setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none'}}>Shop {menu === "shop" ? <hr/> : <></>}</Link></li>
                <li onClick={() => {setMenu("mens")}}><Link to='/mens' style={{ textDecoration: 'none'}}>Men {menu === "mens" ? <hr/> : <></>}</Link></li>
                <li onClick={() => {setMenu("womens")}}><Link to='womens' style={{ textDecoration: 'none'}}>Women {menu === "womens" ? <hr/> : <></>}</Link></li>
                <li onClick={() => {setMenu("kids")}}><Link to='kids' style={{ textDecoration: 'none'}}>Kids {menu === "kids" ? <hr/> : <></>}</Link></li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><IoCartOutline /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar

