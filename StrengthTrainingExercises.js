import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import squatsImage from './images/squat-image.jpg';
import deadliftsImage from './images/deadlift-image.jpg';
import pushupsImage from './images/pushups-image.jpg';

function StrengthTrainingExercises() {
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
        <a href="https://youtu.be/_fIpXqnAKpk?si=rPk9VQdWEm0BRgWe" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={deadliftsImage} alt="Deadlifts" style={imageStyle} />
        <h2>Exercise 2: Deadlifts</h2>
        <h3>Instructions:</h3>
        <p>1. Proper Setup and Positioning: Begin by standing with your feet shoulder-width apart, toes pointing slightly outward.Position the barbell over the middle of your feet, ensuring it's close to your shins.Bend at your hips and knees to lower yourself to the bar, keeping your back straight and chest up. Grip the bar with your hands just outside your knees, using either a double overhand or mixed grip.</p>
        <p>2. Execution of the Lift: Engage your core and maintain a neutral spine as you drive through your heels to lift the bar off the ground.Keep the bar close to your body throughout the lift, maintaining a straight back and avoiding any rounding or excessive arching.Stand up tall by extending your hips and knees simultaneously until you're fully upright, with your shoulders pulled back and hips pushed forward.</p>
        <p>3. Controlled Descent and Recovery: Lower the bar back to the ground by hinging at your hips and bending your knees while maintaining a straight back.Control the descent of the bar to the ground, ensuring it follows the same path as during the ascent.Reset your position before performing the next repetition, ensuring proper setup and alignment for each lift.</p><br/>
        <h3>Procedure:</h3>
        <p>Performing deadlifts requires a structured procedure to ensure safety and effectiveness. Start by positioning yourself with the barbell over the middle of your feet and your feet shoulder-width apart. Bend at your hips and knees to lower yourself to the bar, maintaining a straight back and chest up. Grip the bar with your hands just outside your knees, using either a double overhand or mixed grip. Engage your core and maintain a neutral spine as you drive through your heels to lift the bar off the ground. Keep the bar close to your body throughout the lift, avoiding any rounding or excessive arching of your back. Stand up tall by extending your hips and knees simultaneously until you're fully upright, with your shoulders pulled back and hips pushed forward. Lower the bar back to the ground by hinging at your hips and bending your knees, ensuring a controlled descent. Reset your position before performing the next repetition, ensuring proper setup and alignment for each lift. Practice this procedure with attention to detail and focus on maintaining proper form to maximize the effectiveness of your deadlifts while minimizing the risk of injury.</p><br/>
        <a href="https://youtu.be/XxWcirHIwVo?si=u9HNPoB9fp8GApJg" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={pushupsImage} alt="Pushups" style={imageStyle} />
        <h2>Exercise 3: Pushups</h2>
        <h3>Instructions:</h3>
        <p>1. Proper Body Alignment: Begin in a plank position with your hands placed slightly wider than shoulder-width apart, fingers pointing forward.Keep your body in a straight line from your head to your heels, engaging your core and glutes to maintain stability.Ensure your hands are positioned directly under your shoulders, and your elbows are slightly bent.</p>
        <p>2. Controlled Descent and Ascent: Lower your body towards the ground by bending your elbows, keeping them close to your sides rather than flaring out.Lower yourself until your chest nearly touches the ground, maintaining a straight body position throughout the movement.Avoid sagging your hips or arching your lower back excessively.</p>
        <p>3. Full Extension at the Top: Push through your palms and extend your elbows to lift your body back to the starting position.Fully extend your arms at the top of the movement without locking out your elbows.Keep your core engaged to prevent your lower back from sagging as you push up.</p><br/>
        <h3>Procedure:</h3>
        <p>Performing pushups effectively requires a structured procedure to ensure proper technique and maximize effectiveness. Begin by assuming a plank position with your hands placed slightly wider than shoulder-width apart and fingers pointing forward. Engage your core muscles to maintain a straight line from your head to your heels, avoiding sagging hips or raised buttocks. Lower your body towards the ground by bending your elbows, keeping them close to your sides rather than flaring out. Descend until your chest nearly touches the ground while maintaining a straight body position. Ensure your elbows are at approximately a 45-degree angle to your body. Push through your palms and extend your elbows to lift your body back to the starting position, fully extending your arms without locking out your elbows. Maintain tension in your core throughout the movement to stabilize your body. Aim for controlled repetitions, focusing on proper form and maintaining tension in the targeted muscles. Gradually increase the number of repetitions or try variations to progress and challenge yourself. Incorporating this procedure into your workout routine will help you perform pushups safely and effectively, building strength in your chest, shoulders, and arms.</p><br/>
        <a href="https://youtu.be/IODxDxX7oi4?si=qgjCbGd723zrHyiT" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default StrengthTrainingExercises;

