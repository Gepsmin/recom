import React, {Component} from 'react'
import { connect } from 'react-redux';
import { getBody } from './redux/actions';

import {func} from 'prop-types'

class Avatar extends Component{
    constructor(){
        super();

        this.state = {
            open : true,
            headDiameter: '16',
            headLength: '24',
            neckLine: '12',
            neckLength: '13',
            shoulderLength: '42',
            chest: '32',
            waist: '30',
            bodyLength: '48',
            armDiameter: '10',
            hips: '36',
            armLength: '54',
            handDiameter: '6',
            outsideLeg: '90',
            insideLeg: '80',
            legDiameter: '18',
            wrist: '7'
        }

        this.change = this.change.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.submitClick = this.submitClick.bind(this);
    }

    change(e){
        let value = e.target.value;
        let name = e.target.name;
        if(name==='headDiameter'){
            this.setState(()=>({headDiameter: value}))
        }else if(name==='headLength'){
            this.setState(()=>({headLength:value}))
        }else if(name==='neckLine'){
            this.setState(()=>({neckLine:value}))
        }else if(name==='neckLength'){
            this.setState(()=>({neckLength:value}))
        }else if(name==='shoulderLength'){
            this.setState(()=>({shoulderLength:value}))
        }else if(name==='chest'){
            this.setState(()=>({chest:value}))
        }else if(name==='waist'){
            this.setState(()=>({waist:value}))
        }else if(name==='bodyLength'){
            this.setState(()=>({bodyLength:value}))
        }else if(name==='armDiameter'){
            this.setState(()=>({armDiameter:value}))
        }else if(name==='hips'){
            this.setState(()=>({hips:value}))
        }else if(name==='armLength'){
            this.setState(()=>({armLength:value}))
        }else if(name==='handDiameter'){
            this.setState(()=>({handDiameter:value}))
        }else if(name==='outsideLeg'){
            this.setState(()=>({outsideLeg:value}))
        }else if(name==='insideLeg'){
            this.setState(()=>({insideLeg:value}))
        }else if(name==='legDiameter'){
            this.setState(()=>({legDiameter:value}))
        }else if(name==='wrist'){
            this.setState(()=>({wrist:value}))
        }
    }

    buttonClick(e){
        const {open} = this.state;
        if(open){
            this.setState(()=>({open: false}))
        }else{
            this.setState(()=>({open: true}))
        }
    }

    submitClick(e){
        const obj = {
            headDiameter: this.state.headDiameter,
            headLength: this.state.headLength,
            neckLine: this.state.neckLine,
            neckLength: this.state.neckLength,
            shoulderLength: this.state.shoulderLength,
            chest: this.state.chest,
            waist: this.state.waist,
            bodyLength: this.state.bodyLength,
            armDiameter: this.state.armDiameter,
            hips: this.state.hips,
            armLength: this.state.armLength,
            handDiameter: this.state.handDiameter,
            outsideLeg: this.state.outsideLeg,
            insideLeg: this.state.insideLeg,
            legDiameter: this.state.legDiameter,
            wrist: this.state.wrist
        }

        this.props.addBody(obj)
    }


    render(){
        return(
            <div className="AvatarPage">
                <div className="AvatarButton" onClick={this.buttonClick}>Avatar Button</div>
                <div className="AvatarVisual" style={{display: this.state.open? 'flex':'none'}}>
                    <div className="AvatarForm">
                        <div>
                            <input name='headDiameter'
                            className="input ex"
                            placeholder={"headDiameter"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='headLength'
                            className="input ex"
                            placeholder={"headLength"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='neckLine'
                            className="input ex"
                            placeholder={"neckLine"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='neckLength'
                            className="input ex"
                            placeholder={"neckLength"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='shoulderLength'
                            className="input ex"
                            placeholder={"shoulderLength"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='chest'
                            className="input ex"
                            placeholder={"chest"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='waist'
                            className="input ex"
                            placeholder={"waist"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='bodyLength'
                            className="input ex"
                            placeholder={"bodyLength"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='armDiameter'
                            className="input ex"
                            placeholder={"armDiameter"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='hips'
                            className="input ex"
                            placeholder={"hips"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                        
                        <div>
                            <input name='armLength'
                            className="input ex"
                            placeholder={"armLength"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                        
                        <div>
                            <input name='handDiameter'
                            className="input ex"
                            placeholder={"handDiameter"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                        
                        <div>
                            <input name='outsideLeg'
                            className="input ex"
                            placeholder={"outsideLeg"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                        
                        <div>
                            <input name='insideLeg'
                            className="input ex"
                            placeholder={"insideLeg"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                        
                        <div>
                            <input name='legDiameter'
                            className="input ex"
                            placeholder={"legDiameter"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                        
                        <div>
                            <input name='wrist'
                            className="input ex"
                            placeholder={"wrist"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                    </div>
                    <div className="Avatar2D">
                        <svg className="AvatarSVG">
                            <path fill="white" stroke="black" strokeWidth="1.5"
                            d={`M ${20-this.state.neckLine*3/2} ${20+this.state.headLength*3-this.state.neckLength*3/2}
                            L ${20-this.state.neckLine*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2}
                            L ${20+this.state.neckLine*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2}
                            L ${20+this.state.neckLine*3/2} ${20+this.state.headLength*3-this.state.neckLength*3/2}`}
                            ></path> {/* neck */}
                            <path fill="white" stroke="black" strokeWidth="1.5"
                            d={`M 20 20
                            Q ${20+this.state.headDiameter*3/2} 20 ${20+this.state.headDiameter*3/2} ${20+this.state.headLength*3/2}
                            Q ${20+this.state.headDiameter*3/2} ${20+this.state.headLength*3} 20 ${20+this.state.headLength*3}
                            Q ${20-this.state.headDiameter*3/2} ${20+this.state.headLength*3} ${20-this.state.headDiameter*3/2} ${20+this.state.headLength*3/2} 
                            Q ${20-this.state.headDiameter*3/2} 20 20 20 Z`}
                            ></path> {/* head */}

                            <path fill="white" stroke="black" strokeWidth="1.5"
                            d={`M ${20-this.state.shoulderLength*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2}
                            L ${20+this.state.shoulderLength*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2}
                            L ${20+this.state.chest*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armDiameter*3}
                            L ${20+this.state.waist*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*2}
                            L ${20+this.state.hips*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3}

                            L ${20-this.state.hips*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3}
                            L ${20-this.state.waist*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*2}
                            L ${20-this.state.chest*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armDiameter*3}
                            L ${20-this.state.shoulderLength*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2} Z`}
                            ></path> {/* up body */}

                            <path  fill="white" stroke="black" strokeWidth="1.5"
                            d={`M ${20-this.state.shoulderLength*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2}
                            L ${20-this.state.shoulderLength*3/2-this.state.armLength*3/4} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armLength*3/2}
                            L ${20-this.state.shoulderLength*3/2-this.state.armLength*3/4} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armLength*3}
                            L ${20-this.state.shoulderLength*3/2-this.state.armLength*3/4+this.state.handDiameter*3} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armLength*3}
                            L ${20-this.state.shoulderLength*3/2-this.state.armLength*3/4+(this.state.handDiameter*1+this.state.armDiameter*1)*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armLength*3/2+this.state.armDiameter*1}
                            L ${20-this.state.chest*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armDiameter*3} 
                            L ${20-this.state.shoulderLength*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2} Z`}
                            ></path> {/* left arm */}

                            <path  fill="white" stroke="black" strokeWidth="1.5"
                            d={`M ${20+this.state.shoulderLength*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2}
                            L ${20+this.state.shoulderLength*3/2+this.state.armLength*3/4} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armLength*3/2}
                            L ${20+this.state.shoulderLength*3/2+this.state.armLength*3/4} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armLength*3}
                            L ${20+this.state.shoulderLength*3/2+this.state.armLength*3/4-this.state.handDiameter*3} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armLength*3}
                            L ${20+this.state.shoulderLength*3/2+this.state.armLength*3/4-(this.state.handDiameter*1+this.state.armDiameter*1)*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armLength*3/2+this.state.armDiameter*1}
                            L ${20+this.state.chest*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.armDiameter*3} 
                            L ${20+this.state.shoulderLength*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2} Z`}
                            ></path> {/* right arm */}

                            <path  fill="white" stroke="black" strokeWidth="1.5"
                            d={`M ${20-this.state.hips*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3}
                            L ${20-this.state.legDiameter*3} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3}
                            L ${20-(this.state.legDiameter*1+this.state.wrist*1)*3/2-this.state.wrist*3} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3+this.state.insideLeg*3/2}
                            L ${20-this.state.wrist*6} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3+this.state.insideLeg*3}
                            L ${20-this.state.wrist*3} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3+this.state.insideLeg*3}
                            L ${20-this.state.wrist*3} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3+this.state.insideLeg*3/2}
                            
                            L ${20} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3}
                            
                            L ${20+this.state.wrist*3} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3+this.state.insideLeg*3/2}
                            L ${20+this.state.wrist*3} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3+this.state.insideLeg*3}
                            L ${20+this.state.wrist*6} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3+this.state.insideLeg*3} 
                            L ${20+(this.state.legDiameter*1+this.state.wrist*1)*3/2+this.state.wrist*3} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3+this.state.insideLeg*3/2}
                            L ${20+this.state.legDiameter*3} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3+(this.state.outsideLeg*1-this.state.insideLeg*1)*3}
                            L ${20+this.state.hips*3/2} ${20+this.state.headLength*3+this.state.neckLength*3/2+this.state.bodyLength*3} Z
                            `}
                            ></path> {/* bottom */}

                            
                        </svg>
                    </div>
                </div>
                <div className="AvatarSubmit" onClick={this.submitClick}>Submit</div>
            </div>
        );
    }


}

Avatar.propTypes = {
    addBody : func.isRequired
};

export const mapStateToProps = (state) => ({
    body : state
});

export const mapDispatchToProps = {
    addBody: getBody.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);