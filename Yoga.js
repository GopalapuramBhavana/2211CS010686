import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-yoga.jpg'; // Import the image

function Yoga() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw',
    color: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
  };

  const categoriesStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const categoryStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '10px 20px',
    borderRadius: '10px',
    margin: '10px',
    color: '#000', // Set text color to black for contrast
    textDecoration: 'none', // Ensure no underline
  };

  const linkStyle = {
    color: '#000', // Set link text color to black for contrast
    textDecoration: 'none', // Remove underline from links
  };

  const categoryButtonStyle = {
    ...categoryStyle, // Spread in categoryStyle properties
    display: 'block',
    width: '200px',
    textAlign: 'center',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h1>Yoga Categories</h1>
      <div style={categoriesStyle}>
        <Link to="/yoga/face-yoga" style={categoryButtonStyle}>Face Yoga</Link>
        <Link to="/yoga/health-yoga" style={categoryButtonStyle}>Health Yoga</Link>
        <Link to="/yoga/stress-relief-and-relax-yoga" style={categoryButtonStyle}>Stress Relief And Relax Yoga</Link>
        <Link to="/yoga/strength-and-flexibility-yoga" style={categoryButtonStyle}>Strength And Flexibility Yoga</Link>
        <BackButton />
      </div>
    </div>
  );
}

export default Yoga;
