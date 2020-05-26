import React, {Component} from 'react'
// import {Form} from 'react-bootstrap'
// import {Button} from 'react-bootstrap'
import {
    Button,
    Input,
    FormControl,
    InputLabel
  } from '@material-ui/core';

export class SignUp extends Component{
    render(){
        return(
            <div className="div-signup">
            <h2>Sign Up Page</h2>
            <br></br>
            <FormControl>
                    First Name : <Input id="firstName" aria-describedby="my-helper-text" />
                    <br></br>
                    Last Name : <Input id="lastName" aria-describedby="my-helper-text" />
                    <br></br>
                    Password : <Input id="email" aria-describedby="my-helper-text" />
                    <br></br>
                    Email : <Input id="password" aria-describedby="my-helper-text" />
                    <br></br>
                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                </FormControl>
            </div>
        );
    }
}