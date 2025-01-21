import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-diet.jpg'; // Import the image

function VeganDiet() {
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
      <h1>Vegan Diet</h1>
      <div style={boxStyle}>
        <h2>1. Whole Food Plant-Based Diet</h2>
        <p><strong>Description:</strong> This diet emphasizes whole, minimally processed plant foods and excludes animal products and highly processed foods.</p>
        <p><strong>Focus:</strong> Fruits, vegetables, whole grains, legumes, nuts, and seeds.</p>
        <p><strong>Benefits:</strong> Supports weight loss, heart health, and overall well-being. May reduce the risk of chronic diseases like heart disease, diabetes, and certain cancers.</p>

        <h2>2. Raw Vegan Diet</h2>
        <p><strong>Description:</strong> Followers of this diet consume only raw, uncooked plant foods, usually at least 75% of the diet.</p>
        <p><strong>Focus:</strong> Fresh fruits, vegetables, nuts, seeds, sprouted grains, and legumes.</p>
        <p><strong>Benefits:</strong> May improve digestion, increase energy levels, and provide high levels of vitamins, minerals, and enzymes.</p>

        <h2>3. Junk Food Vegan Diet</h2>
        <p><strong>Description:</strong> While technically vegan, this diet relies heavily on processed vegan foods like mock meats, vegan cheese, and desserts.</p>
        <p><strong>Focus:</strong> Processed vegan substitutes for traditional animal products, as well as refined grains, sugary snacks, and convenience foods.</p>
        <p><strong>Benefits:</strong> May appeal to those transitioning to a vegan diet, but lacks the health benefits of whole food plant-based diets.</p>

        <h2>4. Low-Fat Vegan Diet</h2>
        <p><strong>Description:</strong> This diet restricts the intake of added fats and oils, focusing on whole plant foods that are naturally low in fat.</p>
        <p><strong>Focus:</strong> Fruits, vegetables, whole grains, legumes, and minimal use of nuts, seeds, and avocado.</p>
        <p><strong>Benefits:</strong> Supports weight loss and heart health. May be effective for reducing cholesterol levels and improving insulin sensitivity.</p>

        <h2>5. High-Protein Vegan Diet</h2>
        <p><strong>Description:</strong> This diet emphasizes plant-based sources of protein to meet higher protein needs, especially for athletes or those with increased muscle mass goals.</p>
        <p><strong>Focus:</strong> Legumes, tofu, tempeh, seitan, edamame, quinoa, lentils, and protein-rich vegetables like broccoli and spinach.</p>
        <p><strong>Benefits:</strong> Supports muscle growth and repair, provides sustained energy, and may aid in weight management.</p>

        <h2>6. Gluten-Free Vegan Diet</h2>
        <p><strong>Description:</strong> This diet combines veganism with the elimination of gluten-containing grains, suitable for individuals with gluten sensitivities or celiac disease.</p>
        <p><strong>Focus:</strong> Fruits, vegetables, gluten-free grains (e.g., rice, quinoa, millet), legumes, nuts, seeds, and naturally gluten-free vegan products.</p>
        <p><strong>Benefits:</strong> Supports digestive health, reduces inflammation, and manages symptoms of gluten-related disorders.</p>

        <h2>7. Alkaline Vegan Diet</h2>
        <p><strong>Description:</strong> This diet promotes alkaline-forming foods to maintain the body's pH balance, emphasizing fresh fruits, vegetables, and minimally processed plant foods.</p>
        <p><strong>Focus:</strong> Alkaline foods such as leafy greens, cruciferous vegetables, root vegetables, fruits, nuts, seeds, and alkaline water.</p>
        <p><strong>Benefits:</strong> Claims to improve energy levels, support detoxification, and reduce the risk of chronic diseases by reducing acidity in the body.</p>
      </div>
      <BackButton />
    </div>
  );
}

export default VeganDiet;
