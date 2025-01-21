import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import simhasanaImage from './images/simhasana.jpg';
import jalandharaBandhaImage from './images/jalandhara-bandha.jpg';
import bhujangasanaImage from './images/bhujangasana.jpg';

function JawAndNeckFirmingYogaAsanas () {
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
      <h1>Jaw And Neck Firming Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={simhasanaImage} alt="Simhasana (Lion Pose)" style={imageStyle} />
        <h2>Exercise 1: Simhasana (Lion Pose) </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by sitting on your heels or in a cross-legged position on the floor, ensuring your spine is straight.Place your hands on your knees or thighs, palms facing down.Relax your shoulders and keep your chin parallel to the ground.</p>
        <p>2. Stretch and Roar: Inhale deeply through your nose, filling your lungs with air.As you exhale, open your mouth wide and stick out your tongue as far as possible towards your chin, stretching the muscles in your face and neck.Simultaneously, open your eyes wide and gaze towards the space between your eyebrows (third eye).Roar loudly like a lion, making a "ha" sound as you exhale forcefully.</p>
        <p>3. Hold and Release: Hold the pose for a few seconds, maintaining the stretch in your face, neck, and throat.Feel the release of tension and stress as you continue to breathe deeply.To release, relax your facial muscles and tongue, close your mouth, and return to a neutral position</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Simhasana, start by assuming a comfortable seated position, either kneeling with your buttocks resting on your heels or sitting cross-legged on the floor. Ensure that your spine is straight and your shoulders are relaxed. Place your hands on your knees or thighs with palms facing down. As you inhale deeply through your nose, fill your lungs with air. On the exhale, open your mouth wide, stick out your tongue as far as it can go towards your chin, and simultaneously open your eyes wide. As you exhale forcefully, make a "ha" sound, resembling a lion's roar. Maintain this posture for a few seconds, feeling the stretch in your face, neck, and throat. Focus on deepening your breath and releasing any tension or stress. To release, relax your facial muscles, retract your tongue, close your mouth, and return to a neutral position. Repeat the pose 2-3 times, with each repetition focusing on deep inhalations and powerful exhalations. Simhasana can help relieve tension in the jaw and facial muscles, improve circulation, and promote a sense of relaxation and rejuvenation.</p><br/>
        <a href="https://youtu.be/RmJJ4T_FG5M?si=e9M72KLfS2rRYHMH" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={jalandharaBandhaImage} alt="Jalandhara Bandha (Chin Lock)" style={imageStyle} />
        <h2>Exercise 2: Jalandhara Bandha (Chin Lock)</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Sit comfortably in a cross-legged position or on your heels with your spine straight and shoulders relaxed.Place your hands on your knees or thighs, palms facing down, in a gesture of grounding and stability.</p>
        <p>2. Chin Lock Movement: Inhale deeply through your nose, filling your lungs with air.As you exhale, slowly lower your chin towards your chest, keeping your spine straight and shoulders relaxed.Gently press your chin towards your chest, feeling a stretch in the back of your neck and throat.</p>
        <p>3. Hold and Release: Hold the chin lock for a few seconds, maintaining a steady and comfortable breath.Feel the stretch in the muscles of your neck and throat, allowing any tension to release.To release the chin lock, slowly lift your chin back to a neutral position on an inhale.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Jalandhara Bandha, begin by sitting comfortably in a cross-legged position or on your heels with your spine erect and shoulders relaxed. Place your hands on your knees or thighs with palms facing down. Take a deep inhalation through your nose, filling your lungs completely with air. As you exhale, gradually lower your chin towards your chest, maintaining a straight spine and relaxed shoulders. Gently press your chin towards your chest, feeling a gentle stretch in the back of your neck and throat. Hold this chin lock for a few seconds, maintaining a steady and comfortable breath. Feel the subtle activation in the throat area as you release any tension. To release the chin lock, slowly lift your chin back to a neutral position on an inhale. Practice Jalandhara Bandha with awareness and gentleness, allowing the breath to guide you through the movement. This bandha can help stimulate the thyroid gland, regulate metabolism, and promote a sense of calm and centeredness.</p><br/>
        <a href="https://youtu.be/nt2tIXu-puM?si=Bbl7U3MDC6dUWPXy" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={bhujangasanaImage} alt="Bhujangasana (Cobra Pose)" style={imageStyle} />
        <h2>Exercise 3: Bhujangasana (Cobra Pose) </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Lie on your stomach on the mat with your legs extended behind you and the tops of your feet resting on the floor.Place your palms flat on the mat under your shoulders, fingers pointing forward.Elbows should be close to your body, hugging your ribcage.</p>
        <p>2. Lift into the Pose: Inhale deeply and slowly press into your palms to lift your chest and upper body off the mat.Keep your elbows slightly bent and your shoulders relaxed, away from your ears.Engage your back muscles to support the lift, while keeping your pelvis and lower body grounded.</p>
        <p>3. Hold and Release: Hold the pose for a few breaths, gazing gently forward or slightly upward.Keep your neck in a neutral position, avoiding straining or crunching it.To release, exhale as you slowly lower your chest back down to the mat, returning to the starting position.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Bhujangasana, start by lying on your stomach on a yoga mat with your legs extended behind you and the tops of your feet resting on the floor. Place your palms flat on the mat under your shoulders, fingers pointing forward, and elbows tucked close to your body. Inhale deeply and slowly press into your palms to lift your chest and upper body off the mat, keeping your pelvis and lower body grounded. Engage your back muscles to support the lift, while keeping your shoulders relaxed and away from your ears. Hold the pose for a few breaths, gently gazing forward or slightly upward to maintain a neutral neck position. Be mindful not to strain or crunch your neck. To release, exhale as you slowly lower your chest back down to the mat, returning to the starting position. Practice Bhujangasana with awareness of your breath and alignment, focusing on lengthening the spine and opening the chest. This pose strengthens the back muscles, improves flexibility, and stimulates the abdominal organs. Avoid overextending your back or putting excessive pressure on your wrists.</p><br/>
        <a href="https://youtu.be/fOdrW7nf9gw?si=1A789E4FT2cQhMBk" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default JawAndNeckFirmingYogaAsanas;
