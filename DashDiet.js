import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-diet.jpg'; // Import the image

function DashDiet () {
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

  const linkStyle = {
    color: '#007bff', // Link color
    textDecoration: 'none', // Remove underline
    marginTop: '10px',
    display: 'block',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <h1>DASH Diet</h1>
      <div style={boxStyle}>
        <h2>1. Standard DASH Diet</h2>
        <p><strong>Sodium Intake:</strong> Allows up to 2,300 milligrams (mg) of sodium per day.</p>
        <p><strong>Target Audience:</strong> Suitable for most individuals looking to lower their blood pressure and improve overall heart health.</p>
        <p><strong>Primary Focus:</strong> This version emphasizes the general reduction of sodium compared to typical Western diets, while still being flexible for those who may find it challenging to drastically reduce sodium intake immediately.</p>

        <h2>2. Lower Sodium DASH Diet</h2>
        <p><strong>Sodium Intake:</strong> Limits sodium to 1,500 mg per day.</p>
        <p><strong>Target Audience:</strong> Recommended for individuals with hypertension, those who are sodium-sensitive, or individuals with certain medical conditions that require stricter sodium control.</p>
        <p><strong>Primary Focus:</strong> This version is more stringent and aims to provide the maximum benefit for blood pressure reduction by further minimizing sodium intake.</p>

        <h2>Key Components of Both Versions</h2>
        <p>Regardless of the version, the core principles of the DASH diet remain the same, focusing on nutrient-rich foods that help manage blood pressure and improve overall health. Here's a detailed breakdown:</p>

        <ul>
          <li><strong>Fruits and Vegetables</strong></li>
          <ul>
            <li><strong>Fruits:</strong> 4-5 servings per day. Examples: apples, oranges, bananas, berries, melons.</li>
            <li><strong>Vegetables:</strong> 4-5 servings per day. Examples: leafy greens, carrots, tomatoes, broccoli, peppers.</li>
          </ul>
          <li><strong>Grains</strong></li>
          <ul>
            <li><strong>Whole Grains:</strong> 6-8 servings per day. Examples: brown rice, whole wheat bread, quinoa, oats, barley.</li>
          </ul>
          <li><strong>Dairy</strong></li>
          <ul>
            <li><strong>Low-Fat or Fat-Free Dairy:</strong> 2-3 servings per day. Examples: milk, yogurt, cheese.</li>
          </ul>
          <li><strong>Lean Proteins</strong></li>
          <ul>
            <li><strong>Lean Meats, Poultry, Fish:</strong> Up to 6 servings per day. Examples: skinless chicken, lean beef, fish.</li>
            <li><strong>Nuts, Seeds, Legumes:</strong> 4-5 servings per week. Examples: almonds, sunflower seeds, beans, lentils.</li>
          </ul>
          <li><strong>Fats and Oils</strong></li>
          <ul>
            <li><strong>Healthy Fats:</strong> 2-3 servings per day. Examples: olive oil, avocados, nuts.</li>
          </ul>
          <li><strong>Sweets and Added Sugars</strong></li>
          <ul>
            <li><strong>Limited Intake:</strong> 5 or fewer servings per week. Healthier options include fruit or low-fat frozen yogurt.</li>
          </ul>
          <li><strong>Sodium</strong></li>
          <ul>
            <li><strong>Standard DASH:</strong> 2,300 mg per day.</li>
            <li><strong>Lower Sodium DASH:</strong> 1,500 mg per day.</li>
          </ul>
          <li><strong>Potassium, Calcium, and Magnesium</strong></li>
          <ul>
            <li>Essential Minerals: Adequate intake is encouraged through the consumption of fruits, vegetables, and low-fat dairy, as they play a significant role in blood pressure regulation.</li>
          </ul>
        </ul>

        <h2>Benefits of the DASH Diet</h2>
        <ul>
          <li><strong>Blood Pressure Reduction:</strong> Effective in lowering both systolic and diastolic blood pressure.</li>
          <li><strong>Heart Health Improvement:</strong> Reduces cholesterol levels and overall cardiovascular risk.</li>
          <li><strong>Weight Management:</strong> Supports healthy weight loss when combined with physical activity.</li>
          <li><strong>Diabetes Management:</strong> Helps control blood sugar levels and reduces the risk of type 2 diabetes.</li>
          <li><strong>Nutrient Balance:</strong> Provides a well-rounded intake of essential nutrients, promoting overall health.</li>
        </ul>

        <h2>Sample Meal Plan</h2>
        <h3>Breakfast</h3>
        <ul>
          <li>Whole grain cereal with low-fat milk and a banana.</li>
          <li>A glass of orange juice.</li>
        </ul>

        <h3>Snack</h3>
        <ul>
          <li>A small handful of unsalted almonds.</li>
        </ul>

        <h3>Lunch</h3>
        <ul>
          <li>Grilled chicken salad with mixed greens, tomatoes, cucumbers, and a low-fat dressing.</li>
          <li>A whole grain roll.</li>
        </ul>

        <h3>Snack</h3>
        <ul>
          <li>Carrot and celery sticks with hummus.</li>
        </ul>

        <h3>Dinner</h3>
        <ul>
          <li>Baked salmon with a side of quinoa and steamed broccoli.</li>
          <li>A side salad with a variety of vegetables and a low-fat dressing.</li>
        </ul>

        <h3>Dessert</h3>
        <ul>
          <li>Fresh fruit salad.</li>
        </ul>
      </div>
      <BackButton />
    </div>
  );
}

export default DashDiet;
