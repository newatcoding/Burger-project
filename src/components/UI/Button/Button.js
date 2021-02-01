// import { checkPropTypes } from 'prop-types';
import React from 'react';
import './Button.css'
const button = (props) =>(
<button 
        onClick={props.clicked}
        disabled={props.disabled}
        className={["Button",props.btnType].join(" ")}>{props.children}</button>
);

export default button;