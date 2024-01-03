import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Appointment = () => {
  const paperStyle = { padding: 20, width: 400, margin: '20px auto', backgroundColor: 'white' }; // Change backgroundColor to 'white'
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '20px 0' };

  const [age, setAge] = useState(35);
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');

  const handleAgeChange = (event, newValue) => {
    setAge(newValue);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AssignmentIcon />
          </Avatar>
          <Typography variant="h5">Appointment Form</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" placeholder="Enter your name" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                label="Gender"
                value={gender}
                onChange={handleGenderChange}
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography id="age-slider" gutterBottom>
              Age: {age}
            </Typography>
            <Slider
              value={age}
              onChange={handleAgeChange}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={35}
              max={100}
              aria-labelledby="age-slider"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Parent Name" placeholder="Enter parent's name" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Mobile" placeholder="Enter your mobile number" type="tel" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" placeholder="Enter your email" type="email" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Student ID" placeholder="Enter student ID" type="text" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="department-label">Department</InputLabel>
              <Select
                labelId="department-label"
                label="Department"
                value={department}
                onChange={handleDepartmentChange}
                required
              >
                <MenuItem value="CSE">CSE</MenuItem>
                <MenuItem value="CSIT">CSIT</MenuItem>
                <MenuItem value="AIDS">AIDS</MenuItem>
                <MenuItem value="ECE">ECE</MenuItem>
                <MenuItem value="ECS">ECS</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Purpose of Visit" placeholder="Enter the purpose of your visit" type="text" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField type="datetime-local" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <input
              accept="application/pdf"
              style={{ display: 'none' }}
              id="file-upload"
              multiple
              type="file"
            />
            <label htmlFor="file-upload">
              <Button variant="contained" color="primary" component="span">
                Choose Files (PDF only)
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="I agree to the terms and conditions" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Appointment;
