import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import jumpingJacksImage from './images/jumping-jacks.jpg';
import jumpSquatsImage from './images/jump-squats.jpg';
import mountainClimbersImage from './images/mountain-climbers.jpg';

function HighIntensityIntervalTraining () {
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
      <h1>HighIntensity Interval Training Exercises</h1>
      <div style={boxStyle}>
        <img src={jumpingJacksImage} alt="Jumping Jacks" style={imageStyle} />
        <h2>Exercise 1: Jumping Jacks</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position Instruction: Stand upright with your feet together and your arms resting at your sides.</p>
        <p>Tip: Keep your posture straight, with your head up, shoulders back, and core engaged.</p>
        <p>2. Jump and Spread Instruction: Jump into the air, spreading your legs shoulder-width apart while simultaneously raising your arms above your head until they almost touch.</p>
        <p>Tip: Maintain a slight bend in your knees when you land to absorb the impact and reduce the risk of injury.</p>
        <p>3. Return to Starting Position Instruction: Jump again, bringing your legs back together and lowering your arms to your sides, returning to the starting position.</p>
        <p>Tip: Keep your movements smooth and controlled, ensuring you land softly on the balls of your feet to protect your joints</p><br/>
        <h3>Procedure:</h3>
        <p>To perform jumping jacks, start by standing upright with your feet together and your arms relaxed at your sides. Begin the exercise by jumping into the air, spreading your legs out to about shoulder-width apart while simultaneously raising your arms above your head until they nearly touch. Make sure to keep your movements fluid and controlled, landing softly on the balls of your feet to minimize impact on your joints. Immediately jump again to bring your legs back together and lower your arms to return to the starting position. It's important to maintain a slight bend in your knees throughout the exercise to help absorb the impact and protect your joints. Breathe rhythmically, inhaling as you jump and spread your legs, and exhaling as you return to the starting position. Perform the movement at a moderate pace initially, gradually increasing speed as you become more comfortable. Aim to do 3 sets of jumping jacks, with each set lasting 20-30 seconds. Take a short rest period between sets to recover. As your fitness improves, you can increase the duration of each set or the number of sets. Jumping jacks are an excellent full-body exercise that can be incorporated into your warm-up routine or used as part of a high-intensity interval training (HIIT) workout to boost cardiovascular fitness and coordination.</p><br/>
        <a href="https://youtu.be/CWpmIW6l-YA?si=DGjWBfPJcZkzblqz" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={jumpSquatsImage} alt="Jump Squats" style={imageStyle} />
        <h2>Exercise 2: Jump Squats</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position Instruction: Stand with your feet shoulder-width apart, toes pointing slightly outward, and arms at your sides.</p>
        <p>Tip: Keep your back straight, chest up, and core engaged to maintain proper posture.</p>
        <p>2. Squat Down Instruction: Lower your body into a squat position by bending your knees and pushing your hips back, as if you are sitting into a chair. Ensure your thighs are parallel to the ground, and your knees do not extend past your toes.</p>
        <p>Tip: Keep your weight on your heels and avoid letting your knees cave inward. Your arms can be extended forward for balance.</p>
        <p>3. Explosive Jump Instruction: From the squat position, push through your heels and explode upward into a jump, fully extending your legs and reaching your arms overhead. Land softly back into the squat position to prepare for the next jump.</p>
        <p>Tip: Absorb the impact of the landing by bending your knees slightly and immediately transitioning into the next squat to maintain continuous movement.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform jump squats, start by standing with your feet shoulder-width apart, toes pointing slightly outward, and arms at your sides, maintaining a straight back, chest up, and engaged core. Lower your body into a squat position by bending your knees and pushing your hips back, ensuring your thighs are parallel to the ground and your knees do not extend past your toes. From the squat position, push through your heels and explode upward into a jump, fully extending your legs and reaching your arms overhead. Land softly back into the squat position to prepare for the next jump. Aim to complete 3 sets of 10-15 repetitions each, with a short rest period between sets. As your strength and endurance improve, you can increase the number of repetitions or sets to further challenge your muscles and boost your fitness level.</p><br/>
        <a href="https://youtu.be/A-cFYWvaHr0?si=XjDnch0ZpMqEN7ET" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={mountainClimbersImage} alt="Mountain Climbers" style={imageStyle} />
        <h2>Exercise 3: Mountain Climbers</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin in a plank position with your hands directly under your shoulders and your body forming a straight line from head to heels. Engage your core muscles to stabilize your body.</p>
        <p>2. Drive Knee to Chest: Lift your right foot off the ground and drive your right knee towards your chest, keeping your core engaged and your hips level. Aim to bring your knee as close to your chest as possible.</p>
        <p>3. Switch Legs: Quickly switch legs by jumping your right foot back to the starting position as you drive your left knee towards your chest. Alternate legs in a fluid and continuous motion, as if you are running in place while in the plank position.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform mountain climbers, start in a plank position with your hands directly under your shoulders and your body forming a straight line from head to heels. Engage your core muscles to stabilize your body. Next, lift your right foot off the ground and drive your right knee towards your chest while keeping your core engaged and your hips level. Aim to bring your knee as close to your chest as possible. Quickly switch legs by jumping your right foot back to the starting position as you drive your left knee towards your chest. Alternate legs in a fluid and continuous motion, as if you are running in place while in the plank position. Continue this movement pattern for 30 seconds to 1 minute, maintaining a steady pace and focusing on proper form. Complete 3 sets with a short rest period between sets. Mountain climbers target the core, shoulders, and legs, providing a cardiovascular workout while also improving coordination and agility. Adjust the intensity by increasing or decreasing the speed of your movements.</p><br/>
        <a href="https://youtu.be/bJgN9jGYEV0?si=7GQSQ6QsFRNM0FN_" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default HighIntensityIntervalTraining;
