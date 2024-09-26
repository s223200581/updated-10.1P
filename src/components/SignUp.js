import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import bcrypt from 'bcryptjs'; // Assuming you're using bcryptjs for hashing passwords

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, hashedPassword);

            // User created successfully
            setMessage("You have signed up successfully! Redirecting to home...");
            setError(''); // Clear any previous errors

            // Redirect to home page after a delay
            setTimeout(() => {
                navigate("/"); // Redirect to home page
            }, 3000); // 3 seconds delay to show the success message before redirect

        } catch (err) {
            setError(err.message); // Display error if sign-up fails
            setMessage(''); // Clear success message if there's an error
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input 
                    type="text" 
                    placeholder="First Name" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    required 
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    required 
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button type="submit" style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>
                    Sign Up
                </button>
            </form>

            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default SignUp;
