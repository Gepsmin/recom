import React , {Component} from 'react';
import Navbar from './Navbar'
import Button from './Button'
import Avatar from './Avatar'


class Me extends Component{
    render(){
        return(
            <div className="Me">
                <Navbar></Navbar>

                <Avatar></Avatar>

                <div className="Buttons">
                    <Button header="Tshirt" open="/me/tshirt"></Button>
                    <Button header="Coat" open="/me/coat"></Button>
                    <Button header="Skirt" open="/me/skirt"></Button>
                    <Button header="Bra" open="/me/bra"></Button>
                    <Button header="Hat" open="/me/hat"></Button>
                </div>
            </div>
            
            
        )
    }

}


export default Me;