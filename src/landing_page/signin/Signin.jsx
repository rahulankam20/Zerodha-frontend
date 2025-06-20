import { useState } from 'react';

import {Link} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Signin() {
    const [form, setForm] = useState({ email: '', password: '' });
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch('https://zerodha-backend-viyu.onrender.com/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
          });
    
          const data = await res.json();
    
          if (res.ok) {
            localStorage.setItem('token', data.token);
            window.location.href = 'https://zerodha-dashboard-mauve.vercel.app'; // Redirect to dashboard
          } else {
            alert(data.message);
          }
        } catch (err) {
          console.error(err);
          alert('Signin failed');
        }
      };
    
        
    return ( 
        <div className="container text-center p-5 my-5">
    <form className="py-3 " onSubmit={handleSubmit}>
      <h2>Login</h2>
      <Box
      sx={{ '& .MuiTextField-root': { m: 1, width: '35ch', marginTop:'20px' } }}
      noValidate
      autoComplete="off"
      
    >
      <div>
        <TextField
          required
          name="email"
          label="Email"
          type="email"
          onChange={handleChange}
        />
        <br />
        <TextField
          required
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        </div>
        </Box>
        <Button type='submit' className='mt-3' variant="contained">Sign In</Button>

    </form>
    <p>Don't have an account? <Link className='text-decoration-none' to='/signup'> Signup </Link> </p>
    
    </div>
     );
}   

export default Signin;