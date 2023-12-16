import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import './Register.css'; // Adjust the path if needed
import axios from 'axios'; // Corrected import statement

const Register = ({ dark }) => {
  const backgroundColor = dark?.background || 'transparent';
  const textColor = dark?.text || 'green';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  async function registers() {
    try {
      // Form validation
      if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }

      // API request
      await axios.post('http://localhost:3005/api/users/register', { name, email, password });


      // Reset form fields after successful registration
      setName('');
      setEmail('');
      setPassword('');
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  }

  return (
    <div className='papp'>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', background: backgroundColor }}>
        <Paper elevation={10} style={{ padding: '20px', textAlign: 'center', color: textColor }}>
          <Typography variant='h2' style={{ fontFamily: 'your-chosen-font', fontWeight: 'bold' }}>
            REGISTER
          </Typography>
          <TextField label='Name' variant='outlined' value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <br />
          <TextField label='Email Address' variant='outlined' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <TextField label='Password' type='password' variant='outlined' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
          <TextField label='Confirm Password' type='password' variant='outlined' onChange={(e) => setCpassword(e.target.value)} /><br /><br />
          <Button variant="contained" style={{ backgroundColor: textColor }} onClick={registers}>
            REGISTER
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default Register;
