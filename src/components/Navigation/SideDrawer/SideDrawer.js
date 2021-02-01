import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import  './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Auxi from '../../../hoc/Auxi';
const sideDrawer = (props) => {
    let attachedClasses=["SideDrawer","Close"];
    if(props.open){
        attachedClasses=["SideDrawer","Open"]
    }
    return(
        <Auxi>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <Logo height="8%" margin="32px"/>
                <nav>
                    <NavigationItems  isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Auxi>
    );
};

export default sideDrawer;