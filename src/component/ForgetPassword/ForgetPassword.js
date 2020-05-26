import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import {
    Button,
    Input,
    FormControl,
    InputLabel
  } from '@material-ui/core';

export class ForgetPassword extends Component {
    render() {
        return (
            <div className="div-login">
            <h2>Forget Password</h2>
            <br></br>
                <FormControl>
                    Enter Email : <Input id="email" aria-describedby="my-helper-text" fullWidth />
                    <br></br>
                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                </FormControl>
            </div>
        );
    }
}