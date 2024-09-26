import React, { useState, useEffect } from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

// Navbar component for navigation across the application
const Navbar = () => {
  const [user, setUser] = useState(null);  // State to track the current logged-in user
  const navigate = useNavigate();

  // Use effect to listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Update the state with the current user
    });

    return () => unsubscribe();  // Clean up the listener
  }, []);

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);  // Sign out the user
      setUser(null);  // Clear the user state
      navigate('/login');  // Redirect to login page
    } catch (error) {
      console.error('Error signing out:', error);  // Handle sign-out errors
    }
  };

  return (
    // Menu component from Semantic UI for the navigation bar
    <Menu pointing secondary size="large" style={{ padding: '0 20px', borderBottom: '2px solid #ccc' }}>
      {/* Header item with a link to the home page */}
      <Menu.Item header as={Link} to="/" style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}>
        DEV@Deakin
      </Menu.Item>

      {/* Right-aligned items */}
      <Menu.Item position="right">
        {/* Input field with a search icon */}
        <Input icon="search" placeholder="Search..." style={{ width: '300px', marginRight: '20px' }} />

        {/* Conditional rendering based on user's login status */}
        {user ? (
          <>
            <Menu.Item as={Link} to="/post" name="Post" />
            <Button onClick={handleSignOut} color="red">Sign Out</Button>
          </>
        ) : (
          <Menu.Item as={Link} to="/login" name="Login" />
        )}
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
