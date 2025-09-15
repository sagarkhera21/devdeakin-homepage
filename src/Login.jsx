import React, { useRef, useState } from 'react'
import { useAuth } from './Authentication'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
    const email = useRef()
    const password = useRef()
    const { login } = useAuth() 
    const [error, setError] = useState('')
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()

    async function handlecheck(e) {
        e.preventDefault()
        try {
            setError('');
            setloading(true);
            await login(email.current.value, password.current.value); 
            alert('Login Successful')
            navigate('/'); 
        }
        catch (error) {
            setError(error.message);
        }
        setloading(false)
    }

    return (
        <div className='body1'>
        <div className="login">
            <h1>Log In</h1>
            {error && <div className="alert">{error}</div>}
            <form onSubmit={handlecheck}>
                <label>Email:
                    <input className ="Akshit" type="email" ref={email} required />
                </label>
                <label>Password:
                    <input className ="Akshit" type="password" ref={password} required />
                </label>
                <button disabled={loading} className="button" type="submit">LOGIN</button>
            </form>
           
        </div>
         <div className="account">
         Create an Account? <Link to="/signup">Sign Up</Link>
     </div>
     </div>
    )
}