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
            wrist: '7',

            xround : "stop",
            round : 0,
            changing : '',

            xheadDiameter: '16',
            xheadLength: '24',
            xneckLine: '12',
            xneckLength: '13',
            xshoulderLength: '42',
            xchest: '32',
            xwaist: '30',
            xbodyLength: '48',
            xarmDiameter: '10',
            xhips: '36',
            xarmLength: '54',
            xhandDiameter: '6',
            xoutsideLeg: '90',
            xinsideLeg: '80',
            xlegDiameter: '18',
            xwrist: '7',
        }

        this.change = this.change.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.submitClick = this.submitClick.bind(this);
    }

    changeAnimate(round, origin, master){
        var value = 0;
        var that = this;
        if(this.state.xround === "continue"){
            if(round==0){
                value = origin*1
            }else if(round==1){
                value = master*1 + (origin*1 - master*1) /2
            }else if(round==2){
                value = master*1 + (origin*1 - master*1) /3
            }else if(round==3){
                value = master*1 + (origin*1 - master*1) /4
            }else if(round==4){
                value = master*1 + (origin*1 - master*1) /5
            }else if(round==5){
                value = master*1 + (origin*1 - master*1) /6
            }else if(round==6){
                value = master*1 + (origin*1 - master*1) /7
            }else if(round==7){
                value = master*1 + (origin*1 - master*1) /8
            }else if(round==8){
                value = master*1 + (origin*1 - master*1) /9
            }else if(round==9){
                value = master*1 + (origin*1 - master*1) /10
            }else if(round==10){
                value = master*1 + (origin*1 - master*1) /11
            }else if(round==11){
                value = master*1 + (origin*1 - master*1) /12
            }else if(round==12){
                value = master*1 + (origin*1 - master*1) /13
            }else if(round==13){
                value = master*1 + (origin*1 - master*1) /14
            }else if(round==14){
                value = master*1 + (origin*1 - master*1) /15
            }else if(round==15){
                value = master*1 + (origin*1 - master*1) /16
            }else if(round==16){
                value = master*1 + (origin*1 - master*1) /17
            }else if(round==17){
                value = master*1 + (origin*1 - master*1) /18
            }else if(round==18){
                value = master*1 + (origin*1 - master*1) /19
            }else if(round==19){
                value = master*1 + (origin*1 - master*1) /20
            }else if(round==20){
                value = master*1 + (origin*1 - master*1) /21
            }else if(round==21){
                value = master*1 + (origin*1 - master*1) /22
            }else if(round==22){
                value = master*1 + (origin*1 - master*1) /23
            }else if(round==23){
                value = master*1 + (origin*1 - master*1) /24
            }
        }else{
            setTimeout(function(){that.setState(()=>({round:23, xround:"continue"}))},1000);
        }
        console.log("value: " , value)
        if(round>=0&&round<24&&this.state.xround==="continue"){
            setTimeout( function(){that.setState(()=>({xheadDiameter: value, round: round-1}))},15)
        }else if(round==0){
            this.setState(()=>({xround: "stop"}));
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.round!=this.state.round){
            console.log("updated and round changed: ", this.state.round);
            this.changeAnimate(this.state.round, this.state.headDiameter, this.state.xheadDiameter);
        }
    }

    change(e){
        let value = e.target.value;
        let name = e.target.name;
        if(value===0){
            return;
        }
        if(name==='headDiameter'){
            this.setState(()=>({headDiameter: value, round:21,xround: "stop"}))
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
        console.log(this.state);
        this.props.addBody(obj)
    }


    render(){
        var headDiameter = this.state.xheadDiameter;
        var headLength = this.state.xheadLength;
        var neckLine = this.state.xneckLine;
        var neckLength = this.state.xneckLength;
        var shoulderLength = this.state.xshoulderLength;
        var chest = this.state.xchest;
        var waist = this.state.xwaist;
        var bodyLength = this.state.xbodyLength;
        var armDiameter = this.state.xarmDiameter;
        var hips = this.state.xhips;
        var armLength = this.state.xarmLength;
        var handDiameter = this.state.xhandDiameter;
        var outsideLeg = this.state.outsideLeg;
        var insideLeg = this.state.xinsideLeg;
        var legDiameter = this.state.xlegDiameter;
        var wrist = this.state.xwrist;
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
                            d={`M ${20-neckLine*3/2} ${20+headLength*3-neckLength*3/2}
                            L ${20-neckLine*3/2} ${20+headLength*3+neckLength*3/2}
                            L ${20+neckLine*3/2} ${20+headLength*3+neckLength*3/2}
                            L ${20+neckLine*3/2} ${20+headLength*3-neckLength*3/2}`}
                            ></path> {/* neck */}
                            <path fill="white" stroke="black" strokeWidth="1.5"
                            d={`M 20 20
                            Q ${20+headDiameter*3/2} 20 ${20+headDiameter*3/2} ${20+headLength*3/2}
                            Q ${20+headDiameter*3/2} ${20+headLength*3} 20 ${20+headLength*3}
                            Q ${20-headDiameter*3/2} ${20+headLength*3} ${20-headDiameter*3/2} ${20+headLength*3/2} 
                            Q ${20-headDiameter*3/2} 20 20 20 Z`}
                            ></path> {/* head */}

                            <path fill="white" stroke="black" strokeWidth="1.5"
                            d={`M ${20-shoulderLength*3/2} ${20+headLength*3+neckLength*3/2}
                            L ${20+shoulderLength*3/2} ${20+headLength*3+neckLength*3/2}
                            L ${20+chest*3/2} ${20+headLength*3+neckLength*3/2+this.state.armDiameter*3}
                            L ${20+waist*3/2} ${20+headLength*3+neckLength*3/2+this.state.bodyLength*2}
                            L ${20+hips*3/2} ${20+headLength*3+neckLength*3/2+this.state.bodyLength*3}

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