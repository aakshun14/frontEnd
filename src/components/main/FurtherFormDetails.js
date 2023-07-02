import { useState } from "react";
import React from "react";

import {Box, Grid, TextField, Typography, InputLabel, Select,MenuItem, FormControl, Button, Card, CardContent, Container, } from "@mui/material";  
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


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

export default function FurtherFormDetails() {
  const [value, setValue] = useState([
    dayjs('7/14/2020'),
    dayjs('7/14/2020'),
  ]);

    return (
        <div> 
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
              <Grid container spacing={1} rowGap={2}>
                <Grid xs={12} item>
                  <Typography >Location</Typography>
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
                <Grid xs={12} item>
                  <Typography>Language Spoken</Typography>
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
                <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
                    <DemoItem label="AVAILABILITY" component="DateRangePicker">
                      <DateRangePicker
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
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
                                Submit
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
