import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import rowingImage from './images/rowing.jpg';
import briskWalkingImage from './images/brisk-walking.jpg';
import kickBoxingImage from './images/kick-boxing.jpg';

function Cardio () {
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
      <h1>Cardio Exercises</h1>
      <div style={boxStyle}>
        <img src={rowingImage} alt="Rowing" style={imageStyle} />
        <h2>Exercise 1: Rowing</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Sit on the rowing machine with your feet securely strapped into the footrests. Grab the handle with both hands, palms facing down. Slide forward on the seat until your shins are vertical, your knees are bent, and your body is slightly leaning forward from the hips, keeping your back straight.</p>
        <p>2. Drive Phase: Push off with your legs, extending them while keeping your arms straight and your back flat. Once your legs are almost fully extended, lean back slightly from the hips and pull the handle towards your lower chest. Your elbows should go past your torso as you pull the handle in.</p>
        <p>3. Recovery Phase: Extend your arms back out and hinge forward at the hips. Once the handle passes your knees, bend your knees to slide back to the starting position. Make sure to reverse the drive phase sequence: arms, then body, then legs. Maintain a smooth, continuous motion throughout the exercise.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform rowing on a rowing machine, start by sitting with your feet securely strapped into the footrests and grabbing the handle with both hands, palms facing down. Slide forward on the seat until your shins are vertical, your knees are bent, and your body is slightly leaning forward from the hips, keeping your back straight. Begin the drive phase by pushing off with your legs, extending them while keeping your arms straight and your back flat. As your legs near full extension, lean back slightly from the hips and pull the handle towards your lower chest, with your elbows moving past your torso. For the recovery phase, extend your arms back out and hinge forward at the hips. Once the handle passes your knees, bend your knees to slide back to the starting position. Ensure that the sequence of movements is smooth and continuous, reversing the drive phase: arms, body, then legs. Perform this exercise for 20-30 minutes, focusing on maintaining proper form and a steady pace to effectively engage the muscles and improve cardiovascular fitness.</p><br/>
        <a href="https://youtu.be/dPezGjAhrU0?si=iBGL0kJQq5WPcsvt" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={briskWalkingImage} alt="Brisk Walking" style={imageStyle} />
        <h2>Exercise 2: Brisk Walking</h2>
        <h3>Instructions:</h3>
        <p>1. Warm-Up: Begin by walking at a moderate pace for 5-10 minutes to warm up your muscles and prepare your body for exercise. Swing your arms naturally and maintain a steady rhythm.</p>
        <p>2. Increase Pace: Once warmed up, pick up the pace to a brisk walk. Focus on taking longer strides and increasing your speed to a level where you can feel your heart rate slightly elevated, but you can still carry on a conversation comfortably.</p>
        <p>3. Maintain Form and Intensity: Keep your posture upright, shoulders relaxed, and core engaged throughout the walk. Aim to walk at a pace that challenges you but still allows you to maintain good form. Continue brisk walking for at least 20-30 minutes or longer, depending on your fitness level and goals.</p><br/>
        <h3>Procedure:</h3>
        <p>
        To engage in brisk walking, start by warming up with a moderate-paced walk for 5-10 minutes to prepare your muscles and elevate your heart rate gradually. Once warmed up, transition into a brisk pace, focusing on taking longer strides and increasing your speed while maintaining good posture and relaxed shoulders. Engage your core muscles and swing your arms naturally to enhance the effectiveness of the exercise. Aim for a pace that challenges you but still allows you to carry on a conversation comfortably. Continue brisk walking for at least 20-30 minutes or longer, depending on your fitness level and goals. Throughout the walk, keep your posture upright, shoulders relaxed, and core engaged to ensure proper form and maximize the benefits of the exercise. Finally, cool down with a few minutes of gentle walking and stretching to help prevent muscle soreness and promote flexibility.</p><br/>
        <a href="https://youtu.be/wQrV75N2BrI?si=RW38XdF1CIWjgiMQ" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={kickBoxingImage} alt="Kick Boxing" style={imageStyle} />
        <h2>Exercise 3: Kick Boxing</h2>
        <h3>Instructions:</h3>
        <p>1. Warm-Up: Begin by warming up your body with 5-10 minutes of light cardio, such as jogging in place or skipping rope, to increase your heart rate and loosen up your muscles.</p>
        <p>2. Basic Techniques: Start with basic kickboxing techniques, such as jabs, crosses, hooks, and uppercuts. Practice each movement slowly and deliberately to ensure proper form and technique. Focus on engaging your core muscles and maintaining a stable stance throughout.</p>
        <p>3. Combination Drills: Once you're comfortable with the basic techniques, combine them into drills or combinations. For example, you can throw a jab-cross-hook combination followed by a roundhouse kick. Alternate between punches and kicks, and mix up the rhythm to keep the workout challenging.</p><br/>
        <h3>Procedure:</h3>
        <p>To engage in a kickboxing session, begin by warming up your body with 5-10 minutes of light cardio, such as jogging in place or skipping rope, to elevate your heart rate and loosen up your muscles. Once warmed up, transition into practicing basic kickboxing techniques, including jabs, crosses, hooks, and uppercuts. Execute each movement slowly and deliberately, focusing on proper form, balance, and engaging your core muscles. After mastering the basic techniques, combine them into drills or combinations, alternating between punches and kicks. For instance, you can perform a jab-cross-hook combination followed by a roundhouse kick. Keep the rhythm dynamic and challenging to enhance the effectiveness of your workout. Aim to perform 3 sets of 5-10 minutes each, gradually increasing the intensity and duration as your proficiency improves. Remember to maintain proper form, breathe deeply throughout the session, and cool down with light stretching exercises at the end to promote flexibility and prevent muscle soreness.</p><br/>
        <a href="https://youtu.be/Vve4BVTZ0QU?si=bJbzDD5g2Heb7ge4" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default Cardio;
