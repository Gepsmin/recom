import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/png/logo.png';
import { animateScroll as scroll } from "react-scroll";

class Navbar extends Component{
    


    render(){

        return(
            <nav className="Navbar navbar is-fixed-top" aria-label="main navigation">
                <div className="Arc">
                    <svg className="ArcLeft">
                        <g className="g">
                            <path d='M 10 0 Q 10 100 160 100 L 160 0'  strokeWidth="3" className="p">
                            </path>
                        </g>
                    </svg>
                    <svg className="ArcRight">
                        <g className="g">
                            <path d='M 0 0 L 150 0 Q 150 100 0 99'  strokeWidth="3" className="p">
                            </path>
                        </g>
                    </svg>
                </div>
                <Link to={'/signUp'}>signUp</Link>
                <div className="Headers">
                    <h1>
                        SIZE
                    </h1>
                    <h1 className="and">
                        &
                    </h1>
                    <h1>
                        ME
                    </h1>
                </div>
                
            </nav>
        )
    }
}

export default Navbar;