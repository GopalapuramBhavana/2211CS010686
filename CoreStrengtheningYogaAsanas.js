import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import navasanaImage from './images/navasana.jpg';
import plankPoseImage from './images/plank-pose.jpg';
import chaturangaDandasanaImage from './images/chaturanga-dandasana.jpg';

function CoreStrengtheningYogaAsanas () {
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
      <h1>Core Strengthening Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={navasanaImage} alt="Navasana (Boat Pose) " style={imageStyle} />
        <h2>Exercise 1: Navasana (Boat Pose) </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by sitting on the mat with your knees bent and feet flat on the floor.Ensure your spine is long, and your shoulders are relaxed away from your ears.Place your hands beside your hips, with your fingertips pointing towards your feet.</p>
        <p>2. Lift Into the Pose: Lean back slightly and lift your feet off the floor, balancing on your sitting bones.Extend your legs so they are straight and parallel to the floor, forming a V-shape with your torso.Keep your chest lifted and open, and engage your core muscles to support your spine.</p>
        <p>3. Arm Position and Variation: Option 1: Extend your arms parallel to the floor, palms facing each other, or clasp your hands behind your thighs for support.Option 2: For a more challenging variation, extend your arms alongside your legs, reaching forward with your fingertips while keeping your shoulders relaxed.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Navasana, start by sitting on the mat with your knees bent and feet flat on the floor. Keep your spine long and shoulders relaxed. Place your hands beside your hips, fingers pointing towards your feet. Lean back slightly and lift your feet off the floor, balancing on your sitting bones. Straighten your legs to form a V-shape with your torso. You can keep your arms extended parallel to the floor or clasp your hands behind your thighs for support. Alternatively, for a more challenging variation, extend your arms alongside your legs, reaching forward with your fingertips. Hold the pose for 5-10 breaths, focusing on engaging your core muscles and keeping your chest lifted. To release, exhale as you lower your feet back to the floor and return to a seated position. Navasana strengthens the abdominal muscles, improves balance, and stimulates the digestive organs. Practice regularly to build core strength and stability. Listen to your body and modify the pose as needed to ensure comfort and safety.</p><br/>
        <a href="https://youtu.be/pZhqI4SUDmA?si=QOWXvEaeqoJi4pcy" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={plankPoseImage} alt="Plank Pose" style={imageStyle} />
        <h2>Exercise 2: Plank Pose</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by coming onto your hands and knees on the mat, aligning your wrists directly under your shoulders and your knees under your hips.Spread your fingers wide and press firmly into the mat with your palms, creating a strong foundation. Step your feet back one at a time, straightening your legs and extending them behind you so that your body forms a straight line from your head to your heels.</p>
        <p>2. Engage Your Core: Engage your abdominal muscles by drawing your navel in towards your spine.Keep your spine long and neutral, avoiding any sagging or arching in your lower back.Press down through your hands and lift your chest slightly to broaden across your collarbones.</p>
        <p>3. Hold and Breathe: Hold the pose for 30 seconds to one minute, or as long as you can maintain proper form and steady breathing.Keep your gaze slightly forward, allowing the back of your neck to remain long and in line with your spine.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Plank Pose, start by coming onto your hands and knees on the mat, aligning your wrists directly under your shoulders and your knees under your hips. Spread your fingers wide and press firmly into the mat with your palms, creating a strong foundation. Step your feet back one at a time, straightening your legs and extending them behind you so that your body forms a straight line from your head to your heels. Engage your abdominal muscles by drawing your navel in towards your spine, and keep your spine long and neutral, avoiding any sagging or arching in your lower back. Press down through your hands and lift your chest slightly to broaden across your collarbones. Hold the pose for 30 seconds to one minute, or as long as you can maintain proper form and steady breathing. Keep your gaze slightly forward, allowing the back of your neck to remain long and in line with your spine. Breathe deeply and evenly, focusing on maintaining strength and stability throughout your entire body. Plank Pose is excellent for strengthening the core, arms, shoulders, and legs, as well as improving posture and stability. Listen to your body and modify as needed to ensure comfort and safety. If you feel any strain or discomfort, gently lower your knees to the mat and rest in Child's Pose before trying again.</p><br/>
        <a href="https://youtu.be/LrqECYmDexQ?si=HZwUsJxBKlG_b-PT" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={chaturangaDandasanaImage} alt="Chaturanga Dandasana (Four-Limbed Staff Pose) " style={imageStyle} />
        <h2>Exercise 3: Chaturanga Dandasana (Four-Limbed Staff Pose)  </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin in Plank Pose, with your hands shoulder-width apart and wrists directly under your shoulders.Engage your core muscles and extend your legs straight back, balancing on the balls of your feet.Keep your body in a straight line from your head to your heels, and draw your shoulder blades down your back to stabilize your shoulders.</p>
        <p>2. Lowering Down: On an exhale, shift your weight forward slightly, bending your elbows and lowering your body in one straight line towards the mat.Keep your elbows close to your ribs, hugging them in towards your sides, and lower down until your upper arms are parallel to the floor.Keep your gaze forward and your neck in line with your spine, avoiding any drooping or lifting of the head.</p>
        <p>3. Hold and Breathe: Hold Chaturanga Dandasana for a few breaths, maintaining engagement in your core and leg muscles to support your body.Keep your chest broad and your shoulders stable, avoiding any sinking or collapsing in the upper body.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Chaturanga Dandasana (Four-Limbed Staff Pose), begin in Plank Pose, with your hands shoulder-width apart and wrists directly under your shoulders. Engage your core muscles and extend your legs straight back, balancing on the balls of your feet, maintaining a straight line from your head to your heels. On an exhale, shift your weight forward slightly, bending your elbows and lowering your body in one straight line towards the mat. Keep your elbows close to your ribs, hugging them in towards your sides, and lower down until your upper arms are parallel to the floor. Maintain a forward gaze and a neutral neck alignment. Hold the pose for a few breaths, keeping your core engaged and your chest broad, avoiding any sinking or collapsing in the upper body. Focus on maintaining strength and stability throughout your entire body. Chaturanga Dandasana strengthens the arms, shoulders, chest, and core muscles, and helps to develop overall body strength and stability. As you practice, be mindful of your alignment and listen to your body's cues. If needed, modify the pose by lowering your knees to the mat or practicing a supported version with your knees, chest, and chin on the floor.</p><br/>
        <a href="https://youtu.be/1usSRvFYS6I?si=ZYu42xOMApJ_tdpY" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default CoreStrengtheningYogaAsanas;
