import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import lungesImage from './images/lunges.jpg';
import legPressImage from './images/leg-press.jpg';
import calfRaisesImage from './images/calf-raises.jpg';

function LowerBodyExercises() {
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
      <h1>Lower Body Exercises</h1>
      <div style={boxStyle}>
        <img src={lungesImage} alt="Lunges" style={imageStyle} />
        <h2>Exercise 1: Lunges</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Stand upright with your feet hip-width apart and your hands on your hips or by your sides. Engage your core and maintain a straight posture throughout the exercise.</p>
        <p>2. Step Forward and Lower: Take a step forward with your right foot, landing on your heel first, and lower your body until your right thigh is parallel to the ground and your right knee is at a 90-degree angle. Ensure your right knee is directly above your ankle and your left knee hovers just above the ground.</p>
        <p>3. Return to Starting Position: Push through your right heel to return to the starting position. Repeat the movement with your left leg. Continue alternating legs for the desired number of repetitions.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform lunges as part of a lower body workout, start by standing upright with your feet hip-width apart and your hands on your hips or by your sides. Engage your core and maintain a straight posture throughout the exercise. Take a step forward with your right foot, landing on your heel first, and lower your body until your right thigh is parallel to the ground and your right knee is at a 90-degree angle. Ensure that your right knee is directly above your ankle and your left knee hovers just above the ground. Push through your right heel to return to the starting position. Repeat the movement with your left leg, taking a step forward and lowering your body into the lunge position. Continue alternating legs for the desired number of repetitions, typically 10-12 repetitions per leg, completing 3 sets in total. Lunges effectively target the muscles of the lower body, including the quadriceps, hamstrings, glutes, and calves, while also engaging the core for stability. Adjust the difficulty by adding weights or increasing the number of repetitions as needed. Ensure proper form and controlled movement to maximize the benefits and minimize the risk of injury.</p><br/>
        <a href="https://youtu.be/wrwwXE_x-pQ?si=Ly2F2kkL7ZOFd9lw" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={legPressImage} alt="Leg Press" style={imageStyle} />
        <h2>Exercise 2: Leg Press</h2>
        <h3>Instructions:</h3>
        <p>1. Setup: Sit on the leg press machine with your back and head resting comfortably against the padded support. Place your feet on the platform shoulder-width apart, with your knees bent at about a 90-degree angle. Adjust the seat or platform as needed to ensure proper positioning.</p>
        <p>2. Pressing Movement: Grasp the handles or sides of the seat for stability. Engage your core and push the platform away from you by extending your legs. Keep your feet flat on the platform and avoid locking your knees at the top of the movement. Ensure the movement is controlled and smooth.</p>
        <p>3. Return to Starting Position: Slowly bend your knees to lower the platform back to the starting position, ensuring that your lower back remains in contact with the seat and your knees do not cave inward. Repeat the movement for the desired number of repetitions.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform the leg press as part of a lower body workout, begin by sitting on the leg press machine with your back and head resting comfortably against the padded support. Place your feet shoulder-width apart on the platform with your knees bent at about a 90-degree angle. Ensure your feet are positioned flat on the platform, and adjust the seat or platform if necessary to achieve proper alignment. Grasp the handles or sides of the seat for stability, engage your core, and push the platform away from you by extending your legs, making sure to keep your feet flat and avoid locking your knees at the top of the movement. Slowly bend your knees to lower the platform back to the starting position, maintaining contact between your lower back and the seat and ensuring your knees do not cave inward. Repeat the movement for the desired number of repetitions, typically 10-15 reps per set, completing 3 sets in total. Focus on controlled and smooth movements to effectively target the muscles of the lower body, including the quadriceps, hamstrings, glutes, and calves, and adjust the weight according to your strength and fitness level.</p><br/>
        <a href="https://youtu.be/Z2o8z4v0lCc?si=q9yxNkAePCWpJhkU" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={calfRaisesImage} alt="Calf Raises" style={imageStyle} />
        <h2>Exercise 3: Calf Raises</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Stand upright with your feet hip-width apart, toes pointing forward. You can hold onto a stable surface, such as a wall or the back of a chair, for balance if needed. Keep your core engaged and your posture straight throughout the exercise.</p>
        <p>2. Raising Up: Slowly lift your heels off the ground by pressing through the balls of your feet. Rise up as high as possible, coming onto your toes, and hold the top position for a brief moment to fully engage your calf muscles.</p>
        <p>3. Lowering Down: Gradually lower your heels back to the starting position in a controlled manner, ensuring that you do not let your heels touch the ground completely between repetitions. This helps maintain tension in the calves throughout the exercise.</p><br/>
        <h3>Procedure:</h3>
        <p>
        To perform calf raises as part of a lower body workout, start by standing upright with your feet hip-width apart and your toes pointing forward. You can hold onto a stable surface, such as a wall or the back of a chair, for balance if needed. Keep your core engaged and maintain a straight posture throughout the exercise. Slowly lift your heels off the ground by pressing through the balls of your feet, rising up onto your toes as high as possible. Hold the top position for a brief moment to fully engage your calf muscles. Gradually lower your heels back to the starting position in a controlled manner, ensuring that your heels do not touch the ground completely between repetitions to maintain tension in the calves. Repeat the movement for 15-20 repetitions, completing 3 sets in total. To increase the difficulty, you can perform the exercise on one leg at a time or add weights. Focus on controlled and smooth movements to effectively target the calf muscles.</p><br/>
        <a href="https://youtu.be/HmgXnST4Mdw?si=UDUq_fLGasCSLXIm" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default LowerBodyExercises;
