import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Button extends Component{
    render(){

        return(
            <div className="Button">
                <Link to={this.props.open} className="ButtonLink">
                    <svg className="ButtonSVG">
                        <path d="M 0 0 L 0 200 L 350 200 L 350 0 Z" className="ButtonPath">
                        </path>
                    </svg>
                    <h1 className="ButtonHeader">{this.props.header}</h1>
                </Link>
            </div>
        );
    }


}

export default Button;