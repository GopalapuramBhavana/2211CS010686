import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the image

function WeightLoss() {
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

  const optionsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const optionStyle = {
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

  const optionButtonStyle = {
    ...optionStyle, // Spread in optionStyle properties
    display: 'block',
    width: '200px',
    textAlign: 'center',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h1>Weight Loss Exercises</h1><br/>
      <h3>Select the Exercise :</h3>
      <div style={optionsStyle}>
        <Link to="/exercise/weight-loss/cardiovascular-exercises" style={optionButtonStyle}>Cardiovascular Exercises</Link>
        <Link to="/exercise/weight-loss/strength-training-exercises" style={optionButtonStyle}>Strength Training Exercises</Link>
        <Link to="/exercise/weight-loss/hiit" style={optionButtonStyle}>High-Intensity Interval Training (HIIT)</Link>
      </div>
      <BackButton />
    </div>
  );
}

export default WeightLoss;
