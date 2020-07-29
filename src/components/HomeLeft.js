import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class HomeLeft extends Component{

    render(){
        return(
            <Link to='/size' className="HomeLeft">
                <h1 className="HomeLeftHeader"> BEDEN <br></br> ÖLÇÜLERİNİZDEN <br></br>BULUN </h1>
            </Link>
        );
    }

}

export default HomeLeft;