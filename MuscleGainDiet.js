import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-diet1.jpg'; // Import the image

function MuscleGainDiet () {
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
      <h1>Muscle Gain Diet </h1><br/>
      <h3>Select the Type of Diet :</h3>
      <div style={optionsStyle}>
        <Link to="/diet/muscle-gain-diet/high-protein-diet" style={optionButtonStyle}>High-Protein Diet</Link>
        <Link to="/diet/muscle-gain-diet/paleo-diet" style={optionButtonStyle}>Paleo Diet </Link>
        <Link to="/diet/muscle-gain-diet/ketogenic-diet" style={optionButtonStyle}>Ketogenic Diet </Link>
      </div>
      <BackButton />
    </div>
  );
}

export default MuscleGainDiet;
