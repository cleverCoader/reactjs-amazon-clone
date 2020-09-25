import React from 'react';
import './Header2.css';
//--------------------------------
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Link } from "react-router-dom";
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';

function Header2() {
    return (
        <nav className="header2">
            <div className="nav_left">
            <LocationOnOutlinedIcon style={{fontSize:"xx-large"}} className="header2Location" />
                <Link to="/current-location" className="header_link1"  >
                    <div className="header__option">
                        <span className="headerOptionOne"> Hello</span>
                        <span className="headerOptionTwo">Select Your Address</span>
                    </div>
                </Link>    
            </div>

            <div className="nav_middle">
                <Link to="/returns" className="header_link1"  >
                    <span> Mobiles</span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span>Best sellers </span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span> Today's Deals</span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span>Computers </span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span> Books</span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span> New Releases</span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span> Gift Ideas</span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span>customer servises </span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span>Sell </span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span>Amazon pay </span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span>Amazon Basics </span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span>Baby </span>
                </Link>
                <Link to="/returns" className="header_link1"  >
                    <span>coupens </span>
                </Link>
            </div>
            <div className="header_right">
            <ComputerOutlinedIcon style={{fontSize:"xx-large"}} className="header2Location" />
            <Link to="/amazonPrime" className="header_link1 header_right"  >
                    <div className="header__option">
                        <span className="header2_OptionOne"> Unlimited streaming of </span>
                        <span className="header2_OptionTwo">Movies and TV shows</span>
                    </div>
                </Link>
            </div>
           
        </nav>
    )
}

export default Header2;
          