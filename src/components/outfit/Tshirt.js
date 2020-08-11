import React, {Component} from "react";
import Navbar from '../Navbar';
import Me from "../Me";

import { string} from 'prop-types';
import { connect } from 'react-redux';

class Tshirt extends Component{

    constructor(){
        super();

        this.state={
            chest: '',
            waist: '',
            length: '',
            sleeve: '',
            create: false,

            xchest: '',
            xwaist: '',
            xlength: '',
            xsleeve: '',
        }

        this.change = this.change.bind(this);
        this.blur = this.blur.bind(this);

    }


    change(e){
        let value = e.target.value;
        let name = e.target.name;
        if(name==='chest'){
            this.setState(() => ({chest: value}))
        }else if(name==='waist'){
            this.setState(() => ({waist: value}))
        }else if(name==='length'){
            this.setState(() => ({length: value}))
        }else if(name==='sleeve'){
            this.setState(() => ({sleeve: value}))
        }
    }


    blur(e){
        const chest = this.state.chest;
        const waist = this.state.waist;
        const length = this.state.length;
        const sleeve = this.state.sleeve;

        console.log(this.props);

        if(chest===''||waist===''||length===''||sleeve===''){
            this.setState(()=>({create:false}));
        }else{
            this.setState(()=>({create:true}));
        }

        this.setState(()=>({xchest: chest, xwaist: waist,
             xlength: length, xsleeve: sleeve}));
    }


    render(){
        const {create} = this.state;
        return(
            <div className="Tshirt">
                <Navbar></Navbar>
                <div className="TshirtPage">
                    <div className="TshirtForm">
                        <div className="Chest">
                            <input name='chest'
                            className="input ex"
                            placeholder={"Chest"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                        
                        <div className="Waist">
                            <input name='waist'
                            className="input ex"
                            placeholder={"Waist"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                        
                        <div className="Length">
                            <input name='length'
                            className="input ex"
                            placeholder={"Length"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                        
                        <div className="Sleeve">
                            <input name='sleeve'
                            className="input ex"
                            placeholder={"Sleeve"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                    </div>
                    <svg className="TshirtSVG" >
                        <path style={{display: create? 'block':'none'}} d={`M ${15+this.state.xsleeve/2*3+9*this.state.xchest/4} 25 
                        L ${20+this.state.xsleeve/2*3+9*this.state.xchest/4} 30 
                        L ${20+this.state.xsleeve/2*3+3*this.state.xchest} ${30+this.state.xlength/12}
                        Q ${20+7*this.state.xsleeve/3+3*this.state.xchest} ${this.state.xsleeve/4+this.state.xlength/8+30} ${20+8*this.state.xsleeve/3+3*this.state.xchest} ${30+this.state.xlength/6+this.state.xsleeve/2}
                        L ${40+this.state.xsleeve/2*3+3*this.state.xchest} ${40+11*this.state.xlength/14}
                        L ${20+this.state.xsleeve/2*3+3*this.state.xchest} ${30+11*this.state.xlength/14}
                        L ${20+this.state.xsleeve/2*3+3*this.state.xchest} ${30+2*this.state.xlength}
                        Q ${20+this.state.xsleeve/2*3+3*this.state.xchest} ${30+7*this.state.xlength/3} ${20+this.state.xsleeve/2*3+(this.state.xchest-this.state.xwaist)*3/2+3*this.state.xwaist} ${30+3*this.state.xlength} 
                        L ${20+this.state.xsleeve/2*3+(this.state.xchest-this.state.xwaist)*3/2} ${30+3*this.state.xlength}
                        Q ${20+this.state.xsleeve/2*3} ${30+7*this.state.xlength/3} ${20+this.state.xsleeve/2*3} ${30+2*this.state.xlength}
                        L ${20+this.state.xsleeve/2*3} ${30+this.state.xlength*11/14} 
                        L ${this.state.xsleeve/2*3} ${40+this.state.xlength*11/14}
                        L ${20+this.state.xsleeve/3} ${this.state.xsleeve/2+this.state.xlength/6+30}
                        Q ${20+this.state.xsleeve/3*2} ${this.state.xsleeve/4+this.state.xlength/8+30} ${20+this.state.xsleeve/2*3} ${this.state.xlength/12+30}
                        L ${20+this.state.xsleeve/2*3+this.state.xchest*3/4} 30
                        L ${25+this.state.xsleeve/2*3+this.state.xchest*3/4} 25
                        Q ${20+this.state.xsleeve/2*3+this.state.xchest*3/2} 35
                        ${15+this.state.xsleeve/2*3+9*this.state.xchest/4} 25 Z`} 
                        fill="none" stroke="black" strokeWidth="1.5">
                        </path>
                        
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3+this.state.xchest*3/4} 20
                        L ${10+this.state.xsleeve/2*3+this.state.xchest*3/4} 25
                        L ${10+this.state.xsleeve/2*3+this.state.xchest*3/4} 15 `}
                        fill='black' stroke='black' strokeWidth='0.9'></path>
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/3} ${this.state.xsleeve/2+this.state.xlength/6+20}
                        L ${30+this.state.xsleeve/3} ${this.state.xsleeve/2+this.state.xlength/6+16}
                        L ${26+this.state.xsleeve/3} ${this.state.xsleeve/2+this.state.xlength/6+10}`}
                        fill='black' stroke='black' strokeWidth='0.9'></path>
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3+this.state.xchest*3/4} 20
                        L ${20+this.state.xsleeve/2*3} ${this.state.xlength/12+20}
                        Q ${20+this.state.xsleeve/3*2} ${this.state.xsleeve/4+this.state.xlength/8+20} ${20+this.state.xsleeve/3} ${this.state.xsleeve/2+this.state.xlength/6+20}`}
                        fill='none' stroke='black' strokeWidth='0.9'> </path>

                        <path style={{display: create? 'block': 'none'}} d={`M ${15+this.state.xsleeve/2*3+9*this.state.xchest/4} 25 
                        Q ${20+this.state.xsleeve/2*3+this.state.xchest*3/2} ${this.state.xsleeve/2+this.state.xlength/6+42} 
                        ${25+this.state.xsleeve/2*3+this.state.xchest*3/4} 25 `} fill='none' stroke='black' strokeWidth='0.8'>
                        </path>
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3+this.state.xchest*3/4} 30
                        Q ${20+this.state.xsleeve/2*3+this.state.xchest*3/2} ${this.state.xsleeve/2+this.state.xlength/6+50} 
                        ${20+this.state.xsleeve/2*3+9*this.state.xchest/4} 30`} fill='none' stroke='black' strokeWidth='0.8'></path>
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3} ${this.state.xlength/12+30}
                        Q ${30+this.state.xsleeve/2*3} ${30+this.state.xlength*5/14} 
                        ${20+this.state.xsleeve/2*3} ${30+this.state.xlength*11/14} `}
                        fill='none' stroke='black' strokeWidth='0.8'>
                        </path>
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3+3*this.state.xchest} ${30+this.state.xlength/12}
                        Q ${10+this.state.xsleeve/2*3+3*this.state.xchest} ${30+this.state.xlength*5/14} 
                        ${20+this.state.xsleeve/2*3+3*this.state.xchest} ${30+11*this.state.xlength/14} `}
                        fill='none' stroke='black' strokeWidth='0.8'></path>

                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3+9*this.state.xchest/4} 30
                        L ${25+this.state.xsleeve/2*3+9*this.state.xchest/4} 40
                        L ${15+this.state.xsleeve/2*3+9*this.state.xchest/4} 40`}
                        fill='black' stroke='black' strokeWidth='0.9'></path>
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3+9*this.state.xchest/4} ${30+3*this.state.xlength}
                        L ${25+this.state.xsleeve/2*3+9*this.state.xchest/4} ${20+3*this.state.xlength}
                        L ${15+this.state.xsleeve/2*3+9*this.state.xchest/4} ${20+3*this.state.xlength}`}
                        fill='black' stroke='black' strokeWidth='0.9'></path>
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3+9*this.state.xchest/4} 30 
                        L ${20+this.state.xsleeve/2*3+9*this.state.xchest/4} ${30+3*this.state.xlength} `}
                        fill='none' stroke='black' strokeWidth='0.9'></path>

                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3} ${30+1*this.state.xlength}
                        L ${30+this.state.xsleeve/2*3} ${25+1*this.state.xlength}
                        L ${30+this.state.xsleeve/2*3} ${35+1*this.state.xlength}`}
                        fill='black' stroke='black' strokeWidth='0.9'></path>
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3+3*this.state.xchest} ${30+1*this.state.xlength}
                        L ${10+this.state.xsleeve/2*3+3*this.state.xchest} ${25+1*this.state.xlength}
                        L ${10+this.state.xsleeve/2*3+3*this.state.xchest} ${35+1*this.state.xlength}`}
                        fill='black' stroke='black' strokeWidth='0.9'></path>
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3} ${30+1*this.state.xlength} 
                        L ${20+this.state.xsleeve/2*3+3*this.state.xchest} ${30+1*this.state.xlength} `}
                        fill='none' stroke='black' strokeWidth='0.9'></path>

                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3+(this.state.xchest-this.state.xwaist)*3/2+3*this.state.xwaist} ${30+3*this.state.xlength} 
                        L ${10+this.state.xsleeve/2*3+(this.state.xchest-this.state.xwaist)*3/2+3*this.state.xwaist} ${25+3*this.state.xlength} 
                        L ${10+this.state.xsleeve/2*3+(this.state.xchest-this.state.xwaist)*3/2+3*this.state.xwaist} ${35+3*this.state.xlength} `}
                        fill='black' stroke='black' strokeWidth='0.9'></path>
                        <path style={{display: create? 'block': 'none'}} d={`M ${20+this.state.xsleeve/2*3+(this.state.xchest-this.state.xwaist)*3/2} ${30+3*this.state.xlength}
                        L ${30+this.state.xsleeve/2*3+(this.state.xchest-this.state.xwaist)*3/2} ${25+3*this.state.xlength}
                        L ${30+this.state.xsleeve/2*3+(this.state.xchest-this.state.xwaist)*3/2} ${35+3*this.state.xlength}`}
                        fill='black' stroke='black' strokeWidth='0.9'></path>

                        

                    </svg>

                    <div className="texts" style={{display: create? 'block': 'none'}}>
                        <h1 className="sleeve" style={{transform:`translate(${1*this.state.xsleeve}px, 0)`}} >SLEEVE {this.state.xsleeve} CM</h1>
                        <h1 className="chest" style={{transform:`translate(${2*this.state.xchest}px, ${this.state.xlength*1-15}px)`}}>CHEST {this.state.xchest} CM</h1>
                        <h1 className="length"style={{transform:`translate(${3*this.state.xchest+5}px, ${this.state.xlength*3/2}px)`}}>LENGTH {this.state.xlength} CM</h1>
                        <h1 className="waist" style={{transform:`translate(${2*this.state.xwaist+10}px, ${this.state.xlength*2+10}px)`}}>WAIST {this.state.xwaist} CM</h1>
                    </div>
                </div>
                
            </div>
        );
    }

}

Tshirt.propTypes = {
    body: string,
}

Me.defaultProps = {
    body: null,
}

export const mapStateToProps = (data) => {
    return{
        body: data['body'].body,
    }
}

export const mapDispatchToProps = {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tshirt);