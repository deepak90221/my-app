import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//import birthday from './birthday.jpeg';

const Students = () => {
  return (
    <center>
      <font face="Times New Roman" size="6"> <h3>Student Details:</h3></font>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
        img src="venom.jpg"
          component="img"
          alt="Description of the image"
          height="200"
          
          title="Student Image"
          style={{ borderRadius: '50%' }}
        />
        <CardContent>
          <Typography variant="h6" color="black">
          <font face="Times New Roman" size="4">
            Name:  Ch Deepak
            <br></br>
            Regd no: 2200090221
            <br></br>
            Department: CSIT(H)
            </font>
          </Typography>
        </CardContent>
      </Card>
    </center>
  );
}

export default Students;