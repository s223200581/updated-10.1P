import React, { useState } from 'react';
import { Form, Button, Card, Header, Message } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (err) {
      setError('Error signing in with Google');
    }
  };

  return (
    <Card centered style={{ padding: '2em', maxWidth: '400px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12)', borderRadius: '10px' }}>
      <Card.Content>
        <Header as="h2" textAlign="center" style={{ marginBottom: '1.5em', fontWeight: '500', color: '#333' }}>
          Login to DEV@Deakin
        </Header>
        {error && <Message negative>{error}</Message>}
        <Form onSubmit={handleLogin}>
          <Form.Input
            fluid
            icon="mail"
            iconPosition="left"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '1em', padding: '15px' }}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '1.5em', padding: '15px' }}
          />
          <Button color="blue" fluid size="large" style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#0056b3' }}>
            Login
          </Button>
        </Form>
        <Button color="google plus" fluid size="large" style={{ marginTop: '10px' }} onClick={handleGoogleLogin}>
          Login with Google
        </Button>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Message>
          New here? <Link to="/signup">Sign up</Link>
        </Message>
      </Card.Content>
    </Card>
  );
};

export default Login;