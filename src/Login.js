import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import swal from 'sweetalert';

const config = require('./config.json');


export default function Login() {

    //1. State/Hook Variables
    
    const [identifier,setIdentifier] = useState('');
    const [password,setPassword] = useState('');


    //2. Functions
    let login = ()=>{
        console.log("okokokokoko")
    }

    //3. Return Statement JSX

    return (
        <Container>
            <Row>
                <Col xs={{ offset:3,span:6 }}>
                    <h1>Login System</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="identifier" value={ identifier } onChange={(e)=>{ setIdentifier(e.target.value) }} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={ password } onChange={(e)=>{ setPassword(e.target.value) }} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={()=>{ login() }}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    );
}
