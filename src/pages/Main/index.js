import React, { Component } from 'react'
import { MyHeader } from '../Header/MyHeader';
import { MyFooter } from '../Footer/MyFooter';
import { MySidebar } from '../../component/Sidebar/MySidebar';
// import { Content } from '../../component/pages/Content';
// import { Navbar } from '../component/Navbar/Navbar'
import { Route, Router } from 'react-router-dom';
import { Login } from '../../component/Login/Login'
import { SignUp } from '../../component/SignUp/SignUp'
import { ForgetPassword } from '../../component/ForgetPassword/ForgetPassword'
import '../../assets/styles/Style.css'


export class Main extends Component {
    render() {
        return (
            <div>
                <MyHeader />
                <MySidebar/>
                {/* <Content> */}
                <div className="df">
                    <Route path='/Loginpage' component={Login} />
                    <Route path='/SignUppage' component={SignUp} />
                    <Route path='/ForgetPassword' component={ForgetPassword} /> 
                </div>
                {/* </Content> */}
                {/* <MyFooter /> */}
            </div>
        );
    }
}