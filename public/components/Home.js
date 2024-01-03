import React from 'react';
import { Typography, Button, Grid, Paper, Card, CardContent } from '@mui/material';

const Home = () => {
  return (
    <div style={{ padding: '20px', backgroundImage: 'url("https://th.bing.com/th/id/OIP.XWJHco59tMxsWu1kiw3F3QAAAA?w=234&h=95&c=7&r=0&o=5&dpr=1.3&pid=1.7")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section style={{ textAlign: 'center', marginBottom: '30px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to CVMS
        </Typography>
        <Typography variant="body1">
          We are really happy to see you again.
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          <a href="Login" style={{ textDecoration: 'none', color: 'white' }}>
            <strong>Get Started</strong>
          </a>
        </Button>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <Typography variant="h5" gutterBottom>
          Featured Services
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '20px', height: '100%', backgroundColor: '#f7cdd5' }}>
              <Typography variant="h6" gutterBottom>
                Student Registration
              </Typography>
              <Typography variant="body2">
                Easily register students with our user-friendly registration system.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '20px', height: '100%', backgroundColor: '#a2d5f2' }}>
              <Typography variant="h6" gutterBottom>
                Parent Portal
              </Typography>
              <Typography variant="body2">
                Connect with parents through our dedicated parent portal.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '20px', height: '100%', backgroundColor: '#b8ead9' }}>
              <Typography variant="h6" gutterBottom>
                Appointment Scheduling
              </Typography>
              <Typography variant="body2">
                Schedule and manage appointments efficiently with our system.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </section>

      <section>
        <Typography variant="h5" gutterBottom>
          <br></br>
          <br></br>
          Latest News
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card style={{ height: '100%', backgroundColor: '#fdd5b1' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  New Feature Release
                </Typography>
                <Typography variant="body2">
                  We are excited to announce the release of our new feature! <a href="Login">Check it out now.</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card style={{ height: '100%', backgroundColor: '#d0d1e0' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Upcoming Events
                </Typography>
                <Typography variant="body2">
                  Join us for upcoming events and stay updated with the latest happenings.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Home;
