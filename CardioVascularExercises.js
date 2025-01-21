import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import runningImage from './images/running.jpg';
import treadmillImage from './images/treadmill.jpg';
import jumpRopeImage from './images/jump-rope.jpg';

function CardiovascularExercises() {
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
      <h1>Cardiovascular Exercises</h1>
      <div style={boxStyle}>
        <img src={runningImage} alt="Running" style={imageStyle} />
        <h2>Exercise 1: Running</h2>
        <h3>Instructions:</h3>
        <p>1. Warm-Up: Start with a 5-10 minute warm-up to prepare your muscles and joints. This can include walking, light jogging, and dynamic stretches (leg swings, arm circles).</p>
        <p>2. Proper Running Form:
            Posture: Keep your back straight, shoulders relaxed, and look ahead rather than down at your feet.
            Arms: Keep your arms bent at about a 90-degree angle and swing them naturally with your stride.
            Feet: Land midfoot and roll through to the toes, avoiding heavy heel striking.</p>
        <p>3. Start Slowly: If you're new to running, start with a combination of walking and running. For example, run for 1 minute and walk for 2 minutes, gradually increasing the running intervals as your fitness improves.</p><br/>
        <h3>Procedure:</h3>
        <p>To begin running, ensure you have appropriate footwear and start with a warm-up, such as brisk walking or dynamic stretches. Maintain proper form—keep your back straight, shoulders relaxed, and arms swinging naturally as you run. Aim for a conversational pace to avoid overexertion, and gradually increase your running duration or intensity over time. Stay hydrated throughout your run and cool down with a slow walk and static stretches afterward. Listen to your body and adjust as needed to prevent injury and maximize the cardiovascular benefits of running.</p><br/>
        <a href="https://youtu.be/ZlhCyrTTT4U?si=O974BXV72QC31zz9" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={treadmillImage} alt="Treadmill" style={imageStyle} />
        <h2>Exercise 2: Treadmill</h2>
        <h3>Instructions:</h3>
        <p>1. Setting Up the Treadmill:
              Adjust Settings: Familiarize yourself with the treadmill controls. Adjust the incline and speed settings to start at a comfortable level.
              Safety Key: Attach the safety key to your clothing. This will stop the treadmill if you fall or need to stop quickly.</p>
        <p>2. Starting the Workout:
              Warm-Up: Begin with a 5-10 minute warm-up at a slow walking pace (2-3 mph) to prepare your muscles and joints for more intense activity.
              Posture: Stand up straight with your shoulders back and head facing forward. Keep your arms relaxed and bent at a 90-degree angle, swinging naturally with your stride.</p>
        <p>3. Running/Walking
              Increase Speed Gradually: Gradually increase the speed to your desired pace. For walking, this might be 3-4 mph. For running, you might increase to 5-7 mph depending on your fitness level.
              Maintain Proper Form: Keep a natural stride and avoid leaning too far forward or back. Land on the middle of your foot and roll through to your toes.</p><br/>
        <h3>Procedure:</h3>
        <p>To start a treadmill workout, set the machine to a comfortable speed and incline. Begin with a 5-10 minute warm-up at a slow pace. Gradually increase the speed for running or walking intervals, maintaining proper form. Adjust the incline for added intensity and use intervals to vary the workout. Cool down with a slow walk and follow up with static stretches. Ensure to stay hydrated and listen to your body to avoid overexertion.</p><br/>
        <a href="https://youtu.be/ufhM_9eLU-s?si=HS64QRvSgNqRsTA2" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={jumpRopeImage} alt="Jump Rope" style={imageStyle} />
        <h2>Exercise 3: Jump Rope</h2>
        <h3>Instructions:</h3>
        <p>1.Proper Form: Maintain a relaxed posture with feet together, elbows close to your sides, and wrists relaxed. Jump just high enough to clear the rope and land softly on the balls of your feet.</p>
        <p>2.Timing and Rhythm: Time your jumps so the rope passes under your feet as you land. Start slowly to establish rhythm, then gradually increase speed while maintaining control.</p>
        <p>3.Consistent Practice: Regularly dedicate time to practicing jumping rope to improve your technique, endurance, and coordination. Start with shorter sessions and gradually increase duration as you progress.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform a jump rope workout, start with a 5-minute warm-up of light jumping or dynamic stretches. Jump rope for 10 minutes, varying your pace and technique to keep it engaging. Finish with a 5-minute cool down, including stretching exercises to relax your muscles.</p><br/>
        <a href="https://youtu.be/1BZM2Vre5oc?si=J-Sq2UtuRtY-pf5d" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default CardiovascularExercises;
