import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import planksImage from './images/planks.jpg';
import bicycleCrunchesImage from './images/bicycle-crunches.jpg';
import russianTwistsImage from './images/russian-twists.jpg';

function CoreExercises () {
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

  const imageStyle = {
    width: '50%', // 50% width of the box
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
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
      <BackButton />
      <h1>Core Exercises</h1>
      <div style={boxStyle}>
        <img src={planksImage} alt="Planks" style={imageStyle} />
        <h2>Exercise 1: Planks</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by getting into a push-up position on the floor, with your elbows directly beneath your shoulders and your forearms resting on the ground. Your body should form a straight line from your head to your heels. Keep your feet hip-width apart and your toes firmly planted on the floor.</p>
        <p>2. Engage Your Core: Tighten your abdominal muscles, glutes, and thighs to keep your body straight and avoid any sagging or arching in your back. Ensure that your neck is in a neutral position by looking down at the floor.</p>
        <p>3. Hold the Position: Maintain this position for the desired amount of time, typically starting with 20-30 seconds and gradually increasing as your strength improves. Focus on maintaining proper form throughout the duration of the plank, and avoid letting your hips drop or rise.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform a plank, start by positioning yourself on the floor in a push-up stance, with your elbows directly beneath your shoulders and your forearms resting on the ground. Your body should form a straight line from your head to your heels, with your feet hip-width apart and your toes firmly planted on the floor. Engage your core muscles by tightening your abdominal muscles, glutes, and thighs to maintain a straight body alignment, avoiding any sagging or arching of your back. Keep your neck in a neutral position by looking down at the floor. Hold this position for 20-30 seconds initially, focusing on maintaining proper form throughout. Gradually increase the duration as your strength improves, performing 3 sets in total. This exercise effectively strengthens your core, shoulders, and back muscles.</p><br/>
        <a href="https://youtu.be/Ehy8G39d_PM?si=7W7fY804iLwSm00q" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={bicycleCrunchesImage} alt="Bicycle Crunches" style={imageStyle} />
        <h2>Exercise 2: Bicycle Crunches</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Lie flat on your back with your hands behind your head and your legs lifted off the ground, bent at a 90-degree angle. Ensure your lower back is pressed into the floor to engage your core.</p>
        <p>2. Performing the Crunch: Simultaneously bring your right elbow towards your left knee while extending your right leg out straight. Twist your torso so that your shoulder moves towards the knee, not just your elbow.</p>
        <p>3. Alternating Sides: Switch sides by bringing your left elbow towards your right knee while extending your left leg out straight. Continue to alternate sides in a controlled, pedaling motion, ensuring that your movements are smooth and your core remains engaged.</p><br/>
        <h3>Procedure:</h3>
        <p>
        To perform bicycle crunches, start by lying flat on your back with your hands placed behind your head and your legs lifted off the ground, bent at a 90-degree angle. Engage your core by pressing your lower back into the floor. Begin the movement by simultaneously bringing your right elbow towards your left knee while extending your right leg out straight. Twist your torso so that your shoulder moves towards the knee, not just your elbow. Next, switch sides by bringing your left elbow towards your right knee while extending your left leg out straight. Continue alternating sides in a controlled, pedaling motion, ensuring that your movements are smooth and your core remains engaged throughout. Perform 3 sets of 15-20 repetitions per side, focusing on maintaining proper form and controlled movements to effectively target the abdominal muscles.</p><br/>
        <a href="https://youtu.be/Iwyvozckjak?si=47tInY-QYE0hoYrS" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={russianTwistsImage} alt="Russian Twists" style={imageStyle} />
        <h2>Exercise 3: Russian Twists </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Sit on the floor with your knees bent and your feet flat on the ground. Lean back slightly to create a V-shape with your torso and thighs, keeping your back straight. Hold your hands together at your chest or hold a weight or medicine ball with both hands for added resistance.</p>
        <p>2. Twisting Motion: Engage your core muscles and twist your torso to the right, bringing your hands or the weight towards the floor beside your hip. Keep your arms close to your body and move your shoulders, not just your arms, to ensure the twist engages your obliques.</p>
        <p>3. Alternating Sides: Return to the starting position and then twist your torso to the left, bringing your hands or the weight towards the floor beside your left hip. Continue alternating sides in a controlled motion, making sure to keep your core engaged and your back straight throughout the exercise.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform Russian twists, start by sitting on the floor with your knees bent and your feet flat on the ground. Lean back slightly to create a V-shape with your torso and thighs, keeping your back straight. Hold your hands together at your chest or hold a weight or medicine ball with both hands for added resistance. Engage your core muscles and twist your torso to the right, bringing your hands or the weight towards the floor beside your right hip, making sure to move your shoulders and not just your arms. Return to the starting position and then twist your torso to the left, bringing your hands or the weight towards the floor beside your left hip. Continue alternating sides in a controlled motion, ensuring your core remains engaged and your back stays straight throughout the exercise. Perform 3 sets of 15-20 repetitions per side, focusing on proper form and controlled movements to effectively target the oblique muscles. Adjust the intensity by increasing the number of repetitions or using a heavier weight.</p><br/>
        <a href="https://youtu.be/NeAtimSCxsY?si=IX8AjL_wVndglobT" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default CoreExercises;
