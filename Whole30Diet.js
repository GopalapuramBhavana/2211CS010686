import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-diet.jpg'; // Import the image

function Whole30Diet() {
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

  const boxStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    width: '90%', // Adjust the width to be 90% of the page width
    maxWidth: '1200px', // Maximum width for larger screens
    margin: '20px 0',
    color: '#000', // Set text color to black for contrast
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      <h1>Whole30 Diet</h1>
      <div style={boxStyle}>
        <h2>1. Standard Whole30 Diet</h2>
        <p><strong>Description:</strong> The original Whole30 program that eliminates certain food groups for 30 days to reset your body and identify potential food sensitivities.</p>
        <p><strong>Focus:</strong> Whole foods including meat, seafood, eggs, vegetables, fruits, nuts, and seeds. Avoids added sugars, alcohol, grains, legumes, soy, and dairy.</p>
        <p><strong>Benefits:</strong> Resets eating habits, improves digestion, energy levels, and may help identify food sensitivities.</p>

        <h2>2. Whole30 Vegetarian Diet</h2>
        <p><strong>Description:</strong> A modified Whole30 plan for vegetarians that eliminates animal products while adhering to Whole30 principles.</p>
        <p><strong>Focus:</strong> Plant-based foods such as fruits, vegetables, nuts, seeds, and compliant plant-based protein sources. Avoids grains, legumes, added sugars, and processed foods.</p>
        <p><strong>Benefits:</strong> Provides a structured approach for vegetarians to reset their diet and identify potential food sensitivities.</p>

        <h2>3. Whole30 Pescatarian Diet</h2>
        <p><strong>Description:</strong> A modified Whole30 plan for pescatarians that includes fish and seafood as the primary source of protein.</p>
        <p><strong>Focus:</strong> Seafood, vegetables, fruits, nuts, seeds, and compliant plant-based foods. Avoids grains, legumes, added sugars, and processed foods.</p>
        <p><strong>Benefits:</strong> Offers flexibility for pescatarians to follow a Whole30-style eating plan and reset their diet.</p>

        <h2>4. Whole30 Autoimmune Protocol (AIP)</h2>
        <p><strong>Description:</strong> A stricter version of Whole30 designed for individuals with autoimmune conditions, focusing on eliminating potential trigger foods.</p>
        <p><strong>Focus:</strong> Eliminates additional foods such as nightshade vegetables, nuts, seeds, eggs, and certain spices. Emphasizes healing foods like bone broth, fermented vegetables, and organ meats.</p>
        <p><strong>Benefits:</strong> Supports the management of autoimmune conditions by reducing inflammation and identifying trigger foods.</p>
      </div>
      <BackButton />
    </div>
  );
}

export default Whole30Diet;
