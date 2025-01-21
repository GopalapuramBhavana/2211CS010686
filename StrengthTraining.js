import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import squatsImage from './images/squat-image.jpg';
import planksImage from './images/planks.jpg';
import hangingLegRaisesImage from './images/hanging-leg-raises.jpg';

function StrengthTraining() {
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
      <h1>Strength Training Exercises</h1>
      <div style={boxStyle}>
        <img src={squatsImage} alt="Squats" style={imageStyle} />
        <h2>Exercise 1: Squats</h2>
        <h3>Instructions:</h3>
        <p>1. Proper Form: Stand with your feet shoulder-width apart, toes pointing slightly outward.Engage your core, keep your chest up, and maintain a neutral spine throughout the movement.Lower your body by bending your knees and hips, as if sitting back into a chair, while keeping your weight on your heels.</p>
        <p>2. Depth and Range of Motion: Aim to squat until your thighs are parallel to the ground or slightly below, ensuring a full range of motion.Keep your knees aligned with your toes, preventing them from collapsing inward.</p>
        <p>3. Controlled Movement and Breathing: Lower into the squat position slowly and with control, maintaining tension in your muscles.Exhale as you push through your heels to return to the starting position, fully extending your hips and knees.</p><br/>
        <h3>Procedure:</h3>
        <p>Performing squats effectively involves a structured procedure to ensure proper technique and safety. Start by standing with your feet shoulder-width apart, toes slightly turned out, and your chest up. Engage your core muscles to stabilize your spine throughout the movement. As you initiate the squat, hinge at your hips and bend your knees, lowering your body down as if sitting back into a chair. Keep your weight on your heels and ensure your knees track in line with your toes to prevent inward collapsing. Aim to squat until your thighs are parallel to the ground or slightly below, ensuring a full range of motion. Maintain control throughout the descent, avoiding any rapid movements or bouncing at the bottom position. Once you reach the desired depth, exhale and push through your heels to return to the starting position, fully extending your hips and knees. Remember to keep your chest up and maintain proper alignment of your spine throughout the entire movement. Practice this procedure with focus and attention to detail to maximize the effectiveness of your squats while minimizing the risk of injury.</p><br/>
        <a href="https://youtu.be/YaXPRqUwItQ?si=tZJUa-UG-n3e9Ci8" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={planksImage} alt="Planks" style={imageStyle} />
        <h2>Exercise 2: Planks</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by getting into a push-up position on the floor, with your elbows directly beneath your shoulders and your forearms resting on the ground. Your body should form a straight line from your head to your heels. Keep your feet hip-width apart and your toes firmly planted on the floor.</p>
        <p>2. Engage Your Core: Tighten your abdominal muscles, glutes, and thighs to keep your body straight and avoid any sagging or arching in your back. Ensure that your neck is in a neutral position by looking down at the floor.</p>
        <p>3. Hold the Position: Maintain this position for the desired amount of time, typically starting with 20-30 seconds and gradually increasing as your strength improves. Focus on maintaining proper form throughout the duration of the plank, and avoid letting your hips drop or rise.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform a plank, start by positioning yourself on the floor in a push-up stance, with your elbows directly beneath your shoulders and your forearms resting on the ground. Your body should form a straight line from your head to your heels, with your feet hip-width apart and your toes firmly planted on the floor. Engage your core muscles by tightening your abdominal muscles, glutes, and thighs to maintain a straight body alignment, avoiding any sagging or arching of your back. Keep your neck in a neutral position by looking down at the floor. Hold this position for 20-30 seconds initially, focusing on maintaining proper form throughout. Gradually increase the duration as your strength improves, performing 3 sets in total. This exercise effectively strengthens your core, shoulders, and back muscles.</p><br/>
        <a href="https://youtu.be/ASdvN_XEl_c?si=dlJN1zSFxhGkAsZ0" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={hangingLegRaisesImage} alt="Hanging Leg Raises" style={imageStyle} />
        <h2>Exercise 3: Hanging Leg Raises</h2>
        <h3>Instructions:</h3>
        <p>1. Proper Body Alignment: Begin in a plank position with your hands placed slightly wider than shoulder-width apart, fingers pointing forward.Keep your body in a straight line from your head to your heels, engaging your core and glutes to maintain stability.Ensure your hands are positioned directly under your shoulders, and your elbows are slightly bent.</p>
        <p>2. Controlled Descent and Ascent: Lower your body towards the ground by bending your elbows, keeping them close to your sides rather than flaring out.Lower yourself until your chest nearly touches the ground, maintaining a straight body position throughout the movement.Avoid sagging your hips or arching your lower back excessively.</p>
        <p>3. Full Extension at the Top: Push through your palms and extend your elbows to lift your body back to the starting position.Fully extend your arms at the top of the movement without locking out your elbows.Keep your core engaged to prevent your lower back from sagging as you push up.</p><br/>
        <h3>Procedure:</h3>
        <p>Hanging leg raises are an effective exercise for building core strength and enhancing abdominal muscles. To perform hanging leg raises, start by finding a sturdy pull-up bar. Grip the bar with both hands, keeping your arms fully extended and your body hanging freely. Ensure your grip is firm and your hands are shoulder-width apart. Begin the movement by engaging your core muscles and slowly raising your legs together in a controlled manner. Keep your legs straight and lift them until they are parallel to the ground or higher, forming a 90-degree angle with your torso. Hold this position briefly, focusing on squeezing your abdominal muscles. Then, gradually lower your legs back to the starting position, maintaining control throughout the descent. Avoid using momentum or swinging your body to ensure the exercise targets the core effectively. Repeat for the desired number of repetitions, maintaining proper form to maximize the benefits and minimize the risk of injury.</p><br/>
        <a href="https://youtu.be/Pr1ieGZ5atk?si=ftbfyDqrkCp28kCT" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default StrengthTraining;

