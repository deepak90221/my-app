import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Contact = () => {
  const users = [
    { user: 'Ramsai', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'Goutham', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'Eshu', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'pavan', phonenumber: '123456789', email: 'asdf@gmail.com' },
    { user: 'mydham', phonenumber: '8688136224', email: 'mern@gmail.com' },
    { user: 'morning', phonenumber: '8688136224', email: 'mern@gmail.com' },
    { user: 'afternoon', phonenumber: '8688136224', email: 'mern@gmail.com' },
    { user: 'evening', phonenumber: '8688136224', email: 'mern@gmail.com' },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <h2 style={{ color: 'blue' }}>Contact Details</h2>
      {users.map((user, index) => (
        <Card
          key={index}
          style={{
            maxWidth: 200,
            margin: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0)',
            transition: 'transform 0.5s',
          }}
          onClick={() => handleCardClick(index)}
        >
          <CardMedia
            style={{ height: 0, paddingTop: '56.25%' }}
            image={`https://via.placeholder.com/200`}
            alt="Student Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'blue' }}>
              <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.2rem' }}> Student Details</h3>
            </Typography>
            <Typography variant="h6" style={{ color: 'black', fontFamily: 'Times New Roman', fontSize: '1rem' }}>
              Username: {user.user}<br />
              Phonenumber: {user.phonenumber}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Contact;
