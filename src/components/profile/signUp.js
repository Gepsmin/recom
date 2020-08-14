import React, {Component} from "react";
import Navbar from '../Navbar';
import { addUserAction, deleteUserAction } from "../redux/actions";
import { connect } from 'react-redux';

class signUp extends Component{
    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            password: ''
        }

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e){
        let value = e.target.value;
        let name = e.target.name;
        if(name==='name'){
            this.setState(()=>({name: value}));
        }else if(name==='email'){
            this.setState(()=>({email: value}));
        }else if(name==='password'){
            this.setState(()=>({password: value}));
        }
    }

    submit(e){
        var email = this.state.email;
        var name = this.state.name;
        var password = this.state.password;
        const user = {
            email: email,
            name: name,
            password: password
        }
        const data = {
            email: email
        }
        this.props.deleteUser(user);
        console.log(data)
    }

    render(){
        return(
            <div className="SignUp">
                <Navbar></Navbar>
                <div className="SignUpPage">
                <div>Signup now</div>
                <div className="Name">
                    <input name="name"
                        className="input ex"
                        placeholder="name"
                        onChange={this.change}>
                    </input>
                </div>
                <div className="Hotmail">
                    <input name="email"
                        className="input ex"
                        placeholder="email"
                        onChange={this.change}>
                    </input>
                </div>
                <div className="Password">
                    <input name="password"
                        className="input ex"
                        placeholder="password"
                        onChange={this.change}>
                    </input>
                </div>
                <div className="SignUpButton"
                    onClick={this.submit}>
                    Click
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({

});

const mapDispatchToProps = dispatch => ({
    addUser : user => addUserAction(dispatch, user),
    deleteUser : email => deleteUserAction(dispatch, email)
});

export default connect(mapStateToProps, mapDispatchToProps)(signUp);