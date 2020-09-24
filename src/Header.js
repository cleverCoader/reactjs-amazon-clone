import React from 'react';
import './Header.css';
import DehazeSharpIcon from '@material-ui/icons/DehazeSharp';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


function Header() {
    return (
        <nav className="header">
            <DehazeSharpIcon style={{fontSize:"xx-large"}} className="headerLeftDropdown" />
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to="/login" className="header_link" >
                    <div className="header__option">
                        <span className="headerOptionOne"> Hello <span className="myName">Sammed</span></span>
                        <span className="headerOptionTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/returns" className="header_link" >
                    <div className="header__option">
                        <span className="headerOptionOne"> Returns</span>
                        <span className="headerOptionTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/amazonPrime" className="header_link" >
                    <div className="header__option">
                        <span className="headerOptionOne"> Try</span>
                        <span className="headerOptionTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout"className="header_link" >
                    <div className="header_optionBasket">
                        <ShoppingCartOutlinedIcon />
                        <span className="headerOptionTwo header_basketCount">0</span>
                    </div>
                </Link>
            </div>
        </nav>    
    )
}

export default Header;
