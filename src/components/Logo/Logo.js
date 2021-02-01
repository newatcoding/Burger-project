import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import './Logo.css'
const logo = (props) => (
    <div className={"Logo"} style={{height:props.height, margin:props.margin}}>
        <img src={burgerLogo} alt="My Burger" />
    </div>
);

export default logo;