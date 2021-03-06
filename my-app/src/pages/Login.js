import React, {Component} from 'react';
import './Login.css';
import LogoTwiter from '../twitter.svg'

export default class Login extends Component{
    state = {
        username:'',
    }; 
    handleSubmit = e => {
        e.preventDefault();

        const {username} = this.state;
        if(!username.length) return;

        localStorage.setItem('@GoTwitter:username',username);

        this.props.history.push('/timeline');
    };
    handleInputChange = (e) => {
    this.setState({ username: e.target.value});
    };
   
    render(){
        return (
            <div className="login-wrapper">
                <img src={LogoTwiter} alt="Gotwitter"/>
                <form onSubmit= {this.handleSubmit}>
                    <input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    placeholder= "Nome de Usuario"
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}