import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import history from '../history';
import "./css/signup.css";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        history.push("/Login");
    }
    return (
        <div class="container-fluid">
            <div class="page-header">
                <h1 class="appname">SJSU Library</h1>
            </div>
            <div class="login-form">
                <h3 class="login-header">SignUp</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Enter fullname"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className="login-button">
                        <Button block size="lg" variant="outline-info" type="submit" disabled={!validateForm()}>
                            SignUp
                        </Button>
                    </div>
                    <div>
                        <span>Already Registered ?</span>
                        <span>
                        <Button variant="link" onClick={() => history.push('/Login')}>
                            Login
                        </Button>
                        </span>
                    </div>
                </Form>
            </div>
        </div>
    );
}