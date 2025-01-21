import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import bhujangasanaImage from './images/bhujangasana.jpg';
import dhanurasanaImage from './images/dhanurasana.jpg';
import setuBandhasanaImage from './images/setu-bandhasana.jpg';

function ChestOpeningYogaAsanas () {
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
      <h1>Chest Opening Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={bhujangasanaImage} alt="Bhujangasana (Cobra Pose)" style={imageStyle} />
        <h2>Exercise 3: Bhujangasana (Cobra Pose) </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Lie on your stomach on the mat with your legs extended behind you and the tops of your feet resting on the floor.Place your palms flat on the mat under your shoulders, fingers pointing forward.Elbows should be close to your body, hugging your ribcage.</p>
        <p>2. Lift into the Pose: Inhale deeply and slowly press into your palms to lift your chest and upper body off the mat.Keep your elbows slightly bent and your shoulders relaxed, away from your ears.Engage your back muscles to support the lift, while keeping your pelvis and lower body grounded.</p>
        <p>3. Hold and Release: Hold the pose for a few breaths, gazing gently forward or slightly upward.Keep your neck in a neutral position, avoiding straining or crunching it.To release, exhale as you slowly lower your chest back down to the mat, returning to the starting position.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Bhujangasana, start by lying on your stomach on a yoga mat with your legs extended behind you and the tops of your feet resting on the floor. Place your palms flat on the mat under your shoulders, fingers pointing forward, and elbows tucked close to your body. Inhale deeply and slowly press into your palms to lift your chest and upper body off the mat, keeping your pelvis and lower body grounded. Engage your back muscles to support the lift, while keeping your shoulders relaxed and away from your ears. Hold the pose for a few breaths, gently gazing forward or slightly upward to maintain a neutral neck position. Be mindful not to strain or crunch your neck. To release, exhale as you slowly lower your chest back down to the mat, returning to the starting position. Practice Bhujangasana with awareness of your breath and alignment, focusing on lengthening the spine and opening the chest. This pose strengthens the back muscles, improves flexibility, and stimulates the abdominal organs. Avoid overextending your back or putting excessive pressure on your wrists.</p><br/>
        <a href="https://youtu.be/luTSRGXPEMs?si=cTKhfzKPfrSRLJUN" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={dhanurasanaImage} alt="Dhanurasana (Bow Pose)" style={imageStyle} />
        <h2>Exercise 2: Dhanurasana (Bow Pose)</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Lie flat on your stomach (prone position) on a yoga mat or comfortable surface.Keep your arms alongside your body, palms facing up.</p>
        <p>2. Lift and Hold: Bend your knees and reach your hands back towards your ankles or feet.Grasp your ankles or feet firmly with your hands.Inhale deeply as you lift your chest and thighs off the mat, simultaneously pulling your legs back and up.Keep your gaze forward and avoid straining your neck by looking too far upward or downward.</p>
        <p>3. Hold and Release: Hold the pose for 15-30 seconds, or longer if you're comfortable, while maintaining steady breathing.Feel the stretch along the front of your body, particularly in the chest, abdomen, and thighs.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Dhanurasana, begin by lying flat on your stomach (prone position) on a yoga mat or comfortable surface. Keep your arms alongside your body, palms facing up. As you exhale, bend your knees and reach your hands back towards your ankles or feet. Securely grasp your ankles or feet with your hands. On an inhalation, lift your chest and thighs off the mat, simultaneously pulling your legs back and up. Keep your gaze forward to maintain a neutral neck position and avoid straining. Feel the stretch along the front of your body, particularly in the chest, abdomen, and thighs. Hold the pose for 15-30 seconds, or longer if comfortable, while maintaining steady breathing. To release, exhale slowly as you gently lower your chest and thighs back down to the mat, releasing your ankles or feet. Relax in the prone position for a moment, allowing your body to recover. Dhanurasana is a dynamic backbend that stretches and strengthens the entire front of the body, improves posture, and stimulates the organs in the abdomen. Practice with mindfulness and listen to your body's cues to avoid overexertion or strain.</p><br/>
        <a href="https://youtu.be/xm00XMmBbto?si=2HGql5MeoltWwS1o" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={setuBandhasanaImage} alt="Setu Bandhasana (Bridge Pose)" style={imageStyle} />
        <h2>Exercise 3: Setu Bandhasana (Bridge Pose) </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by lying flat on your back (supine position) on a yoga mat with your knees bent and feet hip-width apart.Ensure your arms are resting alongside your body, palms facing down.</p>
        <p>2. Lift Into the Pose: As you inhale, press firmly into your feet and lift your hips towards the ceiling.Keep your knees directly over your ankles and engage your glutes and hamstrings to lift your hips higher.Optionally, you can interlace your fingers under your back and roll your shoulders underneath you to deepen the stretch in your chest and shoulders.</p>
        <p>3. Hold and Release: Hold the pose for 15-30 seconds, or longer if comfortable, while maintaining steady breathing.Feel the stretch across the chest, front of the shoulders, and hip flexors.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Setu Bandhasana, begin by lying flat on your back on a yoga mat with your knees bent and feet hip-width apart. Keep your arms resting alongside your body with palms facing down. As you inhale, press firmly into your feet and lift your hips towards the ceiling. Engage your glutes and hamstrings to lift your hips higher while keeping your knees directly over your ankles. Optionally, you can interlace your fingers under your back and roll your shoulders underneath you to deepen the stretch in your chest and shoulders. Hold the pose for 15-30 seconds, or longer if comfortable, while maintaining steady breathing. Feel the stretch across the chest, front of the shoulders, and hip flexors. To release, exhale slowly as you gently lower your hips back down to the mat, releasing your interlaced fingers if necessary. Relax in the supine position for a few breaths, allowing your spine to return to neutral. Setu Bandhasana is a gentle backbend that strengthens the back, glutes, and hamstrings while opening the chest and shoulders. It also stimulates the thyroid gland and improves digestion. Practice with awareness and listen to your body's cues to avoid overexertion or strain.</p><br/>
        <a href="https://youtu.be/nRwkgZZ55_A?si=7FX46dLViuvXbv8E" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default ChestOpeningYogaAsanas;
