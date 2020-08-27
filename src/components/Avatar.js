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
            const name = this.state.changing;
            if(name==='headDiameter'){
                setTimeout( function(){that.setState(()=>({xheadDiameter: value, round: round-1}))},15)
            }else if(name==='headLength'){
                setTimeout( function(){that.setState(()=>({xheadLength: value, round: round-1}))},15)
            }else if(name==='neckLine'){
                setTimeout( function(){that.setState(()=>({xneckLine: value, round: round-1}))},15)
            }else if(name==='neckLength'){
                setTimeout( function(){that.setState(()=>({xneckLength: value, round: round-1}))},15)
            }else if(name==='shoulderLength'){
                setTimeout( function(){that.setState(()=>({xshoulderLength: value, round: round-1}))},15)
            }else if(name==='chest'){
                setTimeout( function(){that.setState(()=>({xchest: value, round: round-1}))},15)
            }else if(name==='waist'){
                setTimeout( function(){that.setState(()=>({xwaist: value, round: round-1}))},15)
            }else if(name==='bodyLength'){
                setTimeout( function(){that.setState(()=>({xbodyLength: value, round: round-1}))},15)
            }else if(name==='armDiameter'){
                setTimeout( function(){that.setState(()=>({xarmDiameter: value, round: round-1}))},15)
            }else if(name==='hips'){
                setTimeout( function(){that.setState(()=>({xhips: value, round: round-1}))},15)
            }else if(name==='armLength'){
                setTimeout( function(){that.setState(()=>({xarmLength: value, round: round-1}))},15)
            }else if(name==='handDiameter'){
                setTimeout( function(){that.setState(()=>({xhandDiameter: value, round: round-1}))},15)
            }else if(name==='outsideLeg'){
                setTimeout( function(){that.setState(()=>({xoutsideLeg: value, round: round-1}))},15)
            }else if(name==='insideLeg'){
                setTimeout( function(){that.setState(()=>({xinsideLeg: value, round: round-1}))},15)
            }else if(name==='legDiameter'){
                setTimeout( function(){that.setState(()=>({xlegDiameter: value, round: round-1}))},15)
            }else if(name==='wrist'){
                setTimeout( function(){that.setState(()=>({xwrist: value, round: round-1}))},15)
            }
        }else if(round==0){
            this.setState(()=>({xround: "stop", changing: ""}));
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.round!=this.state.round){
            console.log("updated and round changed: ", this.state.round);
            const name = this.state.changing;
            
            if(name==='headDiameter'){
                this.changeAnimate(this.state.round, this.state.headDiameter, this.state.xheadDiameter);
            }else if(name==='headLength'){
                this.changeAnimate(this.state.round, this.state.headLength, this.state.xheadLength);
            }else if(name==='neckLine'){
                this.changeAnimate(this.state.round, this.state.neckLine, this.state.xneckLine);
            }else if(name==='neckLength'){
                this.changeAnimate(this.state.round, this.state.neckLength, this.state.xneckLength);
            }else if(name==='shoulderLength'){
                this.changeAnimate(this.state.round, this.state.shoulderLength, this.state.xshoulderLength);
            }else if(name==='chest'){
                this.changeAnimate(this.state.round, this.state.chest, this.state.xchest);
            }else if(name==='waist'){
                this.changeAnimate(this.state.round, this.state.waist, this.state.xwaist);
            }else if(name==='bodyLength'){
                this.changeAnimate(this.state.round, this.state.bodyLength, this.state.xbodyLength);
            }else if(name==='armDiameter'){
                this.changeAnimate(this.state.round, this.state.armDiameter, this.state.xarmDiameter);
            }else if(name==='hips'){
                this.changeAnimate(this.state.round, this.state.hips, this.state.xhips);
            }else if(name==='armLength'){
                this.changeAnimate(this.state.round, this.state.armLength, this.state.xarmLength);
            }else if(name==='handDiameter'){
                this.changeAnimate(this.state.round, this.state.handDiameter, this.state.xhandDiameter);
            }else if(name==='outsideLeg'){
                this.changeAnimate(this.state.round, this.state.outsideLeg, this.state.xoutsideLeg);
            }else if(name==='insideLeg'){
                this.changeAnimate(this.state.round, this.state.insideLeg, this.state.xinsideLeg);
            }else if(name==='legDiameter'){
                this.changeAnimate(this.state.round, this.state.legDiameter, this.state.xlegDiameter);
            }else if(name==='wrist'){
                this.changeAnimate(this.state.round, this.state.wrist, this.state.xwrist);
            }
        }
    }

    change(e){
        let value = e.target.value;
        let name = e.target.name;
        if(value===0){
            return;
        }
        if(name==='headDiameter'){
            this.setState(()=>({headDiameter: value, round:21,xround: "stop", changing: "headDiameter"}))
        }else if(name==='headLength'){
            this.setState(()=>({headLength:value, round:21,xround: "stop", changing: "headLength"}))
        }else if(name==='neckLine'){
            this.setState(()=>({neckLine:value, round:21,xround: "stop", changing: "neckLine"}))
        }else if(name==='neckLength'){
            this.setState(()=>({neckLength:value, round:21,xround: "stop", changing: "neckLength"}))
        }else if(name==='shoulderLength'){
            this.setState(()=>({shoulderLength:value, round:21,xround: "stop", changing: "shoulderLength"}))
        }else if(name==='chest'){
            this.setState(()=>({chest:value, round:21,xround: "stop", changing: "chest"}))
        }else if(name==='waist'){
            this.setState(()=>({waist:value, round:21,xround: "stop", changing: "waist"}))
        }else if(name==='bodyLength'){
            this.setState(()=>({bodyLength:value, round:21,xround: "stop", changing: "bodyLength"}))
        }else if(name==='armDiameter'){
            this.setState(()=>({armDiameter:value, round:21,xround: "stop", changing: "armDiameter"}))
        }else if(name==='hips'){
            this.setState(()=>({hips:value, round:21,xround: "stop", changing: "hips"}))
        }else if(name==='armLength'){
            this.setState(()=>({armLength:value, round:21,xround: "stop", changing: "armLength"}))
        }else if(name==='handDiameter'){
            this.setState(()=>({handDiameter:value, round:21,xround: "stop", changing: "handDiameter"}))
        }else if(name==='outsideLeg'){
            this.setState(()=>({outsideLeg:value, round:21,xround: "stop", changing: "outsideLeg"}))
        }else if(name==='insideLeg'){
            this.setState(()=>({insideLeg:value, round:21,xround: "stop", changing: "insideLeg"}))
        }else if(name==='legDiameter'){
            this.setState(()=>({legDiameter:value, round:21,xround: "stop", changing: "legDiameter"}))
        }else if(name==='wrist'){
            this.setState(()=>({wrist:value, round:21,xround: "stop", changing: "wrist"}))
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
                            L ${20+chest*3/2} ${20+headLength*3+neckLength*3/2+armDiameter*3}
                            L ${20+waist*3/2} ${20+headLength*3+neckLength*3/2+bodyLength*2}
                            L ${20+hips*3/2} ${20+headLength*3+neckLength*3/2+bodyLength*3}

                            L ${20-hips*3/2} ${20+headLength*3+neckLength*3/2+bodyLength*3}
                            L ${20-waist*3/2} ${20+headLength*3+neckLength*3/2+bodyLength*2}
                            L ${20-chest*3/2} ${20+headLength*3+neckLength*3/2+armDiameter*3}
                            L ${20-shoulderLength*3/2} ${20+headLength*3+neckLength*3/2} Z`}
                            ></path> {/* up body */}

                            <path  fill="white" stroke="black" strokeWidth="1.5"
                            d={`M ${20-shoulderLength*3/2} ${20+headLength*3+neckLength*3/2}
                            L ${20-shoulderLength*3/2-armLength*3/4} ${20+headLength*3+neckLength*3/2+armLength*3/2}
                            L ${20-shoulderLength*3/2-armLength*3/4} ${20+headLength*3+neckLength*3/2+armLength*3}
                            L ${20-shoulderLength*3/2-armLength*3/4+handDiameter*3} ${20+headLength*3+neckLength*3/2+armLength*3}
                            L ${20-shoulderLength*3/2-armLength*3/4+(handDiameter*1+armDiameter*1)*3/2} ${20+headLength*3+neckLength*3/2+armLength*3/2+armDiameter*1}
                            L ${20-chest*3/2} ${20+headLength*3+neckLength*3/2+armDiameter*3} 
                            L ${20-shoulderLength*3/2} ${20+headLength*3+neckLength*3/2} Z`}
                            ></path> {/* left arm */}

                            <path  fill="white" stroke="black" strokeWidth="1.5"
                            d={`M ${20+shoulderLength*3/2} ${20+headLength*3+neckLength*3/2}
                            L ${20+shoulderLength*3/2+armLength*3/4} ${20+headLength*3+neckLength*3/2+armLength*3/2}
                            L ${20+shoulderLength*3/2+armLength*3/4} ${20+headLength*3+neckLength*3/2+armLength*3}
                            L ${20+shoulderLength*3/2+armLength*3/4-handDiameter*3} ${20+headLength*3+neckLength*3/2+armLength*3}
                            L ${20+shoulderLength*3/2+armLength*3/4-(handDiameter*1+armDiameter*1)*3/2} ${20+headLength*3+neckLength*3/2+armLength*3/2+armDiameter*1}
                            L ${20+chest*3/2} ${20+headLength*3+neckLength*3/2+armDiameter*3} 
                            L ${20+shoulderLength*3/2} ${20+headLength*3+neckLength*3/2} Z`}
                            ></path> {/* right arm */}

                            <path  fill="white" stroke="black" strokeWidth="1.5"
                            d={`M ${20-hips*3/2} ${20+headLength*3+neckLength*3/2+bodyLength*3}
                            L ${20-legDiameter*3} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3}
                            L ${20-(legDiameter*1+wrist*1)*3/2-wrist*3} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3+insideLeg*3/2}
                            L ${20-wrist*6} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3+insideLeg*3}
                            L ${20-wrist*3} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3+insideLeg*3}
                            L ${20-wrist*3} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3+insideLeg*3/2}
                            
                            L ${20} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3}
                            
                            L ${20+wrist*3} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3+insideLeg*3/2}
                            L ${20+wrist*3} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3+insideLeg*3}
                            L ${20+wrist*6} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3+insideLeg*3} 
                            L ${20+(legDiameter*1+wrist*1)*3/2+wrist*3} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3+insideLeg*3/2}
                            L ${20+legDiameter*3} ${20+headLength*3+neckLength*3/2+bodyLength*3+(outsideLeg*1-insideLeg*1)*3}
                            L ${20+hips*3/2} ${20+headLength*3+neckLength*3/2+bodyLength*3} Z
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