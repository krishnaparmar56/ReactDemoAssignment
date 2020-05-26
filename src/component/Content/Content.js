import React, {Component} from 'react'

// import { Route, Router } from 'react-router-dom';
// import { Faq } from '../pages/Faq'
// import { Login } from '../pages/Login'
// import { SignUp } from '../pages/SignUp'
import '../../assets/styles/Style.css'
export class Content extends Component{
    render(){
        return(
            <div className="my-content">
                {/* <h1>Content Page</h1> */}
                {/* <Router>
                        <switch>
                            <Route path='/Faqpage' component={Faq} />
                            <Route path='/Loginpage' component={Login} />
                            <Route path='/SignUppage' component={SignUp} /> */}
                            {/* {this.Navbar.children}
                        </switch>
                </Router> */}
            </div>
        );
    }
}