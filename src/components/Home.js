import React from 'react';
import {Component} from 'react';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import Navbar from './Navbar';

class Home extends Component {

    render(){
        return(
            <div className="home">
                <Navbar></Navbar>
                <div className="homeGroup">
                    <HomeLeft></HomeLeft>
                    <HomeRight></HomeRight>
                </div>
            </div>
        );
    }
}
export default Home;