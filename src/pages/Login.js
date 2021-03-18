import React, { Component } from 'react'
import {reactLocalStorage} from 'reactjs-localstorage';
export default class Login extends Component {
    render() {
      //  reactLocalStorage.set('login',true);
        return (
            <div className='container '>
                <div className='row justify-content-center'>
                    <div className='col-6 '>
                    <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" onClick={()=>{
                            reactLocalStorage.set('login',true);
                            window.location='/home'
                        }} className="btn btn-primary btn-block">Login</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
               
                </div>
                
       
            </div>
        )
    }
}
