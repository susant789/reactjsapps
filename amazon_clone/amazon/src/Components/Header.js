import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/small/amazon_PNG25.png" alt="Amazon" />
            </Link>
            <div className="search__tools">
                <input type="text" className="header__input" />
                <SearchIcon style={{color:"#000",
                backgroundColor:"#eea950",
                height:"22px !important",
                padding:"5px",
                fontSize:"2.2rem",
                fontWeight:"600"}}
                 className="header__search" />
            </div>
            <div className="header__nav">
                <Link to="/login">
                    <div className="header__menu">
                        <span>Hello</span>
                        <span>Login</span>
                    </div>
                </Link>
                <Link to="/signout">
                    <div className="header__menu">
                        <span>Return</span>
                        <span>& Order</span>
                    </div>
                </Link>
                <Link to="./cart">
                    <div className="header__menu">
                        <span>Your</span>
                        <span>Price</span>
                    </div>
                </Link>
            </div>
            <Link to="/checkout">
                <div className="header__basket">
                    <ShoppingBasketIcon style={{color:'white',margin:'0 .5rem'}} />
                    <span>0</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
