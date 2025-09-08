import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase'; // Import the Firebase app instance
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth(app); // Pass the app instance to getAuth

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            alert('Login failed. Please check your email and password.');
        }
    };

    return (
        <section className="login-section d-flex align-items-center justify-content-center">
            <Container className="login-container">
                <h2 className="text-center mb-4">Admin Login</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="Admin Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="text-center">
                        <Button type="submit" className="btn-login">
                            Login
                        </Button>
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default Login;