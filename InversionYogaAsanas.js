import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import sirsasanaImage from './images/sirsasana.jpg';
import sarvangasanaImage from './images/sarvangasana.jpg';
import adhoMukhaVrksasanaImage from './images/adho-mukha-vrksasana.jpg';

function InversionYogaAsanas () {
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
      <h1>Inversion Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={sirsasanaImage} alt="Sirsasana (Headstand)" style={imageStyle} />
        <h2>Exercise 1: Sirsasana (Headstand)  </h2>
        <h3>Instructions:</h3>
        <p>1. Setting Up the Foundation: Start by kneeling on the floor. Interlace your fingers and place your forearms on the mat, ensuring your elbows are shoulder-width apart. Create a firm base by forming a triangle with your forearms and hands. Place the top of your head on the floor, cradled by the interlaced fingers, so your head and forearms form a stable tripod. This foundation is crucial for balance and support during the headstand.
           2. Lifting into Position: Tuck your toes under and lift your knees off the ground, straightening your legs to come into a Dolphin Pose. Slowly walk your feet towards your head, raising your hips towards the ceiling until they are directly above your shoulders. Engage your core muscles to stabilize your body. Once your hips are above your shoulders, bend your knees and draw them towards your chest. Then, with control, extend your legs upward, straightening them fully to align your body from head to toes.
           3. Holding and Exiting the Pose: Maintain the headstand by keeping your core engaged, legs active, and body aligned. Focus on a point in front of you to help with balance. Hold the pose for several breaths, or as long as comfortable, without straining your neck or back. To come out of the headstand, slowly bend your knees and lower your legs back towards your chest. Gradually bring your feet to the floor, returning to the Dolphin Pose. Finally, rest in Child's Pose to allow your body to recover and your blood circulation to normalize.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform Sirsasana (Headstand), begin by kneeling on the floor and interlacing your fingers, placing your forearms on the mat with your elbows shoulder-width apart. Form a stable base by creating a triangle with your forearms and hands. Place the top of your head on the floor, cradled by your interlaced fingers. Tuck your toes under and lift your knees off the ground, straightening your legs into a Dolphin Pose. Gradually walk your feet towards your head, raising your hips towards the ceiling until they are directly above your shoulders. Engage your core for stability. Once your hips are positioned over your shoulders, bend your knees and draw them towards your chest. Then, with control, extend your legs upward, straightening them fully to align your body from head to toes. Maintain the headstand by keeping your core engaged and legs active. To exit, slowly bend your knees and lower your legs back towards your chest, gradually bringing your feet to the floor, and return to Dolphin Pose. Finally, rest in Child's Pose to allow your body to recover.</p><br/>
        <a href="https://youtu.be/Z856ILtW-1s?si=GhhNmf3tTog-koVH" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={sarvangasanaImage} alt="Sarvangasana (Shoulder Stand)" style={imageStyle} />
        <h2>Exercise 2: Sarvangasana (Shoulder Stand)</h2>
        <h3>Instructions:</h3>
        <p>1. Setting Up the Pose: Lie flat on your back on a yoga mat. Keep your legs together and arms alongside your body with palms facing down. Press your arms and palms into the mat, and use your abdominal muscles to lift your legs up towards the ceiling until they are at a 90-degree angle to the floor. From here, continue to lift your hips and back off the ground, supporting your lower back with your hands as you move into a shoulder stand.
           2. Aligning and Lifting: Once your hips are off the ground and you are supporting your back with your hands, walk your hands up your back towards your shoulder blades to provide better support. Ensure that your elbows are shoulder-width apart and pressed firmly into the mat. Straighten your legs and extend them upwards, making sure your body forms a straight line from your shoulders to your toes. Keep your neck in a neutral position, avoiding any turning of the head to prevent strain.
           3. Holding and Exiting the Pose: Hold the shoulder stand position by engaging your core and leg muscles, keeping your body stable and aligned. Breathe deeply and maintain the pose for several breaths, or as long as is comfortable. To exit the pose, slowly bend your knees towards your forehead, gradually lowering your back and hips to the mat with control. Lower your legs back down to the ground, one vertebra at a time, until you are lying flat on your back. Rest for a few moments in Savasana (Corpse Pose) to allow your body to recover.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform Sarvangasana (Shoulder Stand), begin by lying flat on your back on a yoga mat with your legs together and arms alongside your body, palms facing down. Press your arms and palms into the mat and engage your abdominal muscles to lift your legs towards the ceiling until they form a 90-degree angle with the floor. Continue lifting your hips and back off the ground, supporting your lower back with your hands as you move into the shoulder stand. Walk your hands up your back towards your shoulder blades for better support, ensuring your elbows are shoulder-width apart and pressed firmly into the mat. Straighten your legs and extend them upwards, aligning your body from shoulders to toes, while keeping your neck neutral to avoid strain. Hold the position by engaging your core and leg muscles, breathing deeply and maintaining stability. To exit, slowly bend your knees towards your forehead and gradually lower your back and hips to the mat with control. Lower your legs back down until you are lying flat on your back and rest in Savasana (Corpse Pose) for a few moments to allow your body to recover.</p><br/>
        <a href="https://youtu.be/g3wvIPXZ-Qo?si=PbtEnaDu2WabvKQ7" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={adhoMukhaVrksasanaImage} alt="Adho Mukha Vrksasana (Handstand)" style={imageStyle} />
        <h2>Exercise 3: Adho Mukha Vrksasana (Handstand) </h2>
        <h3>Instructions:</h3>
        <p>1. Preparing and Positioning: Start in a downward-facing dog position, with your hands shoulder-width apart and your feet hip-width apart. Ensure your hands are firmly planted on the mat with your fingers spread wide for stability. Walk your feet closer to your hands to shorten the distance, bringing your shoulders over your wrists. This positioning is crucial for preparing your body for the handstand.
           2. Engaging and Lifting: Shift your weight onto your hands, ensuring your arms are strong and stable. Lift one leg towards the ceiling, keeping it straight and engaged. This leg will serve as your lead leg. Bend the knee of your standing leg and, with a controlled and powerful movement, kick up with your standing leg while simultaneously pushing off the ground. As your legs come together in the air, engage your core muscles to stabilize your body and maintain balance. Focus on keeping your body aligned and your gaze between your hands.
           3. Balancing and Exiting: Once in the handstand position, keep your legs together and your toes pointed. Maintain engagement in your core and legs to hold the pose. Breathe deeply and evenly, focusing on your balance and alignment. To exit the handstand, gently lower one leg back down to the ground, followed by the other leg, returning to a downward-facing dog position. Take a few moments to rest in child's pose to allow your body to recover</p><br/>
        <h3>Procedure:</h3>
        <p>To perform Adho Mukha Vrksasana (Handstand), begin in a downward-facing dog position with your hands shoulder-width apart and feet hip-width apart. Ensure your hands are firmly planted on the mat with fingers spread wide for stability. Walk your feet closer to your hands to bring your shoulders over your wrists. Shift your weight onto your hands, keeping your arms strong and stable. Lift one leg towards the ceiling, keeping it straight and engaged. This leg will serve as your lead leg. Bend the knee of your standing leg and kick up with controlled power while pushing off the ground. As your legs come together in the air, engage your core muscles to stabilize and maintain balance, keeping your body aligned and your gaze between your hands. To exit, gently lower one leg back down to the ground, followed by the other, returning to a downward-facing dog position. Finish by resting in Child's Pose to allow your body to recover.</p><br/>
        <a href="https://youtu.be/9u6wuuODdZo?si=E-gwhsQNn00FpOiJ" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default InversionYogaAsanas;
