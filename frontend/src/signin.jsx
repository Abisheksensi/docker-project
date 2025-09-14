import { useState } from "react"

function SignIn() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign-in data:", formData);
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
            <button type="submit">Sign In</button>
        </form>
    )
}

export default SignIn
