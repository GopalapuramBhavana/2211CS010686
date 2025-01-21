import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-diet.jpg'; // Import the image

function LowFatDiet() {
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
      <h1>Low Fat Diet</h1>
      <div style={boxStyle}>
        <h2>1. Ornish Diet</h2>
        <p><strong>Description:</strong> Developed by Dr. Dean Ornish, this diet emphasizes low-fat, plant-based foods and includes exercise and stress reduction techniques.</p>
        <p><strong>Fat Intake:</strong> Less than 10% of total daily calories from fat.</p>
        <p><strong>Focus:</strong> Primarily plant-based foods such as fruits, vegetables, whole grains, legumes, and limited amounts of non-fat dairy and lean protein sources.</p>
        <p><strong>Benefits:</strong> Effective for weight loss, improving heart health, and managing conditions like diabetes and high blood pressure.</p>

        <h2>2. TLC Diet (Therapeutic Lifestyle Changes)</h2>
        <p><strong>Description:</strong> Developed by the National Institutes of Health (NIH), the TLC diet aims to lower cholesterol levels through dietary changes and increased physical activity.</p>
        <p><strong>Fat Intake:</strong> Less than 7% of total daily calories from saturated fat.</p>
        <p><strong>Focus:</strong> Emphasizes low-fat foods, particularly those rich in soluble fiber and plant sterols, while reducing intake of saturated fats and cholesterol.</p>
        <p><strong>Benefits:</strong> Effective for lowering LDL cholesterol levels, reducing the risk of heart disease.</p>

        <h2>3. DASH Diet (Dietary Approaches to Stop Hypertension)</h2>
        <p><strong>Description:</strong> Originally designed to lower blood pressure, the DASH diet promotes a balanced eating plan rich in fruits, vegetables, whole grains, and low-fat dairy.</p>
        <p><strong>Fat Intake:</strong> Emphasizes low-fat or fat-free dairy products and limits overall fat intake.</p>
        <p><strong>Focus:</strong> High intake of fruits, vegetables, whole grains, lean proteins, and low-fat dairy, while minimizing sodium, saturated fats, and sweets.</p>
        <p><strong>Benefits:</strong> Effective for reducing blood pressure, improving heart health, and aiding weight loss.</p>

        <h2>4. Mediterranean Diet (Low-Fat Version)</h2>
        <p><strong>Description:</strong> Based on traditional eating patterns in countries bordering the Mediterranean Sea, this diet emphasizes plant-based foods, lean proteins, and healthy fats.</p>
        <p><strong>Fat Intake:</strong> Focuses on healthy fats like olive oil and nuts while limiting saturated and trans fats.</p>
        <p><strong>Focus:</strong> High consumption of fruits, vegetables, whole grains, legumes, fish, and olive oil, with moderate intake of dairy and poultry, and limited red meat.</p>
        <p><strong>Benefits:</strong> Associated with reduced risk of heart disease, improved cognitive function, and weight management.</p>

        <h2>5. Weight Watchers (WW)</h2>
        <p><strong>Description:</strong> Weight Watchers assigns point values to foods based on their nutritional content and encourages members to stay within a certain range of daily points.</p>
        <p><strong>Fat Intake:</strong> Encourages the consumption of low-fat and fat-free foods, but does not restrict specific percentages.</p>
        <p><strong>Focus:</strong> Emphasizes portion control, balanced meals, and regular physical activity.</p>
        <p><strong>Benefits:</strong> Offers flexibility in food choices, promotes long-term lifestyle changes, and provides support through meetings and online resources.</p>

      </div>
      <BackButton />
    </div>
  );
}

export default LowFatDiet;
