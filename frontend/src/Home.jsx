import React, { useState } from 'react';
import SignUp from './signup';
import SignIn from './signin';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        boxSizing: 'border-box'
    },
    header: {
        fontSize: '2.5em',
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center'
    },
    buttonContainer: {
        display: 'flex',
        gap: '15px',
        marginBottom: '30px'
    },
    button: {
        padding: '12px 25px',
        fontSize: '1em',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s'
    },
    primaryButton: {
        backgroundColor: '#007bff',
        color: 'white',
    },
    secondaryButton: {
        backgroundColor: '#6c757d',
        color: 'white',
    },
    linkButton: {
        background: 'none',
        border: 'none',
        color: '#007bff',
        fontSize: '1em',
        cursor: 'pointer',
        marginTop: '20px'
    },
    formContainer: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        boxSizing: 'border-box'
    }
};

function App() {
    const [view, setView] = useState('home');

    const handleViewChange = (newView) => {
        setView(newView);
    };

    return (
        <div style={styles.container}>
            {view === 'home' && (
                <>
                    <h1 style={styles.header}>Welcome to Our Website!</h1>
                    <div style={styles.buttonContainer}>
                        <button 
                            onClick={() => handleViewChange('signup')} 
                            style={{ ...styles.button, ...styles.primaryButton }}
                        >
                            Sign Up
                        </button>
                        <button 
                            onClick={() => handleViewChange('signin')} 
                            style={{ ...styles.button, ...styles.secondaryButton }}
                        >
                            Sign In
                        </button>
                    </div>
                </>
            )}

            {view === 'signup' && (
                <div style={styles.formContainer}>
                    <SignUp />
                    <button 
                        onClick={() => handleViewChange('home')} 
                        style={styles.linkButton}
                    >
                        Back to Home
                    </button>
                </div>
            )}

            {view === 'signin' && (
                <div style={styles.formContainer}>
                    <SignIn />
                    <button 
                        onClick={() => handleViewChange('home')} 
                        style={styles.linkButton}
                    >
                        Back to Home
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;