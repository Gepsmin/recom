import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class HomeRight extends Component{

    render(){
        return(
            <Link to='/me' className="HomeRight">
                <h1 className="HomeRightHeader"> KIYAFET <br></br> GRAFİĞİNE <br></br>BAKIN</h1>
            </Link>
        );
    }
}

export default HomeRight;