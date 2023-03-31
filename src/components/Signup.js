import React, { Component } from "react";
import { RegisterUser } from '../firebase/myDatabase';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:''
        }
        this.getUsername = this.getUsername.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getUsername(text){
        this.setState({ username:text })
    }
    getEmail(text){
        this.setState({ email:text })
    }
    getPassword(text){
        this.setState({ password:text })
    }
    handleSubmit(e){
        e.preventDefault()
       RegisterUser(this.state.username,this.state.email,this.state.password)
       this.setState({ username:'',email:'',password:'' })
    }
  render() {
    return (
        <div className='container'>
        <form onSubmit={this.handleSubmit} className='my-form'>
            <p>Username</p>
            <input value={this.state.username}
            onChange={(e) => this.getUsername(e.target.value)}
            className='input' type="text" placeholder='Enter username' />
            <p>Email</p>
            <input value={this.state.email}
            onChange={(e) => this.getEmail(e.target.value)}
            className='input' type="text" placeholder='Enter email' />
            <p>Password</p>
            <input value={this.state.password}
            onChange={(e) => this.getPassword(e.target.value)}
            className='input' type="password" placeholder='Enter password' />
            <button type="submit" className='btn'>Sign Up</button>
            <a className='link' href="/">Need to login?</a>
        </form>
    </div>
    )
  }
}
