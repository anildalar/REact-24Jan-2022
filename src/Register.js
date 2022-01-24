import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import swal from 'sweetalert';

const config = require('./config.json');


//RFC
export default function Register() {
    //1. State/Hook Variables

    const [username,setUsername] = useState('a');
    const [email,setEmail] = useState('b');
    const [password,setPassword] = useState('c');

    //2. Functions
    let submitData = ()=>{
        console.log("Clicked");
        console.log(config.api_url);
        console.log(username);
        console.log(email);
        console.log(password);

        let data = {
            username,email,password
        };
       /*  let data2 = {
            "username":username,
            "email":email,
            "password":password
        }; */
        //Promise Chain
        fetch(`${ config.prod_api_url }/api/auth/local/register`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((response)=>{
            //Make our JSON Data readable
            return response.json()
        }).then((response)=>{
            console.log(response);
            if(response.error){
                swal("OOpps!", response.error.message, "error");
            }
            if(response.user){
                swal("Good Job!", JSON.stringify(response.user), "success");
            }
        }).catch((e)=>{ //e = error
            console.log(e)
        });
    }

    //3. Return Statement JSX

    return (
        <Container>
            <Row>
                <Col xs={{ offset:3,span:6 }}>
                    <h1>Registeration System</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={username} onChange={(e)=>{ setUsername(e.target.value)  }} placeholder="Enter username" />
                            <Form.Text className="text-muted">
                            
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={email} onChange={(e)=>{ setEmail(e.target.value)  }} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={(e)=>{ setPassword(e.target.value)  }} placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={ ()=>{ submitData() } }>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    );
}
