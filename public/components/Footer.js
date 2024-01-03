import React from 'react';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString(); // Get the current date
  return (
    <div style={{ marginTop: 'auto', paddingTop: '20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
      <footer style={{ position: 'fixed', bottom: '0', width: '100%',height:'6%', backgroundColor: '#3498db', color: 'white', padding: '10px' }}>
      <b>
        <font face="Times new roman" size="3"  >
          <p style={{ color: 'black' }} >@Copy Rights Reserved for KLEF<br></br>
          Current Date: {currentDate}</p> {/* Display the current date */}
        </font>
        </b>
      </footer>
    </div>
  );
};

export default Footer;