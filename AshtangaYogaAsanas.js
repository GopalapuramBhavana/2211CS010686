import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import suryaNamaskaraAImage from './images/surya-namaskara-a.jpg';
import padmasanaImage from './images/padmasana.jpg';
import utthitaTrikonasanaImage from './images/utthita-trikonasana.jpg';

function AshtangaYogaAsanas () {
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
      <h1>Ashtanga Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={suryaNamaskaraAImage} alt="Surya Namaskara A (Sun Salutation A)" style={imageStyle} />
        <h2>Exercise 1: Surya Namaskara A (Sun Salutation A) </h2>
        <h3>Instructions:</h3>
        <p>1. Mountain Pose to Forward Bend Instruction: Inhale, sweep your arms overhead into Urdhva Hastasana (Upward Salute). Exhale, hinge at your hips, and fold forward into Uttanasana (Standing Forward Bend), bringing your hands to the floor or shins.
           2. Halfway Lift to Four-Limbed Staff Pose Instruction: Inhale, lift your torso halfway up into Ardha Uttanasana (Halfway Lift) with a flat back. Exhale, place your hands on the mat, step or jump back into Chaturanga Dandasana (Four-Limbed Staff Pose), lowering halfway down with elbows close to your body.
           3. Upward-Facing Dog to Downward-Facing Dog Instruction: Inhale, roll over your toes and lift your chest into Urdhva Mukha Svanasana (Upward-Facing Dog). Exhale, lift your hips up and back into Adho Mukha Svanasana (Downward-Facing Dog) and hold for five breaths.</p><br/>
        <h3>Procedure:</h3>
        <p>Surya Namaskara A (Sun Salutation A) is a dynamic sequence that begins with Tadasana (Mountain Pose), standing tall with feet together and arms at the sides. Inhale deeply as you sweep your arms overhead into Urdhva Hastasana (Upward Salute), and then exhale as you hinge at your hips and fold forward into Uttanasana (Standing Forward Bend), allowing your hands to touch the floor or rest on your shins. Next, inhale and lift your torso halfway up into Ardha Uttanasana (Halfway Lift), creating a flat back. Exhale and place your palms firmly on the mat, stepping or jumping back into Chaturanga Dandasana (Four-Limbed Staff Pose), lowering halfway down with your elbows close to your ribs. Inhale as you roll over your toes and lift your chest into Urdhva Mukha Svanasana (Upward-Facing Dog), extending through the spine and opening the chest. Exhale and lift your hips up and back into Adho Mukha Svanasana (Downward-Facing Dog), forming an inverted V-shape with your body. Hold this position for five breaths, then look forward and either step or jump to the front of the mat, returning to a forward fold. Inhale to rise back up to standing, sweeping your arms overhead once more, and exhale as you bring your hands back down to your sides, completing the sequence in Tadasana.</p><br/>
        <a href="https://youtu.be/1xRX1MuoImw?si=hPRwdp41keL21fkP" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
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
        <a href="https://youtu.be/w_j4lnfRC38?si=fyuT1UJ-1okm_jVZ" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={utthitaTrikonasanaImage} alt="Utthita Trikonasana (Extended Triangle Pose) " style={imageStyle} />
        <h2>Exercise 3: Utthita Trikonasana (Extended Triangle Pose)  </h2>
        <h3>Instructions:</h3>
        <p>1. Positioning the Feet Instruction: Start in Tadasana (Mountain Pose) at the top of your mat. Step your feet wide apart, about 3-4 feet. Turn your right foot out 90 degrees and your left foot slightly inwards. Align the heel of your right foot with the arch of your left foot.
           2. Extending the Arms and Torso Instruction: Inhale and extend your arms out to the sides at shoulder height, palms facing down. Exhale and reach your right arm forward, lengthening through the right side of your torso. Hinge at your right hip and bring your right hand down to your shin, ankle, or the floor outside your right foot.
           3. Final Alignment Instruction: Extend your left arm straight up toward the ceiling, with your gaze following your left thumb. Keep both legs straight and engage your thigh muscles. Ensure your shoulders are stacked, and your chest is open, maintaining a straight line from your left fingertips to your left heel. Hold the pose for several breaths, then inhale to come up and repeat on the other side.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform Utthita Trikonasana (Extended Triangle Pose), begin in Tadasana (Mountain Pose) at the top of your mat and step your feet wide apart, about 3-4 feet. Turn your right foot out 90 degrees and your left foot slightly inward, ensuring the heel of your right foot aligns with the arch of your left foot. Inhale and extend your arms out to the sides at shoulder height, with your palms facing down. As you exhale, reach your right arm forward, lengthening through the right side of your torso, and hinge at your right hip to bring your right hand down to your shin, ankle, or the floor outside your right foot. Simultaneously, extend your left arm straight up towards the ceiling, keeping your gaze fixed on your left thumb. Ensure that both legs are straight and your thigh muscles are engaged, with your shoulders stacked and your chest open, forming a straight line from your left fingertips to your left heel. Hold the pose for several breaths, feeling the stretch along the side of your body, then inhale to come up and repeat the posture on the opposite side.</p><br/>
        <a href="https://youtu.be/S6gB0QHbWFE?si=peQyunlQcj9GNJIm" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default AshtangaYogaAsanas;
