import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import {
    Button,
    Input,
    FormControl,
    InputLabel
  } from '@material-ui/core';

export class Login extends Component {
    render() {
        return (
            <div className="div-login">
            <h2>Login Page</h2>
            <br></br>
                <FormControl>
                    Email : <Input id="email" aria-describedby="my-helper-text" fullWidth />
                    <br></br>
                    Password :  <Input id="password" aria-describedby="my-helper-text"/>
                    <br></br>
                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                </FormControl>
            </div>
        );
    }
}