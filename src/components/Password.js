import React, { Component } from "react";

export default class Password extends Component {
  render() {
    return (
        <div className='container'>
        <form className='my-form'>
            <p>Email</p>
            <input className='input' type="text" placeholder='Enter email' />
            <button className='btn'>Reset password</button>
            <a className='link' href="/">Need to login?</a>
        </form>
    </div>
    )
  }
}
