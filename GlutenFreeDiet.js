import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-diet.jpg'; // Import the image

function GlutenFreeDiet () {
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
      <h1>Gluten Free Diet</h1>
      <div style={boxStyle}>
        <h2>1. Strict Gluten-Free Diet</h2>
        <p><strong>Primary Focus:</strong> Complete elimination of gluten from the diet, necessary for individuals with celiac disease.</p>
        <p><strong>Foods to Eat:</strong> Naturally gluten-free foods like fruits, vegetables, meat, poultry, fish, dairy, beans, legumes, nuts, seeds, and gluten-free grains (e.g., rice, quinoa, millet, buckwheat, corn).</p>
        <p><strong>Foods to Avoid:</strong> All forms of wheat (including spelt, farro, and kamut), barley, rye, triticale, malt, brewer’s yeast, and any foods or ingredients derived from these grains.</p>
        <p><strong>Benefits:</strong> Essential for managing celiac disease, reducing inflammation, and preventing damage to the small intestine.</p>

        <h2>2. Non-Celiac Gluten Sensitivity Diet</h2>
        <p><strong>Primary Focus:</strong> Elimination of gluten-containing foods to manage symptoms similar to celiac disease but without the autoimmune response.</p>
        <p><strong>Foods to Eat:</strong> Same as the strict gluten-free diet.</p>
        <p><strong>Foods to Avoid:</strong> Same as the strict gluten-free diet, though some individuals may tolerate small amounts of gluten without severe reactions.</p>
        <p><strong>Benefits:</strong> Alleviation of symptoms like bloating, abdominal pain, and fatigue without the risk of intestinal damage.</p>

        <h2>3. Wheat Allergy Diet</h2>
        <p><strong>Primary Focus:</strong> Avoidance of wheat and wheat-based products to prevent allergic reactions.</p>
        <p><strong>Foods to Eat:</strong> Gluten-free grains and naturally gluten-free foods that do not contain wheat.</p>
        <p><strong>Foods to Avoid:</strong> Wheat and wheat products (e.g., bread, pasta, pastries). Barley and rye may not need to be avoided unless the individual is also sensitive to these grains.</p>
        <p><strong>Benefits:</strong> Prevention of allergic reactions, which can range from mild to severe (including anaphylaxis).</p>

        <h2>4. Paleo Diet (Gluten-Free Version)</h2>
        <p><strong>Primary Focus:</strong> Mimics the eating patterns of our Paleolithic ancestors, inherently gluten-free.</p>
        <p><strong>Foods to Eat:</strong> Meat, fish, eggs, vegetables, fruits, nuts, seeds, and healthy fats. Avoids grains, legumes, and dairy.</p>
        <p><strong>Foods to Avoid:</strong> All grains, legumes, dairy, refined sugar, and processed foods.</p>
        <p><strong>Benefits:</strong> Weight loss, improved digestion, reduced inflammation, and stable blood sugar levels.</p>

        <h2>5. Whole30 Diet (Gluten-Free Version)</h2>
        <p><strong>Primary Focus:</strong> A 30-day elimination diet to reset eating habits and identify food sensitivities, inherently gluten-free.</p>
        <p><strong>Foods to Eat:</strong> Meat, seafood, eggs, vegetables, fruits, nuts, seeds, and healthy fats.</p>
        <p><strong>Foods to Avoid:</strong> Sugar, alcohol, grains, legumes, dairy, and processed foods.</p>
        <p><strong>Benefits:</strong> Improved digestion, reduced inflammation, and potential identification of food sensitivities.</p>

        <h2>6. Mediterranean Diet (Gluten-Free Version)</h2>
        <p><strong>Primary Focus:</strong> Traditional Mediterranean dietary patterns adapted to exclude gluten.</p>
        <p><strong>Foods to Eat:</strong> Fruits, vegetables, whole gluten-free grains, nuts, seeds, legumes, fish, lean meats, and olive oil.</p>
        <p><strong>Foods to Avoid:</strong> Gluten-containing grains and processed foods.</p>
        <p><strong>Benefits:</strong> Heart health, weight management, and reduced risk of chronic diseases.</p>

        <h2>7. Gluten-Free Vegan Diet</h2>
        <p><strong>Primary Focus:</strong> Plant-based diet excluding all animal products and gluten.</p>
        <p><strong>Foods to Eat:</strong> Fruits, vegetables, gluten-free grains, legumes, nuts, seeds, and plant-based oils.</p>
        <p><strong>Foods to Avoid:</strong> Animal products, gluten-containing grains, and gluten-derived ingredients.</p>
        <p><strong>Benefits:</strong> Ethical eating, weight loss, and reduced risk of chronic diseases.</p>

        <h2>8. Low-FODMAP Diet (Gluten-Free Version)</h2>
        <p><strong>Primary Focus:</strong> Reducing fermentable oligo-, di-, mono-saccharides, and polyols (FODMAPs), along with gluten elimination.</p>
        <p><strong>Foods to Eat:</strong> Low-FODMAP and gluten-free foods like certain fruits, vegetables, meats, and gluten-free grains.</p>
        <p><strong>Foods to Avoid:</strong> High-FODMAP foods (e.g., certain fruits, dairy, legumes) and gluten-containing grains.</p>
        <p><strong>Benefits:</strong> Relief from symptoms of irritable bowel syndrome (IBS) and other functional gut disorders.</p>

        <h2>Benefits of a Gluten-Free Diet</h2>
        <ul>
          <li><strong>Celiac Disease Management:</strong> Prevents autoimmune damage and allows intestinal healing.</li>
          <li><strong>Symptom Relief:</strong> Reduces gastrointestinal symptoms such as bloating, diarrhea, and abdominal pain.</li>
          <li><strong>Improved Nutrient Absorption:</strong> Enhances nutrient absorption by preventing damage to the small intestine.</li>
          <li><strong>Increased Energy Levels:</strong> Reduces fatigue and improves overall energy.</li>
          <li><strong>Skin Health:</strong> Can improve skin conditions like dermatitis herpetiformis.</li>
        </ul>

        <h2>Challenges of a Gluten-Free Diet</h2>
        <ul>
          <li><strong>Nutrient Deficiencies:</strong> Risk of deficiencies in fiber, iron, calcium, and B vitamins if not well planned.</li>
          <li><strong>Social and Economic Impact:</strong> Eating out and socializing can be challenging; gluten-free products can be more expensive.</li>
          <li><strong>Cross-Contamination:</strong> Risk of accidental gluten ingestion due to contamination in food preparation areas.</li>
        </ul>

        <h2>Sample Gluten-Free Meal Plan</h2>
        <h3>Breakfast</h3>
        <ul>
          <li>Greek yogurt with fresh berries and a drizzle of honey.</li>
          <li>Gluten-free granola.</li>
        </ul>

        <h3>Snack</h3>
        <ul>
          <li>Apple slices with almond butter.</li>
        </ul>

        <h3>Lunch</h3>
        <ul>
          <li>Quinoa salad with mixed greens, cherry tomatoes, cucumbers, and grilled chicken.</li>
        </ul>

        <h3>Snack</h3>
        <ul>
          <li>Carrot and celery sticks with hummus.</li>
        </ul>

        <h3>Dinner</h3>
        <ul>
          <li>Grilled salmon with a side of roasted sweet potatoes and steamed broccoli.</li>
        </ul>

        <h3>Dessert</h3>
        <ul>
          <li>Coconut milk ice cream with a sprinkle of toasted almonds.</li>
        </ul>
      </div>
      <BackButton />
    </div>
  );
}

export default GlutenFreeDiet;
