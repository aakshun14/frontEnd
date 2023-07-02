import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

import {Grid,Paper, Avatar, TextField, Button, Typography,Link, Box } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Login() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errorMsg, setErrorMsg] = useState()
    const [submitButtonDisabled,setSubmitButtonDisabled] = useState(false)

    const handleSubmission = () => {

        if( !values.email || !values.password) {
            setErrorMsg('Fill all fields')
            return;
        }
        setErrorMsg('')

        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth,values.email,values.password).then(async(res)=> {
            setSubmitButtonDisabled(false)
            navigate('/Form1')
        }).catch((err) => {
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message)})
    }


    return(
        <Box sx={{
            width: {
              xs: '90%',
              sm: '80%',
              md: '40%',
              lg: '40%',
              xl: '40%'},
              margin: "2.5rem auto"
        }}>
            <Grid>
            <Paper elevation={10} sx={{
                padding : {
                    xs: '10%',
                    sm: '10%',
                    md: '10%',
                    lg: '10%',
                    xl: '10%'
                }
            }}>
                <Grid align='center'>
                     <Avatar sx={{
                        backgroundColor:'#1bbd7e'
                     }}><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField label='Email'
                            placeholder='Enter email' 
                            fullWidth
                            onChange={event => setValues(prev => ({ ...prev, email: event.target.value}))} 
                            required/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Password' 
                            placeholder='Enter password' 
                            type='password' 
                            fullWidth
                            onChange={event => setValues(prev => ({ ...prev, password: event.target.value}))} 
                            required/>
                    </Grid>
                </Grid>
                <Button type='submit' 
                    color='primary' 
                    variant="contained" 
                    sx={{
                        marginY: '1rem'
                    }}
                    disabled={submitButtonDisabled}
                    onClick={handleSubmission}
                    fullWidth>
                        Login
                </Button>
                <Typography > 
                    {errorMsg}
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/signup" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </Box>
    )
}
