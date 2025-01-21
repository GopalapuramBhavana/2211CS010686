import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import benchPressImage from './images/bench-press.jpg';
import pullUpsImage from './images/pull-ups.jpg';
import dumbbellRowsImage from './images/dumbbell-rows.jpg';

function UpperBodyExercises() {
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
      <h1>Upper Body Exercises</h1>
      <div style={boxStyle}>
        <img src={benchPressImage} alt="Bench Press" style={imageStyle} />
        <h2>Exercise 1: Bench Press</h2>
        <h3>Instructions:</h3>
        <p>1. Setup: Lie flat on a bench with your feet planted firmly on the ground. Grip the barbell with hands slightly wider than shoulder-width apart, palms facing away from you. Position the barbell over your mid-chest, arms fully extended.</p>
        <p>2. Execution: Lower the barbell towards your chest in a controlled manner, keeping your elbows close to your body. Lower until the barbell lightly touches your chest or hovers just above it.</p>
        <p>3. Press: Press the barbell back up to the starting position, fully extending your arms without locking your elbows. Keep your back flat on the bench and engage your chest, shoulders, and triceps throughout the movement.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform the bench press, lie flat on a bench with your feet planted firmly on the ground and your back pressed against the bench. Grip the barbell with your hands slightly wider than shoulder-width apart, palms facing away from you. Lift the barbell off the rack and position it over your mid-chest with your arms fully extended. Lower the barbell towards your chest in a controlled manner, keeping your elbows close to your body. Lower until the barbell lightly touches your chest or hovers just above it. Once at the bottom of the movement, press the barbell back up to the starting position by extending your arms, while keeping your back flat on the bench and engaging your chest, shoulders, and triceps. Perform the exercise for the desired number of repetitions, typically 8-12 reps for 3 sets, ensuring proper form and controlled movement throughout. Adjust the weight according to your strength and fitness level, and always use a spotter for safety when lifting heavy weights.</p><br/>
        <a href="https://youtu.be/rxD321l2svE?si=nQzLP8l8iOuPcFYn" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={pullUpsImage} alt="Pull Ups" style={imageStyle} />
        <h2>Exercise 2: Pull Ups</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Grip the pull-up bar with your hands slightly wider than shoulder-width apart, palms facing away from you. Hang freely with your arms fully extended, and engage your core muscles to stabilize your body.</p>
        <p>2. Pull Yourself Up: Initiating the movement from your back muscles, pull your body upward until your chin clears the bar. Keep your elbows close to your body and focus on squeezing your shoulder blades together at the top of the movement.</p>
        <p>3. Lower Yourself Down: Slowly lower your body back to the starting position with control, fully extending your arms. Avoid swinging or using momentum to complete the repetition.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform pull-ups, start by gripping a pull-up bar with your hands slightly wider than shoulder-width apart, palms facing away from you. Hang freely from the bar with your arms fully extended, and engage your core muscles to stabilize your body. Initiate the movement by pulling yourself upward, focusing on using your back muscles to lift your body towards the bar. Keep your elbows close to your body and aim to bring your chin above the bar. Once at the top of the movement, slowly lower yourself back down to the starting position with control, fully extending your arms. Avoid swinging or using momentum to complete the repetition. Repeat the movement for the desired number of repetitions, typically 5-10 reps for 3 sets. Adjust the difficulty by using assistance bands or changing the grip width. Pull-ups primarily target the muscles of the back, including the latissimus dorsi, as well as the biceps and shoulders. Ensure proper form and technique throughout the exercise to maximize effectiveness and minimize the risk of injury.</p><br/>
        <a href="https://youtu.be/jFmCrA6fo78?si=fQUjLydpngXyU0wm" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={dumbbellRowsImage} alt="Dumbbell Rows" style={imageStyle} />
        <h2>Exercise 3: Dumbbell Rows</h2>
        <h3>Instructions:</h3>
        <p>1. Setup: Stand with your feet shoulder-width apart, holding a dumbbell in each hand with a neutral grip (palms facing your body). Hinge at your hips to lean forward until your torso is almost parallel to the ground. Let the dumbbells hang directly beneath your shoulders with your arms fully extended.</p>
        <p>2. Rowing Motion: Engage your core muscles to stabilize your spine. Pull the dumbbells up towards your ribcage, leading with your elbows and keeping them close to your body. Squeeze your shoulder blades together at the top of the movement to fully engage your back muscles.</p>
        <p>3. Lowering Phase: Slowly lower the dumbbells back to the starting position, fully extending your arms. Maintain control throughout the movement to avoid swinging or using momentum.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform dumbbell rows, begin by standing with your feet shoulder-width apart, holding a dumbbell in each hand with a neutral grip (palms facing your body). Hinge at your hips to lean forward until your torso is nearly parallel to the ground, keeping your back straight and core engaged. Let the dumbbells hang directly beneath your shoulders with your arms fully extended.</p>
        <p>Next, engage your core muscles to stabilize your spine. Pull one dumbbell up towards your ribcage, leading with your elbow and keeping it close to your body. Focus on squeezing your shoulder blade towards your spine at the top of the movement to fully engage your back muscles.</p>
        <p>Lower the dumbbell back to the starting position in a controlled manner, fully extending your arm. Repeat the movement on the opposite side. Continue alternating sides for the desired number of repetitions, typically 8-12 reps per side for 3 sets.</p>
        <p>Ensure that you maintain proper form throughout the exercise, avoiding any swinging or momentum. Adjust the weight of the dumbbells as needed to challenge your muscles while maintaining proper technique. Dumbbell rows primarily target the muscles of the upper back, including the latissimus dorsi and rhomboids, as well as the biceps and shoulders.</p><br/>
        <a href="https://youtu.be/-koP10y1qZI?si=25oOjpHc6M4ySmya" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default UpperBodyExercises;
