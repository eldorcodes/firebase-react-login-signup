import React from 'react';
import { LogUserIn } from '../firebase/myDatabase';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getEmail(text){
        this.setState({ email:text })
    }
    getPassword(text){
        this.setState({ password:text })
    }
    handleSubmit(e){
        e.preventDefault()
        LogUserIn(this.state.email,this.state.password)
        this.setState({ email:'',password:'' })
    }
    render(){
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='my-form'>
                    <p>Email</p>
                    <input value={this.state.email}
                    onChange={(e) => this.getEmail(e.target.value)}
                    className='input' type="text" placeholder='Enter email' />
                    <p>Password</p>
                    <input value={this.state.password}
                    onChange={(e) => this.getPassword(e.target.value)}
                    className='input' type="password" placeholder='Enter password' />
                    <button className='btn'>Log In</button>
                    <a className='link' href="/password">Forget password</a>
                    <a className='link' href="/signup">Need an account?</a>
                </form>
            </div>
        )
    }
}