import React , {Component} from 'react';
import Navbar from './Navbar'
import Button from './Button'

import { string, func, object} from 'prop-types';
import { getBody } from './redux/actions';
import { connect } from 'react-redux';


class Me extends Component{
    constructor(){
        super();

        this.state={
            selected: '',
            avatarOption: false,

            chest: '',
            waist: '',
            length: '',
            createBody: false,
            xchest: '',
            xwaist: '',
            xlength: '',

        }


        this.click = this.click.bind(this);
        this.change = this.change.bind(this);
        this.blur = this.blur.bind(this);
    }


    click(e){
        if(this.state.avatarOption){
            this.setState(()=>({avatarOption:false}))
        }else{
            this.setState(()=>({avatarOption:true}))
        }
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
        }
    }

    blur(e){
        const chest = this.state.chest;
        const waist = this.state.waist;
        const length = this.state.length;

        

        if(chest===''||waist===''||length===''){
            this.setState(()=>({createBody:false}));
        }else{
            this.setState(()=>({createBody:true}));
        }

        const {fetchBody} = this.props

        if(this.state.chest){
            fetchBody(this.state.chest);
        }else{
            fetchBody(0);
        }


        this.setState(()=>({xchest: chest, xwaist: waist,
            xlength: length}));
    }

    render(){
        const {avatarOption}= this.state; 
        const {createBody} = this.state;
        return(
            <div className="Me">
                <Navbar></Navbar>
                <div className="AvatarButton">
                    <h1 className="AvatarHeader" onClick={this.click}> Create Avatar</h1>
                    <div className='AvatarOption' style={{display: avatarOption? "block": 'none'}}>
                        <div className="AvatarForm">
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
                        </div>
                        <svg className="AvatarSVG">
                            <path style={{display:createBody? 'flex':'none'}} d={`M 10 10
                            L ${10+this.state.xchest*3} 10
                            L ${10+(this.state.xchest-this.state.xwaist)*3/2 + this.state.xwaist*3} ${10+this.state.xlength*3}
                            L ${10+(this.state.xchest-this.state.xwaist)*3/2} ${10+this.state.xlength*3} Z`}
                            fill="none" stroke="black" strokeWidth="1.5">

                            </path>

                        </svg>
                    </div>
                </div>
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

Me.propTypes = {
    body: string,
    fetchBody: func.isRequired,
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
    fetchBody: getBody.request,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Me);