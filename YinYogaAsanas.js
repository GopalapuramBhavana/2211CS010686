import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import sphinxPoseImage from './images/sphinx-pose.jpg';
import dragonPoseImage from './images/dragon-pose.jpg';
import butterflyPoseImage from './images/butterfly-pose.jpg';

function YinYogaAsanas () {
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
      <h1>Yin Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={sphinxPoseImage} alt="Sphinx Pose" style={imageStyle} />
        <h2>Exercise 1: Sphinx Pose </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Lie on your belly with your legs extended straight behind you and your forearms resting on the mat, elbows directly under your shoulders.
           2. Lift the Chest: Inhale and press firmly into your forearms and palms, lifting your chest and upper torso off the mat. Keep your elbows close to your body and engage your back muscles to support the lift.
           3. Maintain Alignment and Hold: Lengthen your tailbone towards your heels to elongate your lower back. Ensure your shoulders are relaxed away from your ears and your neck is in a neutral position. Hold Sphinx Pose for several breaths, maintaining a gentle extension through your spine and opening through your chest.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Sphinx Pose, begin by lying face down on your yoga mat with your legs extended straight behind you. Place your forearms on the mat, elbows directly under your shoulders, and palms pressing into the ground. As you inhale, gently lift your chest and upper torso off the mat by pressing into your forearms, while keeping your pelvis and legs grounded. Engage your back muscles to support the lift, and lengthen your tailbone towards your heels to create a gentle extension through your lower back. Relax your shoulders away from your ears and keep your neck in a neutral position, neither straining nor dropping. Hold Sphinx Pose for several breaths, allowing your chest to open and your spine to lengthen. To release the pose, exhale slowly and lower your torso back down to the mat, resting your forehead on the mat and relaxing your arms by your sides.</p><br/>
        <a href="https://youtu.be/KWi1YgyxDaQ?si=wHjqPP8Izq-KmrjL" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={ dragonPoseImage} alt=" Dragon Pose " style={imageStyle} />
        <h2>Exercise 2:  Dragon Pose </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position and Setup: Begin in a low lunge with your right foot forward, knee bent at 90 degrees, and your left leg extended straight back with the knee on the floor. Place your hands on the mat inside your right foot, ensuring your right knee is directly above your right ankle.
           2. Deepening the Stretch: As you exhale, gently lower your hips towards the floor, allowing them to sink deeper into the stretch. You can stay on your hands for support or lower down onto your forearms for a deeper hip opening. Keep your chest lifted and your back leg strong.
           3. Hold and Breathe: Hold the pose for several deep breaths, maintaining a steady, calm breath. Focus on relaxing into the stretch, feeling it in your hips and groin. To deepen the stretch, you can gently press your elbows into the mat or use props for support. After holding for a few breaths, gently release and repeat on the other side.</p><br/>
        <h3>Procedure:</h3>
        <p>Dragon Pose, also known as Lizard Pose, begins from a low lunge position with your right foot forward. Start by stepping your right foot outside your right hand, ensuring your knee is directly above your ankle. Extend your left leg straight back with your knee on the mat, keeping your toes untucked. Lower your hips towards the floor, sinking into the stretch while maintaining alignment and stability. You can choose to stay on your hands for support or lower onto your forearms or elbows to deepen the hip opening. Keep your chest lifted and your spine long. Hold the pose for several deep breaths, feeling the stretch in your hips and groin. To release, gently press into your hands, lift your hips, and step back into a plank position or downward-facing dog before repeating on the opposite side. Dragon Pose helps to release tension in the hips, increase flexibility, and promote a sense of grounding and stability.</p><br/>
        <a href="https://youtu.be/c5WKc3MRBJw?si=CiA8HnebWWrt9H6-" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={butterflyPoseImage} alt="Butterfly Pose (Baddha Konasana)" style={imageStyle} />
        <h2>Exercise 3: Butterfly Pose (Baddha Konasana)</h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Sit on your yoga mat with your legs extended straight in front of you. Bend your knees and bring the soles of your feet together, allowing your knees to fall out to the sides.
           2. Spine Alignment and Opening: Hold your feet with your hands, interlacing your fingers around your toes or ankles. Sit up tall, lengthening your spine and drawing your shoulder blades down your back. Keep your chest open.
           3. Gentle Forward Fold: Exhale as you gently fold forward from your hips, keeping your spine long. You can use your elbows to press your knees towards the ground, but avoid forcing them down. Let your head hang naturally and relax your neck.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Butterfly Pose, begin by sitting on your yoga mat with your legs extended straight out in front of you. Bend your knees and bring the soles of your feet together, allowing your knees to drop out to the sides. Hold your feet with your hands, interlacing your fingers around your toes or holding onto your ankles. Sit up tall, lengthening your spine and drawing your shoulder blades down your back to open your chest. As you exhale, gently allow your knees to drop towards the mat, using your elbows to press them down if comfortable, but without forcing them. Keep your spine long and avoid rounding your back. You should feel a stretch in your inner thighs and groin area. If you feel comfortable, you can deepen the stretch by leaning forward from your hips on each exhalation, allowing your torso to move closer towards your feet. Keep your head relaxed and your neck in a neutral position. Hold the pose for several breaths, breathing deeply and evenly. To release the pose, inhale and slowly sit back up, extending your legs forward to release any tension in your hips. Butterfly Pose (Baddha Konasana) helps to open the hips, stretch the inner thighs, and improve flexibility in the groin area.</p><br/>
        <a href="https://youtu.be/kL-81iBucXo?si=R-SpEx6VkBt13ucQ" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default YinYogaAsanas;
