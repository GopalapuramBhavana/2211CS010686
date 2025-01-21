import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-diet.jpg'; // Import the image

function PaleoDiet() {
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
      <h1>Paleo Diet</h1>
      <div style={boxStyle}>
        <h2>1. Standard Paleo Diet</h2>
        <p><strong>Description:</strong> A diet based on foods presumed to have been available to Paleolithic humans, excluding processed foods, grains, legumes, and dairy.</p>
        <p><strong>Focus:</strong> Lean meats, fish, seafood, fruits, vegetables, nuts, and seeds.</p>
        <p><strong>Benefits:</strong> Provides nutrient-dense foods, supports weight loss, improves metabolic health, and may reduce inflammation.</p>

        <h2>2. Autoimmune Paleo (AIP) Diet</h2>
        <p><strong>Description:</strong> A stricter version of the paleo diet designed to reduce inflammation and support those with autoimmune conditions.</p>
        <p><strong>Focus:</strong> Eliminates additional foods such as nightshade vegetables, nuts, seeds, eggs, and certain spices. Emphasizes healing foods like bone broth, fermented vegetables, and organ meats.</p>
        <p><strong>Benefits:</strong> Supports the management of autoimmune conditions by reducing inflammation and identifying trigger foods.</p>

        <h2>3. Primal Diet</h2>
        <p><strong>Description:</strong> Similar to the paleo diet but includes some foods not typically consumed during the Paleolithic era, such as dairy and certain legumes.</p>
        <p><strong>Focus:</strong> Emphasizes whole, minimally processed foods including meat, fish, fruits, vegetables, nuts, seeds, and some full-fat dairy products.</p>
        <p><strong>Benefits:</strong> Provides flexibility while still focusing on nutrient-dense foods, supports weight loss, and improves metabolic health.</p>

        <h2>4. Whole30 Diet</h2>
        <p><strong>Description:</strong> A 30-day program that eliminates certain food groups, including grains, legumes, dairy, alcohol, and added sugars, to reset the body and identify potential food sensitivities.</p>
        <p><strong>Focus:</strong> Whole foods including meat, seafood, eggs, vegetables, fruits, nuts, and seeds. Avoids processed foods and common allergens.</p>
        <p><strong>Benefits:</strong> Resets eating habits, improves digestion, energy levels, and may help identify food sensitivities.</p>

        <h2>5. Ketogenic Paleo Diet</h2>
        <p><strong>Description:</strong> Combines the principles of the paleo diet with the high-fat, low-carb approach of the ketogenic diet to induce a state of ketosis.</p>
        <p><strong>Focus:</strong> High-fat foods like meat, fish, eggs, nuts, seeds, avocados, and low-carb vegetables. Avoids grains, legumes, dairy, and high-carb fruits.</p>
        <p><strong>Benefits:</strong> Supports weight loss, stabilizes blood sugar levels, and may improve cognitive function.</p>
      </div>
      <BackButton />
    </div>
  );
}

export default PaleoDiet;
