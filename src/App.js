import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import 'semantic-ui-css/semantic.min.css';


// Main App component that sets up routing and layout for the application
function App() {
  return (
    <Router>
      <Navbar />
      <Container style={{ marginTop: '7em' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} /> {/* Ensure the home route exists */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
