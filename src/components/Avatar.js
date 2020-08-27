import React, {Component} from 'react'
import { connect } from 'react-redux';
import { getBody } from './redux/actions';

import {func} from 'prop-types'

class Avatar extends Component{
    constructor(){
        super();

        this.state = {
            open : true,
            shoulderLength: '42',
            chest: '32',
            waist: '30',
            length: '48',
            hips: '36',
            armLength: '54',
            leg: '80',

            xround : "stop",
            round : 0,
            changing : '',

            xshoulderLength: '42',
            xchest: '32',
            xwaist: '30',
            xlength: '48',
            xhips: '36',
            xarmLength: '54',
            xleg: '80',

            gender: 'man',
            type: "0"


        }

        this.change = this.change.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.submitClick = this.submitClick.bind(this);
        this.genderClick = this.genderClick.bind(this);
        this.typeChange = this.typeChange.bind(this);
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
            if(name==='shoulderLength'){
                setTimeout( function(){that.setState(()=>({xshoulderLength: value, round: round-1}))},15)
            }else if(name==='chest'){
                setTimeout( function(){that.setState(()=>({xchest: value, round: round-1}))},15)
            }else if(name==='waist'){
                setTimeout( function(){that.setState(()=>({xwaist: value, round: round-1}))},15)
            }else if(name==='length'){
                setTimeout( function(){that.setState(()=>({xlength: value, round: round-1}))},15)
            }else if(name==='hips'){
                setTimeout( function(){that.setState(()=>({xhips: value, round: round-1}))},15)
            }else if(name==='armLength'){
                setTimeout( function(){that.setState(()=>({xarmLength: value, round: round-1}))},15)
            }else if(name==='leg'){
                setTimeout( function(){that.setState(()=>({xleg: value, round: round-1}))},15)
            }
        }else if(round==0){
            this.setState(()=>({xround: "stop", changing: ""}));
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.round!=this.state.round){
            console.log("updated and round changed: ", this.state.round);
            const name = this.state.changing;
            
            if(name==='shoulderLength'){
                this.changeAnimate(this.state.round, this.state.shoulderLength, this.state.xshoulderLength);
            }else if(name==='chest'){
                this.changeAnimate(this.state.round, this.state.chest, this.state.xchest);
            }else if(name==='waist'){
                this.changeAnimate(this.state.round, this.state.waist, this.state.xwaist);
            }else if(name==='length'){
                this.changeAnimate(this.state.round, this.state.length, this.state.xlength);
            }else if(name==='hips'){
                this.changeAnimate(this.state.round, this.state.hips, this.state.xhips);
            }else if(name==='armLength'){
                this.changeAnimate(this.state.round, this.state.armLength, this.state.xarmLength);
            }else if(name==='leg'){
                this.changeAnimate(this.state.round, this.state.leg, this.state.xleg);
            }
        }
    }

    genderClick(e){
        let value = e.target.value;
        console.log("Gender Click")
        if(value==="man"){
            this.setState(()=>({gender: "man"}))
        }else{
            this.setState(()=>({gender: "woman"}))
        }
    }

    typeChange(e){
        let type = e.target.value;
        console.log("type clicked: " + type)
        this.setState(()=>({type:type}));
    }

    change(e){
        let value = e.target.value;
        let name = e.target.name;
        if(value===0){
            return;
        }
        if(name==='shoulderLength'){
            this.setState(()=>({shoulderLength:value, round:21,xround: "stop", changing: "shoulderLength"}))
        }else if(name==='chest'){
            this.setState(()=>({chest:value, round:21,xround: "stop", changing: "chest"}))
        }else if(name==='waist'){
            this.setState(()=>({waist:value, round:21,xround: "stop", changing: "waist"}))
        }else if(name==='length'){
            this.setState(()=>({length:value, round:21,xround: "stop", changing: "length"}))
        }else if(name==='hips'){
            this.setState(()=>({hips:value, round:21,xround: "stop", changing: "hips"}))
        }else if(name==='armLength'){
            this.setState(()=>({armLength:value, round:21,xround: "stop", changing: "armLength"}))
        }else if(name==='leg'){
            this.setState(()=>({leg:value, round:21,xround: "stop", changing: "leg"}))
        }
    }

    buttonClick(e){
        const {open} = this.state;
        if(open){
            this.setState(()=>({open: false}))
        }else{
            this.setState(()=>({open: true}))
        }
        console.log(this.state);
    }

    submitClick(e){
        const obj = {
            shoulderLength: this.state.shoulderLength,
            chest: this.state.chest,
            waist: this.state.waist,
            length: this.state.length,
            hips: this.state.hips,
            armLength: this.state.armLength,
            leg: this.state.leg,
        }
        console.log(this.state);
        this.props.addBody(obj)
    }


    render(){
        var shoulderLength = this.state.xshoulderLength;
        var chest = this.state.xchest;
        var waist = this.state.xwaist;
        var length = this.state.xlength;
        var hips = this.state.xhips;
        var armLength = this.state.xarmLength;
        var leg = this.state.xleg;
        return(
            <div className="AvatarPage">
                <div className="AvatarButton" onClick={this.buttonClick}>Avatar Button</div>
                <div className="AvatarVisual" style={{display: this.state.open? 'flex':'none'}}>
                    <div className="AvatarForm">

                        <button value="man" onClick={this.genderClick}>
                            Man
                        </button>
                        <button value="woman" onClick={this.genderClick}>
                            Woman
                        </button>

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
                            <input name='length'
                            className="input ex"
                            placeholder={"length"}
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
                            <input name='leg'
                            className="input ex"
                            placeholder={"leg"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                        
                          
                    </div>


                    <div className="AvatarMan" style={{display: this.state.gender==="man"? 'flex':'none'}}>
                        <button value={"0"} onClick={this.typeChange}>
                            type 0
                        </button>
                        <button value={"1"} onClick={this.typeChange}>
                            type 1
                        </button>
                        <button value={"2"} onClick={this.typeChange}>
                            type 2
                        </button>
                        <button value={"3"} onClick={this.typeChange}>
                            type 3
                        </button>
                        <button value={"4"} onClick={this.typeChange}>
                            type 4
                        </button>

                        <div className="AvatarManType" style={{display: this.state.type==="0"? 'flex':'none'}}>
                            type 0 man
                        </div>
                        <div className="AvatarManType" style={{display: this.state.type==="1"? 'flex':'none'}}>
                            type 1 man
                        </div>
                        <div className="AvatarManType" style={{display: this.state.type==="2"? 'flex':'none'}}>
                            type 2 man
                        </div>
                        <div className="AvatarManType" style={{display: this.state.type==="3"? 'flex':'none'}}>
                            type 3 man
                        </div>
                        <div className="AvatarManType" style={{display: this.state.type==="4"? 'flex':'none'}}>
                            type 4 man
                        </div>
                    </div>

                    <div className="AvatarWoman" style={{display: this.state.gender==="woman"? 'flex':'none'}}>
                        <button value={"0"} onClick={this.typeChange}>
                            type 0
                        </button>
                        <button value={"1"} onClick={this.typeChange}>
                            type 1
                        </button>
                        <button value={"2"} onClick={this.typeChange}>
                            type 2
                        </button>
                        <button value={"3"} onClick={this.typeChange}>
                            type 3
                        </button>
                        <button value={"4"} onClick={this.typeChange}>
                            type 4
                        </button>
                        <div className="AvatarWomanType" style={{display: this.state.type==="0"? 'flex':'none'}}>
                            type 0 woman
                        </div>
                        <div className="AvatarWomanType" style={{display: this.state.type==="1"? 'flex':'none'}}>
                            type 1 woman
                        </div>
                        <div className="AvatarWomanType" style={{display: this.state.type==="2"? 'flex':'none'}}>
                            type 2 woman
                        </div>
                        <div className="AvatarWomanType" style={{display: this.state.type==="3"? 'flex':'none'}}>
                            type 3 woman
                        </div>
                        <div className="AvatarWomanType" style={{display: this.state.type==="4"? 'flex':'none'}}>
                            type 4 woman
                        </div>
                    </div>


                    <div className="Avatar2D">
                        
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