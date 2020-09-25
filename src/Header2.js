import React from 'react';
import './Header2.css';
//--------------------------------
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Link } from "react-router-dom";
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';

function Header2() {
    return (
        <nav className="header2">
            <div className="header2__left">
                <LocationOnOutlinedIcon style={{fontSize:"xx-large"}} className="header2Location" />
                <div className="header2_option header2_info">
                    <span className="header2_OptionOne"> Hello </span>
                    <span className="header2_OptionTwo">Select Your Location</span>
                </div>
            </div>
            <div className="header2__middle">
                <ul className="header2_option header2_listItems" >
                    <li>Mobiles</li>
                    <li>Best sellers </li>
                    <li> Today's Deals </li>
                    <li>Computers </li>
                    <li> Books</li>
                    <li>New Releases </li>
                    <li> Gift Ideas</li>
                    <li>customer servises </li>
                    <li> Sell</li>
                    <li>Amazon pay </li>
                    <li> Amazon Basics</li>
                    <li>Baby </li>
                    <li>coupens </li>
                </ul>
            </div>

            <div className="header2__right">
                <ComputerOutlinedIcon style={{fontSize:"xx-large"}} className="header2Location" />
                <div className="header2_option header2_info">
                    <span className="header2_OptionOne"> Unlimited streaming of </span>
                    <span className="header2_OptionTwo">Movies and TV shows</span>
                </div>

            </div>

            <div className="header2__prime">
            <Link to="/primevideo">
                <img className="header2__logo" src="http://www.pngmart.com/files/8/Amazon-Prime-Transparent-PNG.png" alt="" />
            </Link>
            </div>
        </nav>
    )
}

export default Header2;
