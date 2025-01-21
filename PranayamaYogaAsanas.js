import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import sukhasanaImage from './images/sukhasana.jpg';
import padmasanaImage from './images/padmasana.jpg';
import siddhasanaImage from './images/siddhasana.jpg';

function PranayamaYogaAsanas() {
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
      <h1>Pranayama Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={sukhasanaImage} alt="Sukhasana (Easy Pose)" style={imageStyle} />
        <h2>Exercise 1: Sukhasana (Easy Pose)  </h2>
        <h3>Instructions:</h3>
        <p>1. Sitting Comfortably: Begin by sitting on the floor or a yoga mat with your legs extended in front of you.Cross your shins, bringing each foot under the opposite knee.Adjust your pelvis so that you're sitting evenly on both sitting bones, allowing your spine to lengthen naturally.</p>
        <p>2. Alignment: Keep your spine tall and straight, but not rigid, allowing for a natural curve in your lower back.Rest your hands on your knees or thighs, palms facing down or up as desired, or place your hands in Chin Mudra with the tips of your index fingers touching the tips of your thumbs.Relax your shoulders down away from your ears, and gently draw your shoulder blades together to open your chest.</p>
        <p>3. Breathing and Relaxation: Close your eyes if comfortable, or soften your gaze downward.Take slow, deep breaths, allowing your belly to expand on the inhale and gently contract on the exhale.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Sukhasana, begin by sitting comfortably on the floor or a yoga mat with your legs extended in front of you. Cross your shins, bringing each foot under the opposite knee. Adjust your pelvis so that you're sitting evenly on both sitting bones, allowing your spine to lengthen naturally. Keep your spine tall and straight, but not rigid, allowing for a natural curve in your lower back. Rest your hands on your knees or thighs, palms facing down or up as desired, or place your hands in Chin Mudra with the tips of your index fingers touching the tips of your thumbs. Relax your shoulders down away from your ears, and gently draw your shoulder blades together to open your chest. Close your eyes if comfortable, or soften your gaze downward. Take slow, deep breaths, allowing your belly to expand on the inhale and gently contract on the exhale. Relax any tension in your face, jaw, and neck, and allow your body to settle into the pose with each breath. Remain in Sukhasana for a few minutes, or as long as feels comfortable for you, focusing on your breath and cultivating a sense of ease and relaxation. Sukhasana is a grounding and centering pose that helps to calm the mind, open the hips, and improve posture.</p><br/>
        <a href="https://youtu.be/ri9B8IzLXIY?si=uryyutmQ3AUD-DGH" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={padmasanaImage} alt="Padmasana (Lotus Pose)" style={imageStyle} />
        <h2>Exercise 2: Padmasana (Lotus Pose) </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by sitting on the floor or a yoga mat with your legs extended in front of you.Bend your right knee and hug it towards your chest, then place your right foot on top of your left thigh with the sole facing upward.Bring your left foot over your right thigh and place it on top of your right thigh with the sole facing upward.</p>
        <p>2. Alignment: Once both feet are in position, allow your knees to gently lower towards the mat, maintaining a tall and upright spine.Your hands can rest on your knees or in a mudra position, such as Gyan Mudra (thumb and index finger touching) or Dhyana Mudra (resting palms on your lap, right hand on top of the left, with thumbs touching).Keep your shoulders relaxed and away from your ears, and your chin parallel to the floor.</p>
        <p>3. Breathing and Relaxation: Close your eyes softly and take slow, deep breaths, allowing your belly to expand on the inhale and contract on the exhale.Focus your attention on your breath and try to relax any tension in your body, particularly in your hips and thighs.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Padmasana (Lotus Pose), begin by sitting on the floor or a yoga mat with your legs extended in front of you. Bend your right knee and hug it towards your chest, then place your right foot on top of your left thigh with the sole facing upward. Bring your left foot over your right thigh and place it on top of your right thigh with the sole facing upward. Your knees should ideally rest on the mat, and your feet should be close to your abdomen. Once both feet are in position, allow your knees to gently lower towards the mat, maintaining a tall and upright spine. Your hands can rest on your knees or in a mudra position, such as Gyan Mudra (thumb and index finger touching) or Dhyana Mudra (resting palms on your lap, right hand on top of the left, with thumbs touching). Keep your shoulders relaxed and away from your ears, and your chin parallel to the floor. Close your eyes softly and take slow, deep breaths, allowing your belly to expand on the inhale and contract on the exhale. Focus your attention on your breath and try to relax any tension in your body, particularly in your hips and thighs.</p><br/>
        <a href="https://youtu.be/w_j4lnfRC38?si=U8Kc12N_9WlPOkwH" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={siddhasanaImage} alt="Siddhasana (Adept Pose) " style={imageStyle} />
        <h2>Exercise 3: Siddhasana (Adept Pose)  </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Sit on the floor or a yoga mat with your legs extended in front of you.Bend your left knee and place the heel of your left foot against your perineum (the area between the genitals and the anus).Keep your right leg extended and place the heel of your right foot against the pubic bone or upper inner thigh of your left leg.</p>
        <p>2. Alignment: Ensure that both knees are touching the floor and that your spine is tall and straight.Rest your hands on your knees or thighs, palms facing down or up as desired.Alternatively, you can place your hands in a mudra position, such as Gyan Mudra (thumb and index finger touching) or Dhyana Mudra (resting palms on your lap, right hand on top of the left, with thumbs touching).</p>
        <p>3. Breathing and Relaxation: Close your eyes softly and take slow, deep breaths, allowing your belly to expand on the inhale and contract on the exhale.Relax any tension in your shoulders, jaw, and facial muscles, and soften your gaze inward.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Siddhasana (Adept Pose), begin by sitting on the floor or a yoga mat with your legs extended in front of you. Bend your left knee and place the heel of your left foot against your perineum (the area between the genitals and the anus). Keep your right leg extended and place the heel of your right foot against the pubic bone or upper inner thigh of your left leg. Ensure that both knees are touching the floor and that your spine is tall and straight. Rest your hands on your knees or thighs, palms facing down or up as desired, or place your hands in a mudra position. Close your eyes softly and take slow, deep breaths, allowing your belly to expand on the inhale and contract on the exhale. Relax any tension in your shoulders, jaw, and facial muscles, and soften your gaze inward. Maintain awareness of your breath and body, and allow yourself to settle into the pose with each breath. Siddhasana is a seated meditation pose that helps to stabilize the mind and cultivate inner stillness. It also stimulates the root chakra and helps to balance energy flow in the body. As you practice Siddhasana, be mindful of your alignment and listen to your body's feedback. If you experience discomfort or strain in your knees or hips, you can modify the pose by sitting on a folded blanket or cushion for added support.</p><br/>
        <a href="https://youtu.be/fhP2IY-l1wI?si=HFFayqeITTerFFo0" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default PranayamaYogaAsanas;
