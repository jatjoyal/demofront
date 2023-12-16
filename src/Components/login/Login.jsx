import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import './Login.css'; // Adjust the path if needed
import axios from 'axios';

const Login = ({ dark }) => {
  const backgroundColor = dark?.background || 'transparent';
  const textColor = dark?.text || 'green';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function login() {
    try {
      if (!email || !password) {
        setError('Please fill in all fields.');
        return;
      }

      const user = { email, password };
      const response = await axios.post('http://localhost:3005/api/users/login', user);
      const result = response.data;
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  }

  return (
    <div className='papp'>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', background: backgroundColor }}>
        <Paper elevation={10} style={{ padding: '20px', textAlign: 'center', color: textColor }}>
          <Typography variant='h2' color={textColor} style={{ fontFamily: 'your-chosen-font', fontWeight: 'bold', fontSize: '32px' }}>
            LOGIN
          </Typography>
          <TextField label='Email Address' variant='outlined' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <TextField label='Password' type='password' variant='outlined' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
          {error && <Typography variant='body2' color='error'>{error}</Typography>}
          <Button variant="contained" style={{ backgroundColor: 'green', color: 'white', fontSize: '18px' }} onClick={login}>
            LOGIN
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
