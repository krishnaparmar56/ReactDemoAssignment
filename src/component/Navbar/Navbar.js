import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom';
import '../../assets/styles/Style.css'

export class Navbar extends Component {
    render() {
        return (
            <div>
                {/* <Router> */}
                    <navbar className="ds">
                        <ul>
                            <li> <Link to={"/Loginpage"}>Login</Link></li>
                            <li> <Link to={"/SignUppage"}>SignUp</Link></li>
                            <li> <Link to={"/ForgetPassword"}>Forget Password</Link></li>
                        </ul>
                    </navbar>
                {/* </Router> */}
            </div>
        );
    }
}