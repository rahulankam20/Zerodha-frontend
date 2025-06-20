import { useState } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3002/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = 'http://localhost:3001'; // Redirect to dashboard
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert('Signup failed');
    }
  };

  return (
    
    <div className="container text-center p-5 my-5">
        <h1>Open a free demat and trading account online</h1>
        <p className='mb-5 text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
    <form className="py-3 " onSubmit={handleSubmit}>
      <h2>Signup Now</h2>
      <Box
      sx={{ '& .MuiTextField-root': { m: 1, width: '35ch', marginTop:'20px' } }}
      noValidate
      autoComplete="off"
      
    >
      <div>
        <TextField
          required
          name="name"
          label="Name"
          onChange={handleChange}
        />
        <br />
        
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
        <Button type='submit' className='mt-3' variant="contained">Sign Up</Button>

    </form>
    <p>Already have an account? <Link className='text-decoration-none' to='/signin'> Signin </Link> </p>
    
    </div>
  );
};

export default Signup;

