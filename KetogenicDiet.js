import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-diet.jpg'; // Import the image

function KetogenicDiet() {
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
      <h1>Ketogenic Diet</h1>
      <div style={boxStyle}>
        <h2>1. Standard Ketogenic Diet (SKD)</h2>
        <p><strong>Description:</strong> A high-fat, low-carbohydrate diet that induces a state of ketosis, where the body burns fat for fuel instead of carbohydrates.</p>
        <p><strong>Focus:</strong> High-fat foods like meat, fish, eggs, cheese, nuts, seeds, and low-carb vegetables. Carbohydrates are typically limited to 20-50 grams per day.</p>
        <p><strong>Benefits:</strong> Supports weight loss, reduces appetite, and may improve blood sugar control and cognitive function.</p>

        <h2>2. Targeted Ketogenic Diet (TKD)</h2>
        <p><strong>Description:</strong> Similar to the SKD, but allows for additional carbohydrates around workouts to provide energy for exercise performance.</p>
        <p><strong>Focus:</strong> Follows the principles of the SKD but includes an extra intake of carbohydrates before or after exercise.</p>
        <p><strong>Benefits:</strong> Provides energy for intense workouts while still maintaining ketosis for fat burning.</p>

        <h2>3. Cyclical Ketogenic Diet (CKD)</h2>
        <p><strong>Description:</strong> Involves cycling between periods of strict ketogenic eating and higher-carb refeeding days.</p>
        <p><strong>Focus:</strong> Follows a standard ketogenic diet most of the time but includes planned periods (usually 1-2 days) of higher carbohydrate intake, often timed around intense workouts.</p>
        <p><strong>Benefits:</strong> Supports muscle growth and performance during intense exercise while still benefiting from the fat-burning effects of ketosis.</p>

        <h2>4. High-Protein Ketogenic Diet</h2>
        <p><strong>Description:</strong> Similar to the SKD but with a higher proportion of protein, often used by athletes or those with higher protein requirements.</p>
        <p><strong>Focus:</strong> Includes more protein-rich foods like meat, poultry, fish, and eggs, while still maintaining a low carbohydrate intake.</p>
        <p><strong>Benefits:</strong> Supports muscle growth and recovery, maintains satiety, and may improve body composition.</p>

        <h2>5. Modified Ketogenic Diet</h2>
        <p><strong>Description:</strong> A less restrictive version of the ketogenic diet that allows for slightly higher carbohydrate intake, often used for individuals who find it challenging to adhere to strict keto guidelines.</p>
        <p><strong>Focus:</strong> Allows for slightly more carbohydrates (up to 100 grams per day) while still prioritizing fat intake and maintaining a low-carb lifestyle.</p>
        <p><strong>Benefits:</strong> Provides flexibility while still allowing for the metabolic benefits of ketosis.</p>
      </div>
      <BackButton />
    </div>
  );
}

export default KetogenicDiet;
