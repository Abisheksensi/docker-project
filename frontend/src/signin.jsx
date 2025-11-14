import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: 'Arial, sans-serif',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        width: '100%',
        maxWidth: '320px',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: '2em',
        marginBottom: '20px',
        color: '#333',
        textAlign: 'center',
    },
    input: {
        padding: '12px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1em',
    },
    button: {
        padding: '12px 15px',
        fontSize: '1em',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonDisabled: {
        backgroundColor: '#6c757d',
        cursor: 'not-allowed',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: '0.9em',
    },
    signupLink: {
        marginTop: '15px',
        textAlign: 'center',
        fontSize: '0.9em',
    }
};

function SignIn() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            await axios.post("http://localhost:3000/signin", formData);
            navigate('/dashboard'); // Redirect on success
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.response?.data || "An error occurred. Please try again.";
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.header}>Sign In</h2>
                {error && <p style={styles.error}>{error}</p>}
                <input style={styles.input} type="text" name="username" placeholder="Username" value={formData.username} required onChange={handleChange} />
                <input style={styles.input} type="password" name="password" placeholder="Password" value={formData.password} required onChange={handleChange} />
                <button type="submit" style={{ ...styles.button, ...(isLoading ? styles.buttonDisabled : {}) }} disabled={isLoading}>
                    {isLoading ? 'Signing In...' : 'Sign In'}
                </button>
                <p style={styles.signupLink}>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

export default SignIn;
