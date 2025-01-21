import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import hamstringStretchImage from './images/hamstring-stretch.jpg';
import calfStretchImage from './images/calf-stretch.jpg';
import seatedForwardBendImage from './images/seated-forward-bend.jpg';

function FlexibilityAndCoolDown () {
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
      <h1>Flexibility And CoolDown Exercises</h1>
      <div style={boxStyle}>
        <img src={hamstringStretchImage} alt="Hamstring Stretch " style={imageStyle} />
        <h2>Exercise 1: Hamstring Stretch </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Sit on the floor with one leg extended straight in front of you and the other leg bent with the sole of the foot against the inner thigh of the extended leg.Keep your back straight and your toes pointing towards the ceiling.</p>
        <p>2. Stretching Movement: Lean forward from your hips, reaching towards your toes with your hands.Keep your back flat and avoid rounding your spine.Focus on feeling a gentle stretch along the back of your extended leg.</p>
        <p>3. Hold and Release: Hold the stretch for 15-30 seconds, breathing deeply and relaxing into the stretch.Avoid bouncing or jerking movements, as this can cause injury.Release the stretch slowly and return to the starting position.Repeat the stretch on the other side.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform a hamstring stretch, begin by sitting on the floor with one leg extended straight in front of you and the other leg bent, placing the sole of the foot against the inner thigh of the extended leg. Ensure your back is straight and your toes are pointing towards the ceiling. Next, hinge forward from your hips, reaching towards your toes with your hands. Keep your back flat and avoid rounding your spine to maintain proper form. Focus on feeling a gentle stretch along the back of your extended leg. Hold the stretch for 15-30 seconds, breathing deeply and allowing your muscles to relax into the stretch. Avoid bouncing or jerking movements, as this can increase the risk of injury. Slowly release the stretch and return to the starting position. Repeat the stretch on the other side to ensure both hamstrings are adequately stretched. Incorporating this stretch into your routine can help improve flexibility in the hamstrings, reducing the risk of injury and improving overall mobility.</p><br/>
        <a href="https://youtu.be/oRdXgERlSag?si=BXGyX7N7bzddhEi7" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={calfStretchImage} alt="Calf Stretch" style={imageStyle} />
        <h2>Exercise 2: Calf Stretch </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Stand facing a wall with one foot forward and one foot back.Keep your back leg straight and your heel on the ground.Place your hands against the wall for support.</p>
        <p>2. Stretching Movement: Lean forward, bending your front knee, while keeping your back leg straight.Shift your weight onto your front foot, feeling a stretch in the calf of your back leg.Keep your back heel firmly planted on the ground.</p>
        <p>3. Hold and Release: Hold the stretch for 15-30 seconds, breathing deeply and relaxing into the stretch.Focus on feeling a gentle stretch along the back of your calf muscle.To release, slowly straighten your front leg and return to the starting position.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform a calf stretch, start by standing facing a wall with one foot forward and the other foot back, keeping both feet flat on the ground. Your back leg should be straight, with the heel firmly planted on the ground. Place your hands against the wall at shoulder height for support. Next, lean forward by bending your front knee while keeping your back leg straight, shifting your weight onto your front foot. You should feel a gentle stretch in the calf muscle of your back leg. Hold the stretch for 15-30 seconds, breathing deeply and allowing your muscles to relax into the stretch. Focus on maintaining proper form and feeling the stretch along the back of your calf. To release the stretch, slowly straighten your front leg and return to the starting position. Repeat the stretch on the other leg to ensure both calves are adequately stretched. Incorporating this stretch into your routine can help improve flexibility in the calf muscles, reduce muscle tightness, and alleviate discomfort or pain in the lower legs.</p><br/>
        <a href="https://youtu.be/0xd5KRCQP-s?si=zsXddPkGfGrKX3ES" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={seatedForwardBendImage} alt="Seated Forward Bend" style={imageStyle} />
        <h2>Exercise 3: Seated Forward Bend</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Sit on the floor with your legs extended straight in front of you, feet flexed and toes pointing towards the ceiling.Sit tall with your spine straight and shoulders relaxed.</p>
        <p>2. Stretching Movement: Inhale deeply and lengthen your spine.Exhale as you hinge forward at your hips, leading with your chest.Reach your hands towards your feet or shins, keeping your back flat and avoiding rounding your spine.</p>
        <p>3. Hold and Release: Hold the stretch for 15-30 seconds, focusing on feeling a gentle stretch along the back of your legs and spine.Keep your breath steady and continue to relax into the stretch.To release, inhale as you slowly roll back up to the starting position, stacking your spine one vertebra at a time.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform the seated forward bend, begin by sitting on the floor with your legs extended straight out in front of you and your feet flexed, toes pointing towards the ceiling. Sit tall with your spine straight and shoulders relaxed. As you inhale deeply, lengthen your spine, feeling the crown of your head reaching towards the ceiling. Then, as you exhale, hinge forward at your hips, leading with your chest. Keep your back flat and avoid rounding your spine as you reach your hands towards your feet or shins. Focus on feeling a gentle stretch along the back of your legs and spine. Hold the stretch for 15-30 seconds, breathing deeply and allowing your muscles to relax into the stretch. Keep your breath steady and continue to deepen the stretch with each exhalation. To release, inhale deeply as you slowly roll back up to the starting position, stacking your spine one vertebra at a time. Take your time and move mindfully, being mindful of any sensations or limitations in your body. Incorporating this stretch into your routine can help improve flexibility in the hamstrings, lower back, and spine, reducing tension and promoting relaxation.</p><br/>
        <a href="https://youtu.be/QRIKGOUJILs?si=2d3mBl0Q2CttYtTw" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default FlexibilityAndCoolDown ;
