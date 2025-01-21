import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import dhanurasanaImage from './images/dhanurasana.jpg';
import ustrasanaImage from './images/ustrasana.jpg';
import urdhvaDhanurasanaImage from './images/urdhva-dhanurasana.jpg';

function BackbendingYogaAsanas () {
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
      <h1>Backbending Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={dhanurasanaImage} alt="Dhanurasana (Bow Pose)" style={imageStyle} />
        <h2>Exercise 1: Dhanurasana (Bow Pose)</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Lie flat on your stomach (prone position) on a yoga mat or comfortable surface.Keep your arms alongside your body, palms facing up.</p>
        <p>2. Lift and Hold: Bend your knees and reach your hands back towards your ankles or feet.Grasp your ankles or feet firmly with your hands.Inhale deeply as you lift your chest and thighs off the mat, simultaneously pulling your legs back and up.Keep your gaze forward and avoid straining your neck by looking too far upward or downward.</p>
        <p>3. Hold and Release: Hold the pose for 15-30 seconds, or longer if you're comfortable, while maintaining steady breathing.Feel the stretch along the front of your body, particularly in the chest, abdomen, and thighs.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Dhanurasana, begin by lying flat on your stomach (prone position) on a yoga mat or comfortable surface. Keep your arms alongside your body, palms facing up. As you exhale, bend your knees and reach your hands back towards your ankles or feet. Securely grasp your ankles or feet with your hands. On an inhalation, lift your chest and thighs off the mat, simultaneously pulling your legs back and up. Keep your gaze forward to maintain a neutral neck position and avoid straining. Feel the stretch along the front of your body, particularly in the chest, abdomen, and thighs. Hold the pose for 15-30 seconds, or longer if comfortable, while maintaining steady breathing. To release, exhale slowly as you gently lower your chest and thighs back down to the mat, releasing your ankles or feet. Relax in the prone position for a moment, allowing your body to recover. Dhanurasana is a dynamic backbend that stretches and strengthens the entire front of the body, improves posture, and stimulates the organs in the abdomen. Practice with mindfulness and listen to your body's cues to avoid overexertion or strain.</p><br/>
        <a href="https://youtu.be/xm00XMmBbto?si=lEEKmTKrWgqHJSqV" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={ustrasanaImage} alt="Ustrasana (Camel Pose) " style={imageStyle} />
        <h2>Exercise 2: Ustrasana (Camel Pose) </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by kneeling on the mat with your knees hip-width apart.Ensure your shins and tops of your feet are pressing firmly into the mat.Rest your hands on your hips with your fingers pointing downward.</p>
        <p>2. Backbend: Inhale deeply and engage your core muscles to lengthen your spine.As you exhale, slowly begin to arch your back, shifting your gaze upward towards the ceiling.Keep your hips aligned over your knees and press your thighs forward to deepen the stretch in your hips and thighs.</p>
        <p>3. Reach for Your Heels: If comfortable, reach your hands one at a time back towards your heels.Maintain a strong connection between your shins and the mat to support your lower back.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Ustrasana, start by kneeling on the mat with your knees hip-width apart, ensuring your shins and the tops of your feet are pressing firmly into the mat. Rest your hands on your hips with your fingers pointing downward. Inhale deeply and engage your core muscles to lengthen your spine. As you exhale, slowly begin to arch your back, shifting your gaze upward towards the ceiling. Keep your hips aligned over your knees and press your thighs forward to deepen the stretch in your hips and thighs. If comfortable, reach your hands one at a time back towards your heels, maintaining a strong connection between your shins and the mat. If you can reach your heels, gently press your palms into your heels to lift your chest even higher. Hold the pose for 15-30 seconds, or as long as is comfortable for you, breathing deeply and steadily. Focus on opening your chest and heart center while also maintaining stability and balance in the pose. To release, slowly bring your hands back to your hips, engage your core muscles, and lift your torso back up to an upright position. Take a moment to rest in a kneeling position or Child's Pose to counterbalance the backbend. Ustrasana, or Camel Pose, is a powerful backbend that stretches the entire front of the body, including the chest, abdomen, and hip flexors. It also strengthens the back muscles and improves spinal flexibility. Practice mindfully, listen to your body's signals, and avoid straining or forcing the stretch.</p><br/>
        <a href="https://youtu.be/4G8SggLKMbE?si=xQBG_ec_N87VSH4z" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={urdhvaDhanurasanaImage} alt="Urdhva Dhanurasana (Upward Bow or Wheel Pose) " style={imageStyle} />
        <h2>Exercise 3: Urdhva Dhanurasana (Upward Bow or Wheel Pose) </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by lying on your back (supine position) on a yoga mat with your knees bent and feet flat on the floor, hip-width apart.Place your hands on the mat beside your head, fingers pointing towards your shoulders, with your elbows pointing upward.</p>
        <p>2. Lift Into the Pose: On an inhalation, press into your hands and feet as you lift your hips towards the ceiling.Straighten your arms, pushing the floor away from you, and lifting your chest towards the sky.Keep your feet parallel and grounded, with your weight evenly distributed across all four corners of your feet.</p>
        <p>3. Hold and Breathe: Hold the pose for 5-10 breaths, or longer if comfortable, breathing deeply and steadily.Keep your thighs and glutes engaged to support your lower back, and draw your shoulder blades towards each other to open your chest.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Urdhva Dhanurasana, begin by lying on your back (supine position) on a yoga mat with your knees bent and feet flat on the floor, hip-width apart. Place your hands on the mat beside your head, fingers pointing towards your shoulders, with your elbows pointing upward. On an inhalation, press into your hands and feet as you lift your hips towards the ceiling. Straighten your arms, pushing the floor away from you, and lifting your chest towards the sky. Keep your feet parallel and grounded, with your weight evenly distributed across all four corners of your feet. Hold the pose for 5-10 breaths, or longer if comfortable, breathing deeply and steadily. Keep your thighs and glutes engaged to support your lower back, and draw your shoulder blades towards each other to open your chest. Relax your neck and keep your gaze either towards the ceiling or slightly forward, avoiding straining your neck. To release from the pose, tuck your chin towards your chest and slowly lower your body back down to the mat, one vertebra at a time. Rest in Corpse Pose (Shavasana) for a few breaths, allowing your spine to return to its natural alignment. Urdhva Dhanurasana is a deep backbend that stretches the entire front of the body, including the chest, abdomen, and hip flexors. It strengthens the arms, shoulders, legs, and back muscles while also improving spinal flexibility and posture. Practice with caution, listen to your body's signals, and avoid overexertion or strain. If you have any neck or back injuries, consult with a qualified yoga instructor or healthcare professional before attempting this pose.</p><br/>
        <a href="https://youtu.be/DPiW5pN1jQM?si=7NvYWN2ocCG2iHDo" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default BackbendingYogaAsanas;
