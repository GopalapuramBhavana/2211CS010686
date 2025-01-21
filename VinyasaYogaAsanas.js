import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import adhoMukhaSvanasanaImage from './images/adho-mukha-svanasana.jpg';
import urdhvaMukhaSvanasanaImage from './images/urdhva-mukha-svanasana.jpg';
import virabhadrasanaImage from './images/virabhadrasana.jpg';

function VinyasaYogaAsanas () {
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
      <h1>Vinyasa Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={adhoMukhaSvanasanaImage} alt="Adho Mukha Svanasana (Downward-Facing Dog Pose)" style={imageStyle} />
        <h2>Exercise 1: Adho Mukha Svanasana (Downward-Facing Dog Pose)</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position and Hand Placement Instruction: Begin on your hands and knees in Tabletop position, with your wrists directly under your shoulders and your knees under your hips. Spread your fingers wide, pressing firmly through your palms and fingertips, ensuring even weight distribution across your hands.
           2. Lifting the Hips Instruction: Tuck your toes under and, as you exhale, lift your knees off the floor. Straighten your legs as much as possible, and push your hips up and back, moving into an inverted V-shape. Keep your feet hip-width apart and aim to bring your heels down towards the mat, although they do not have to touch the floor.
           3. Aligning the Spine and Engaging Muscles Instruction: Lengthen your spine by pressing your chest towards your thighs while keeping your head between your upper arms. Engage your quadriceps and gently draw your shoulder blades down your back. Relax your neck and gaze towards your navel or between your feet. Hold the pose for several breaths, focusing on deep, steady breathing.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform Adho Mukha Svanasana (Downward-Facing Dog Pose), begin on your hands and knees in Tabletop position, with your wrists directly under your shoulders and your knees under your hips. Spread your fingers wide, pressing firmly through your palms and fingertips to ensure even weight distribution across your hands. Tuck your toes under and, as you exhale, lift your knees off the floor, straightening your legs as much as possible and pushing your hips up and back to form an inverted V-shape. Keep your feet hip-width apart and work towards bringing your heels down towards the mat, although they do not have to touch the floor. Lengthen your spine by pressing your chest towards your thighs, keeping your head between your upper arms. Engage your quadriceps and gently draw your shoulder blades down your back, relaxing your neck and gazing towards your navel or between your feet. Hold the pose for several breaths, focusing on deep, steady breathing.</p><br/>
        <a href="https://youtu.be/jEIljYmM7rU?si=TGP6GUmFczxKC4V5" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={urdhvaMukhaSvanasanaImage} alt="Urdhva Mukha Svanasana (Upward-Facing Dog Pose)  " style={imageStyle} />
        <h2>Exercise 2: Urdhva Mukha Svanasana (Upward-Facing Dog Pose)  </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position and Hand Placement Instruction: Begin lying face down on your mat with your legs extended straight back, tops of your feet pressing into the mat. Place your hands beside your lower ribs, with your fingers spread wide and your elbows pointing upwards, close to your body.
           2. Lifting the Chest and Legs Instruction: Inhale and press firmly into your hands to straighten your arms, lifting your chest off the mat. Simultaneously, engage your quadriceps and lift your thighs and knees off the mat, supporting your weight on the tops of your feet and your hands. Ensure your shoulders are directly over your wrists.
           3. Aligning the Spine and Opening the Chest Instruction: Roll your shoulders back and lift your chest forward and upward, expanding through the front of your body. Keep your neck long and gaze slightly upward or forward, avoiding any strain. Hold the pose for several breaths, maintaining a steady, deep inhalation and exhalation.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform Urdhva Mukha Svanasana (Upward-Facing Dog Pose), begin by lying face down on your mat with your legs extended straight back and the tops of your feet pressing into the mat. Place your hands beside your lower ribs, with your fingers spread wide and your elbows close to your body, pointing upwards. Inhale deeply and press firmly into your hands to straighten your arms, lifting your chest off the mat. At the same time, engage your quadriceps to lift your thighs and knees off the mat, balancing your weight on the tops of your feet and your hands. Ensure your shoulders are aligned directly over your wrists. Roll your shoulders back and lift your chest forward and upward, expanding through the front of your body. Keep your neck long and your gaze slightly upward or forward, avoiding any strain. Hold the pose for several breaths, maintaining a steady, deep inhalation and exhalation, feeling the stretch and opening in your chest, shoulders, and abdomen.</p><br/>
        <a href="https://youtu.be/cQtfujS-BhY?si=okhVel7qGLW4J-iS" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={ virabhadrasanaImage} alt="Virabhadrasana II (Warrior II Pose)" style={imageStyle} />
        <h2>Exercise 3:  Virabhadrasana II (Warrior II Pose)</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position and Alignment: Begin in Tadasana (Mountain Pose). Step your feet wide apart, about 3-4 feet. Turn your right foot out 90 degrees and your left foot slightly inward. Align the heel of your right foot with the arch of your left foot.
           2. Arm Extension and Knee Bend: Inhale and extend your arms out to the sides at shoulder height, palms facing down. Exhale and bend your right knee, ensuring it is directly over your ankle. Keep your torso upright, shoulders relaxed, and gaze over your right fingertips.
           3. Hold and Breath: Hold the pose for several breaths, maintaining steady, deep inhalations and exhalations. Press firmly into the outer edge of your left foot, engage your core muscles, and feel the strength in your legs. To release, straighten your right leg on an inhale and lower your arms. Repeat on the opposite side.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform Virabhadrasana II (Warrior II Pose), begin in Tadasana (Mountain Pose) at the top of your mat. Step your feet wide apart, about 3-4 feet. Turn your right foot out 90 degrees so your toes point towards the top of the mat, and angle your left foot slightly inward. Align the heel of your right foot with the arch of your left foot. On an inhalation, extend your arms out to the sides at shoulder height, parallel to the floor, with palms facing down. As you exhale, bend your right knee, ensuring it is directly over your ankle and your thigh is parallel to the floor. Keep your shoulders relaxed and directly over your hips, and engage your core for stability. Turn your head to the right and gaze over your right fingertips. Press firmly into the outer edge of your left foot to keep your back leg strong and straight. Hold the pose for several deep breaths, feeling the strength and stability in your legs, the stretch in your groin and hips, and the openness in your chest and arms. To release, straighten your right leg on an inhalation and lower your arms, then repeat the posture on the opposite side.</p><br/>
        <a href="https://youtu.be/CagNyvAFZh4?si=HdJQhVdxpVn6XaEa" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default VinyasaYogaAsanas;
