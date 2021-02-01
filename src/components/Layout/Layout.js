import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';
class Layout extends Component{
    state ={ 
        showSideDrawer:false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler = () =>{

        this.setState((prevState) => {
            return {showSideDrawer:!this.state.showSideDrawer}
        });
    }
    render (){
        
        return (
            <Auxi >
                <Toolbar isAuth={this.props.isAuthenticated}
                         drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                        isAuth={this.props.isAuthenticated} 
                        open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            
                <main className={"Content"}>
                    {this.props.children}
                </main>
            </Auxi>
        );
    }
} 

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !==null
    };
};
export default connect(mapStateToProps)(Layout);