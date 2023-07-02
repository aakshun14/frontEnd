
import React from "react";
import { Link } from "react-router-dom";

import { Box, Container, Grid, TextField, Typography, InputLabel, Select,MenuItem, FormControl, Button, FormGroup } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';    

export default function InputField2() {
    const [day, setDay] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [year, setYear] = React.useState('');

    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };
    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
    };
    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };

    return (
      <Box >
        <Container maxWidth='md' >  
            <form >
                <Box sx={{
                marginX: '2rem',
                marginTop: '3rem',
            }}> 
                <Box sx={{
                    marginTop: '2rem',
                    marginBottom: '1rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem'
                }}
                >
                    <TextField
                        required
                        type="text"
                        id="standard"
                        label='FIRST NAME'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        required
                        type="text"
                        id="standard"
                        label="LAST NAME"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                </Box>
                <Box sx={{
                    display: 'grid',
                    gap: '1rem'
                }}>
                    <TextField
                        required
                        id="standard"
                        label="EMAIL"
                        type="email"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        required
                        id="standard"
                        label="CONTACT NUMBER"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <Box >
                        <Typography sx={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            fontWeight: '400',
                            fontSize: '1rem',   
                            marginBottom: '1rem'
                        }}>
                            DATE OF BIRTH
                        </Typography>
                        <Box sx={{
                        width: '50%',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gap: '1rem'
                    }}>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Day</InputLabel>
                            <Select
                                required
                                type="number"
                                labelId="demo-simple-small-label"
                                id="demo-simple-small"
                                label="Day"
                                value={day}
                                onChange={handleChangeDay}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Month</InputLabel>
                            <Select
                                required
                                type="number"
                                labelId="demo-simple-small-label"
                                id="demo-simple-small"
                                label="Month"
                                value={month}
                                onChange={handleChangeMonth}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Year</InputLabel>
                            <Select
                                required
                                type="number"
                                labelId="demo-simple-small-label"
                                id="demo-simple-small"
                                label="Year"
                                value={year}
                                onChange={handleChangeYear}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    </Box>    
                </Box>
                <Box m={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    marginTop='3rem'
                >
                    <Link to='/futherInfo'><Button type="submit" variant="outlined">Next<NavigateNextIcon /></Button></Link>
                </Box>
            </Box>
            </form>
        </Container>
      </Box>
    );
  }

