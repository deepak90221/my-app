// src/App.js
import React from 'react';
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
} from '@mui/material';

const ShipmentStatusReport = ({ shipmentStatus }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h4">Shipment Status Report</Typography>
      <Stepper activeStep={shipmentStatus.length - 1} orientation="vertical">
        {shipmentStatus.map((status, index) => (
          <Step key={index}>
            <StepLabel>
              {status.name}
              <Paper elevation={3} style={{ padding: '10px', marginTop: '10px' }}>
                <Typography variant="body2">{status.description}</Typography>
                <Typography variant="caption">Date: {status.date}</Typography>
              </Paper>
            </StepLabel>
            <StepContent>
              <Typography>Date: {status.date}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

// Example usage
const App = () => {
  const shipmentStatus = [
    { name: 'Order Placed', description: 'Your order has been placed successfully.', date: '2022-01-01' },
    { name: 'Shipped', description: 'Your order has been shipped and is on its way.', date: '2022-01-02' },
    { name: 'Out for Delivery', description: 'Your order is out for delivery and will be delivered soon.', date: '2022-01-03' },
    { name: 'Delivered', description: 'Your order has been delivered to your address.', date: '2022-01-04' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ShipmentStatusReport shipmentStatus={shipmentStatus} />
    </div>
  );
};

export default App;
