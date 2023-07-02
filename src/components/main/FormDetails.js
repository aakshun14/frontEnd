import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import {Box, Grid, TextField, Typography, InputLabel, Select,MenuItem, FormControl, Button, Card, CardContent, Container, } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';    
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function Label({ componentName, valueType, isProOnly }) {
    const content = (
      <span>
        <strong>{componentName}</strong>
      </span>
    );
  
    if (isProOnly) {
      return (
        <Stack direction="row" spacing={0.5} component="span">
          <Tooltip title="Included on Pro package">
            <a href="/x/introduction/licensing/#pro-plan">
              <span className="plan-pro" />
            </a>
          </Tooltip>
          {content}
        </Stack>
      );
    }
    return content;
}

export default function FormDetails() {
    return (
        <div  > 
      <Grid>
        <Box sx={{
          width: {
            xs: '90%',
            sm: '80%',
            md: '60%',
            lg: '60%',
            xl: '60%'
          },
          marginX: "auto",
          marginTop: '5rem',
          marginBottom: '3rem'
        }} >
          <Card sx={{
            padding: '7% 5%',
            backgroundColor: '#CBE7DD',
            borderRadius: '1%'
          }}
          elevation={10} >
          <CardContent>
            <form > 
              <Grid container spacing={2} rowGap={2}>
                <Grid xs={12} sm={6} item>
                  <Typography>First Name</Typography>
                  <TextField  
                    sx={{
                      backgroundColor: 'whitesmoke'
                    }} 
                    InputLabelProps={{
                        shrink: true,
                    }} 
                    variant="outlined" 
                    fullWidth 
                    required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Typography>Last Name</Typography>
                  <TextField  
                    sx={{
                      backgroundColor: 'whitesmoke'
                    }} 
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined" 
                    fullWidth 
                    required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>Email</Typography>
                  <TextField type="email"  
                    sx={{
                      backgroundColor: 'whitesmoke'
                    }} 
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined" 
                    fullWidth 
                    required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>Phone</Typography>
                  <TextField type="number" 
                    sx={{
                      backgroundColor: 'whitesmoke'
                    }} 
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined" 
                    fullWidth 
                    required />
                </Grid>
                <Grid item xs={6} >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={[
                            'DatePicker',
                            'TimePicker',
                            'DateTimePicker',
                            'DateRangePicker',
                            ]}
                        >
                            <DemoItem >
                              <Typography>Date Of Birth</Typography>
                              <DatePicker sx={{backgroundColor: 'white'}}/>
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}
                    display="flex"
                    justifyContent="center"
                    alignItems="center" 
                    >
                        <Button type="submit" 
                            variant="contained" 
                            color="primary">
                                submit
                        </Button>
                </Grid>
              </Grid>
            </form>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </div>
    )
}
