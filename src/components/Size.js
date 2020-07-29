import React , {Component} from 'react';
import Navbar from './Navbar'
import Properties from './Properties'

class Size extends Component{
    render(){
        return(
            <div className="Size">
                <Navbar></Navbar>
                <Properties className="SizeProperties"></Properties>
            </div>
        )
    }

}

export default Size;