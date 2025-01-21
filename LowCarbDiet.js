import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-diet.jpg'; // Import the image

function LowCarbDiet () {
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
      <h1>Low Carb Diet</h1>
      <div style={boxStyle}>
        <h2>1. Ketogenic (Keto) Diet</h2>
        <p><strong>Carbohydrate Intake:</strong> Typically less than 50 grams per day, sometimes as low as 20-30 grams.</p>
        <p><strong>Fat Intake:</strong> High, about 70-75% of daily calories.</p>
        <p><strong>Protein Intake:</strong> Moderate, about 20-25% of daily calories.</p>
        <p><strong>Primary Focus:</strong> The goal is to enter a state of ketosis, where the body burns fat for fuel instead of carbohydrates.</p>
        <p><strong>Foods to Eat:</strong> Meat, fatty fish, eggs, butter, oils, nuts, seeds, avocados, low-carb vegetables (e.g., leafy greens).</p>
        <p><strong>Foods to Avoid:</strong> Sugary foods, grains, fruits (except small portions of berries), legumes, root vegetables, and high-carb processed foods.</p>
        <p><strong>Benefits:</strong> Effective for weight loss, blood sugar control, and improved mental clarity.</p>

        <h2>2. Atkins Diet</h2>
        <p><strong>Phases:</strong> Four phases (Induction, Balancing, Pre-Maintenance, Maintenance).</p>
        <p><strong>Carbohydrate Intake:</strong> Starts very low in the Induction phase (20 grams per day) and gradually increases in the following phases.</p>
        <p><strong>Primary Focus:</strong> Gradual reintroduction of carbs while monitoring their impact on weight and health.</p>
        <p><strong>Foods to Eat:</strong> Meat, fatty fish, eggs, butter, oils, nuts, seeds, low-carb vegetables, some low-carb fruits in later phases.</p>
        <p><strong>Foods to Avoid:</strong> Similar to the keto diet, with gradual reintroduction of certain carbs in later phases.</p>
        <p><strong>Benefits:</strong> Flexible approach to low-carb eating, effective for weight loss and long-term maintenance.</p>

        <h2>3. Low-Carb High-Fat (LCHF) Diet</h2>
        <p><strong>Carbohydrate Intake:</strong> Typically 50-100 grams per day.</p>
        <p><strong>Fat Intake:</strong> High, similar to the ketogenic diet.</p>
        <p><strong>Primary Focus:</strong> Emphasizes whole, unprocessed foods with high-fat content and moderate protein.</p>
        <p><strong>Foods to Eat:</strong> Meat, fish, eggs, butter, oils, full-fat dairy, nuts, seeds, low-carb vegetables, some low-carb fruits.</p>
        <p><strong>Foods to Avoid:</strong> Sugary foods, grains, high-carb fruits, and processed foods.</p>
        <p><strong>Benefits:</strong> Promotes weight loss, improved heart health, and blood sugar control.</p>

        <h2>4. Paleo Diet</h2>
        <p><strong>Carbohydrate Intake:</strong> Varies, typically moderate to low.</p>
        <p><strong>Primary Focus:</strong> Mimics the eating patterns of our Paleolithic ancestors, focusing on whole, unprocessed foods.</p>
        <p><strong>Foods to Eat:</strong> Meat, fish, eggs, vegetables, fruits, nuts, seeds, healthy fats (e.g., olive oil, coconut oil).</p>
        <p><strong>Foods to Avoid:</strong> Grains, legumes, dairy, refined sugar, and processed foods.</p>
        <p><strong>Benefits:</strong> Supports weight loss, improved digestion, and reduced inflammation.</p>

        <h2>6. Whole30 Diet</h2>
        <p><strong>Carbohydrate Intake:</strong> Moderate to low.</p>
        <p><strong>Primary Focus:</strong> A 30-day elimination diet to reset eating habits and identify food sensitivities.</p>
        <p><strong>Foods to Eat:</strong> Meat, seafood, eggs, vegetables, fruits, nuts, seeds, and healthy fats.</p>
        <p><strong>Foods to Avoid:</strong> Sugar, alcohol, grains, legumes, dairy, and processed foods.</p>
        <p><strong>Benefits:</strong> Improved digestion, reduced inflammation, and potential identification of food sensitivities.</p>

        <h2>7. Eco-Atkins Diet</h2>
        <p><strong>Carbohydrate Intake:</strong> Low, similar to traditional Atkins.</p>
        <p><strong>Primary Focus:</strong> A plant-based variation of the Atkins diet.</p>
        <p><strong>Foods to Eat:</strong> Plant-based proteins (e.g., tofu, seitan), nuts, seeds, low-carb vegetables, and healthy fats.</p>
        <p><strong>Foods to Avoid:</strong> Animal products, high-carb fruits, and grains.</p>
        <p><strong>Benefits:</strong> Weight loss, improved heart health, and a more environmentally sustainable approach.</p>

        <h2>8. Zero-Carb Diet</h2>
        <p><strong>Carbohydrate Intake:</strong> Nearly zero, typically less than 5 grams per day.</p>
        <p><strong>Primary Focus:</strong> Consuming only animal products.</p>
        <p><strong>Foods to Eat:</strong> Meat, fish, eggs, and animal fats.</p>
        <p><strong>Foods to Avoid:</strong> All plant-based foods, including fruits, vegetables, grains, nuts, and seeds.</p>
        <p><strong>Benefits:</strong> Simple approach to eating, potential for weight loss, and reduced inflammation.</p>

        <h2>Benefits of Low-Carb Diets</h2>
        <ul>
          <li><strong>Weight Loss:</strong> Effective for reducing body weight and body fat.</li>
          <li><strong>Blood Sugar Control:</strong> Helps manage blood sugar levels and reduce insulin resistance.</li>
          <li><strong>Heart Health:</strong> Can improve markers of heart health, such as cholesterol and triglyceride levels.</li>
          <li><strong>Mental Clarity:</strong> Some people report improved focus and cognitive function.</li>
          <li><strong>Reduced Hunger:</strong> High protein and fat intake can lead to increased satiety and reduced overall calorie consumption.</li>
        </ul>

        <h2>Sample Low-Carb Meal Plan</h2>
        <h3>Breakfast</h3>
        <ul>
          <li>Scrambled eggs with spinach and feta cheese.</li>
          <li>Avocado slices.</li>
        </ul>

        <h3>Snack</h3>
        <ul>
          <li>A handful of almonds.</li>
        </ul>

        <h3>Lunch</h3>
        <ul>
          <li>Grilled chicken salad with mixed greens, cherry tomatoes, cucumbers, and olive oil dressing.</li>
        </ul>

        <h3>Snack</h3>
        <ul>
          <li>Celery sticks with almond butter.</li>
        </ul>

        <h3>Dinner</h3>
        <ul>
          <li>Baked salmon with a side of roasted Brussels sprouts and cauliflower mash.</li>
        </ul>

        <h3>Dessert</h3>
        <ul>
          <li>Greek yogurt with a few berries (if allowed within the diet’s carb limits).</li>
        </ul>
      </div>
      <BackButton />
    </div>
  );
}

export default LowCarbDiet;
