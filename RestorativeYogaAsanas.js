import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import savasanaImage from './images/savasana.jpg';
import anandaBalasanaImage from './images/ananda-balasana.jpg';
import viparitaKaraniImage from './images/viparita-karani.jpg';

function RestorativeYogaAsanas () {
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
      <h1>Restorative Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={savasanaImage} alt="Savasana (Corpse Pose)" style={imageStyle} />
        <h2>Exercise 1: Savasana (Corpse Pose) </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Lie flat on your back on a yoga mat or comfortable surface.Extend your legs straight out in front of you, allowing them to relax completely.Keep your arms by your sides, palms facing up, and fingers naturally curled.</p>
        <p>2. Relaxation: Close your eyes gently and soften your facial muscles.Take a few deep breaths, inhaling through your nose and exhaling through your mouth, allowing any tension to melt away.Scan your body from head to toe, consciously releasing any areas of tension or tightness.</p>
        <p>3. Mindful Awareness: Bring your attention to your breath, noticing the natural rhythm of inhalation and exhalation.Allow your thoughts to come and go without judgment, simply observing them as they arise and then gently bringing your focus back to your breath.</p><br/>
        <h3>Procedure:</h3>
        <p>Savasana, also known as Corpse Pose, is typically practiced at the end of a yoga session to promote deep relaxation and integration of the benefits of the practice. To begin, lie flat on your back on a yoga mat or comfortable surface. Extend your legs straight out in front of you, allowing them to relax completely. Keep your arms by your sides, palms facing up, and fingers naturally curled. Close your eyes gently and soften your facial muscles. Take a few deep breaths, inhaling through your nose and exhaling through your mouth, allowing any tension to melt away. Throughout the pose, maintain a sense of passive awareness, allowing thoughts to come and go without becoming attached to them. Bring your attention to your breath, noticing the natural rhythm of inhalation and exhalation. Allow yourself to remain in this state of deep relaxation and mindful awareness for 5-10 minutes, or longer if desired, allowing yourself to fully surrender and let go. Savasana is a powerful practice for reducing stress, calming the mind, and promoting overall well-being.</p><br/>
        <a href="https://youtu.be/ZkyN4Dy4kO0?si=g8Ht64390Jm4W45l" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={anandaBalasanaImage} alt="Ananda Balasana (Happy Baby Pose)" style={imageStyle} />
        <h2>Exercise 2: Ananda Balasana (Happy Baby Pose) </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by lying on your back on a yoga mat or comfortable surface.Bend your knees towards your chest and bring them apart, keeping your feet together.Reach your hands through the inside of your thighs and grab the outside edges of your feet or ankles.</p>
        <p>2. Gentle Pull: With your hands holding onto your feet or ankles, gently pull your knees towards your armpits.Keep your tailbone grounded on the mat and your lower back relaxed.If you feel comfortable, you can gently rock side to side or forward and backward to massage your spine.</p>
        <p>3. Relaxation: As you settle into the pose, allow your shoulders to relax and release any tension in your face and jaw.Close your eyes if it feels comfortable, and focus on deep, steady breaths.Stay in the pose for 30 seconds to 1 minute, or longer if it feels good for you, breathing deeply and enjoying the stretch.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Ananda Balasana, or Happy Baby Pose, begin by lying on your back on a yoga mat or soft surface. Bend your knees towards your chest and then separate them wider than your torso. Reach your hands through the insides of your thighs and hold onto the outside edges of your feet or ankles. With a gentle grip, encourage your knees to move towards your armpits, allowing your feet to open towards the ceiling. Keep your tailbone grounded on the mat and relax your lower back. You can gently rock side to side or back and forth to massage your spine. As you settle into the pose, relax your shoulders, soften your facial muscles, and close your eyes if comfortable. Take deep, slow breaths, allowing the stretch to deepen with each exhale. Hold the pose for 30 seconds to a minute, or longer if it feels beneficial, enjoying the release of tension and the gentle opening of your hips and groin area. Ananda Balasana is a soothing pose that promotes relaxation and can be incorporated into your yoga practice as a gentle stretch or as part of a restorative sequence.</p><br/>
        <a href="https://youtu.be/Ppku7i3ypGM?si=-d0U3qZkeJDdv1NP" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={viparitaKaraniImage} alt="Viparita Karani (Legs-Up-the-Wall Pose)" style={imageStyle} />
        <h2>Exercise 3: Viparita Karani (Legs-Up-the-Wall Pose)  </h2>
        <h3>Instructions:</h3>
        <p>1. Starting Position: Begin by sitting sideways against a wall with your knees bent and your hip close to the wall.Gently lower your back onto the mat as you swing your legs up the wall.Keep your buttocks as close to the wall as possible and extend your legs straight up, allowing your heels to rest against the wall.</p>
        <p>2. Adjustment: Scoot your buttocks closer to or further away from the wall as needed to find a comfortable distance.Your torso should be in a slight incline, with your head and shoulders resting on the floor and your hips elevated slightly above your heart.</p>
        <p>3. Relaxation: Relax your arms by your sides with palms facing up, or place them in a comfortable position on your abdomen or alongside your body.Close your eyes and take slow, deep breaths, allowing your body to relax completely.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice Viparita Karani, also known as Legs-Up-the-Wall Pose, begin by sitting sideways against a wall with your knees bent and your hips close to the wall. Gently lower your back onto the mat as you swing your legs up the wall, ensuring that your buttocks are as close to the wall as possible. Extend your legs straight up, allowing your heels to rest against the wall. Adjust your position as needed to find a comfortable distance from the wall, ensuring that your torso is in a slight incline with your head and shoulders resting on the floor and your hips elevated slightly above your heart. Relax your arms by your sides with palms facing up, or place them in a comfortable position on your abdomen or alongside your body. Close your eyes and take slow, deep breaths, allowing your body to relax completely. Hold the pose for 5 to 15 minutes, or longer if desired, enjoying the benefits of inversion and passive stretching. Viparita Karani is a gentle inversion pose that promotes relaxation, reduces swelling in the legs, soothes tired feet, and calms the nervous system.</p><br/>
        <a href="https://youtu.be/99fx_TMX7rk?si=PMmW7k0L7PC4etkz" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default RestorativeYogaAsanas;
