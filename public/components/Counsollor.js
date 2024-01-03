import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Counsollor = () => {
  const users = [
    { user: 'Ramsai', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'Goutham', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'Eshu', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'pavan', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'mydham', phonenumber: '8688136224', email: 'mern@gmail.com' },
    { user:'morning', phonenumber: '8688136224', email: 'mern@gmail.com' },
    { user: 'afternoon', phonenumber: '8688136224', email: 'mern@gmail.com' },
    { user: 'evening', phonenumber: '8688136224', email: 'mern@gmail.com' },
    { user: 'Ramsai', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'Goutham', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'Eshu', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'pavan', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'mydham', phonenumber: '8688136224', email: 'mern@gmail.com' },
    { user:'morning', phonenumber: '8688136224', email: 'mern@gmail.com' },
    { user: 'afternoon', phonenumber: '8688136224', email: 'mern@gmail.com' },
    { user: 'evening', phonenumber: '8688136224', email: 'mern@gmail.com' },
  ];

  // Define the number of cards per row
 // const cardsPerRow = 3;

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <h2><font face='Times new roman' >Counsollor Details:</font></h2>
      {users.map((user, index) => (
        <Card key={index} sx={{ maxWidth: 200, margin: '10px' }}>
          <CardMedia
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'Blue' }}>
             <h3>
             <font face="Times New Roman" size="4"> Counsollor Details</font></h3>
            </Typography>
            
            <Typography variant="h6" color="black">
            <font face="Times New Roman" size="4">
              Username: {user.user}<br></br>
              Phonenumber: {user.phonenumber}
              </font>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Counsollor;