import React, {Component} from 'react'
import '../../assets/styles/Style.css'
import { Navbar } from '../Navbar/Navbar';

export class MySidebar extends Component{
    render(){
        return(
            <div className="my-sidebar">
                <Navbar/>  
                {/* {this.props.children}              */}
            </div>
        );
    }
}