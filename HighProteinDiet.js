import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-diet.jpg'; // Import the image

function HighProteinDiet() {
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
      <h1>High Protein Diet</h1>
      <div style={boxStyle}>
        <h2>1. Atkins Diet</h2>
        <p><strong>Description:</strong> A low-carb, high-protein diet that involves four phases, starting with very low carbohydrate intake and gradually increasing carb intake.</p>
        <p><strong>Focus:</strong> High protein foods like meat, poultry, fish, eggs, and cheese, along with low-carb vegetables and healthy fats.</p>
        <p><strong>Benefits:</strong> Supports weight loss, reduces appetite, and may improve blood sugar and triglyceride levels.</p>

        <h2>2. Paleo Diet</h2>
        <p><strong>Description:</strong> Based on the dietary patterns of Paleolithic humans, this diet emphasizes whole foods and excludes processed foods, grains, legumes, and dairy.</p>
        <p><strong>Focus:</strong> Lean meats, fish, seafood, eggs, fruits, vegetables, nuts, and seeds.</p>
        <p><strong>Benefits:</strong> Provides high-quality protein sources, promotes weight loss, and may improve metabolic health.</p>

        <h2>3. Keto Diet</h2>
        <p><strong>Description:</strong> A high-fat, moderate-protein, very low-carb diet that induces a state of ketosis, where the body burns fat for fuel instead of carbohydrates.</p>
        <p><strong>Focus:</strong> High-fat foods like meat, fish, eggs, cheese, nuts, seeds, and low-carb vegetables.</p>
        <p><strong>Benefits:</strong> Supports weight loss, reduces appetite, and may improve blood sugar control and cognitive function.</p>

        <h2>4. South Beach Diet</h2>
        <p><strong>Description:</strong> A phased approach to weight loss and maintenance that emphasizes low-glycemic-index carbohydrates, lean protein, and healthy fats.</p>
        <p><strong>Focus:</strong> Lean protein sources like poultry, fish, eggs, and tofu, along with vegetables, whole grains, and healthy fats.</p>
        <p><strong>Benefits:</strong> Promotes weight loss, stabilizes blood sugar levels, and improves heart health.</p>

        <h2>5. Zone Diet</h2>
        <p><strong>Description:</strong> A balanced diet that aims to control insulin levels by maintaining a specific ratio of carbohydrates, proteins, and fats at each meal.</p>
        <p><strong>Focus:</strong> Equal portions of protein, carbohydrates, and fats in each meal, primarily from lean meats, fruits, vegetables, and healthy fats.</p>
        <p><strong>Benefits:</strong> Supports weight loss, stabilizes blood sugar levels, and may improve athletic performance.</p>
      </div>
      <BackButton />
    </div>
  );
}

export default HighProteinDiet;
