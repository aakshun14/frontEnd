
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Grid,Paper, Avatar, TextField, Button, Typography,Link, Box } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

export default function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [errorMsg, setErrorMsg] = useState()
    const [submitButtonDisabled,setSubmitButtonDisabled] = useState(false)

    const handleSubmission = () => {

        if(!values.name || !values.email || !values.password) {
            setErrorMsg('Fill all fields')
            return;
        }
        setErrorMsg('')

        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth,values.email,values.password).then(async(res)=> {
            setSubmitButtonDisabled(false)
            const user = res.user  
            await updateProfile(user,{
                displayName: values.name
            })
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
                    <h2>Signup</h2>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField label='Username'
                            placeholder='Enter your name'
                            fullWidth
                            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} 
                            required/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Email' 
                            placeholder='Enter email' 
                            type='email' 
                            fullWidth
                            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} 
                            required/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Password' 
                            placeholder='Enter password' 
                            type='password' 
                            fullWidth
                            onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))} 
                            required/>
                    </Grid>
                </Grid>
                <Button type='submit' 
                    color='primary' 
                    variant="contained" 
                    sx={{
                        marginY: '1rem'
                    }}
                    disabled= {submitButtonDisabled}
                    onClick={handleSubmission}
                    fullWidth>
                        Sign up
                </Button>
                <Typography color={'red'}> 
                    {errorMsg}
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/login" >
                        Login
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </Box>
    )
}
