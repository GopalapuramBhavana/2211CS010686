import React from 'react';
import BackButton from './BackButton';
import backgroundImage from './images/background-image-wl.jpg'; // Import the background image

// Import exercise images
import palmingImage from './images/palming.jpg';
import nearAndFarFocusImage from './images/near-and-far-focus.jpg';
import eyeMassageImage from './images/eye-massage.jpg';

function EyeAreaYogaAsanas () {
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
      <h1>Eye Area Yoga Asanas</h1>
      <div style={boxStyle}>
        <img src={palmingImage} alt="Palming" style={imageStyle} />
        <h2>Asana 1: Palming</h2>
        <h3>Instructions:</h3>
        <p>1. Rubbing Palms: Sit comfortably with your back straight and shoulders relaxed. Rub your palms together vigorously for about 15-20 seconds until you feel warmth generated between them. Ensure that you create enough friction to generate heat but avoid rubbing too hard to prevent discomfort.</p>
        <p>2. Cupping Eyes: Once your palms are warm, close your eyes gently and cup your palms over them without applying pressure. Allow the warmth from your palms to penetrate into your closed eyes. Make sure your fingers are gently touching your forehead while the base of your palms rests on your cheekbones. Keep your eyes closed throughout the process.</p>
        <p>3. Deep Breathing and Relaxation: Take slow, deep breaths and focus on the darkness behind your closed eyelids. Feel the warmth and darkness enveloping your eyes, soothing them and promoting relaxation. Stay in this position for 1-2 minutes or longer if desired, allowing your eyes to rest and rejuvenate.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice palming, begin by sitting comfortably in a chair with your back straight and shoulders relaxed. Close your eyes gently and take a few deep breaths to center yourself. Rub your palms together vigorously for about 15-20 seconds until you feel warmth generated between them. Once your palms are warm, cup them over your closed eyes without applying pressure, ensuring that your fingers gently touch your forehead while the base of your palms rests on your cheekbones. Allow the warmth from your palms to penetrate into your closed eyes, creating a comforting sensation. Focus on the darkness behind your closed eyelids and continue to take slow, deep breaths, allowing yourself to relax completely. Stay in this position for 1-2 minutes or longer if desired, letting your eyes rest and rejuvenate. Palming can help alleviate eye strain, reduce fatigue, and promote overall relaxation of the eye muscles, making it a beneficial practice to incorporate into your daily routine.</p><br/>
        <a href="https://youtu.be/RoIYAoAalmI?si=a2rEzYgEqGr3Xni8" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={nearAndFarFocusImage} alt="Near And Far Focus" style={imageStyle} />
        <h2>Asana 2: Near And Far Focus </h2>
        <h3>Instructions:</h3>
        <p>1. Find a Focal Point: Sit or stand comfortably in a well-lit room with a clear view of both nearby and distant objects. Choose a nearby object, such as your thumb or a small item held at arm's length, and focus your gaze on it. Ensure the object is clearly visible and in sharp focus.</p>
        <p>2. Shift Focus: After focusing on the nearby object for a few seconds, quickly shift your gaze to a distant object in the room, such as a piece of furniture or a spot on the wall. Make sure the distant object is well-defined and clearly visible.</p>
        <p>Alternate Focus: Alternate your gaze between the nearby and distant objects, switching back and forth several times. Focus on each object for a few seconds before shifting to the other. Maintain a steady rhythm as you transition between near and far focus points.</p><br/>
        <h3>Procedure:</h3>
        <p>To practice the near and far focus exercise, start by finding a comfortable seated or standing position in a well-lit room with clear visibility of both nearby and distant objects. Choose a nearby object, such as your thumb or a small item held at arm's length, and focus your gaze on it, ensuring it is in sharp focus and clearly visible. After a few seconds, quickly shift your gaze to a distant object in the room, such as a piece of furniture or a spot on the wall, making sure it is well-defined and clearly visible. Alternate your focus between the nearby and distant objects, switching back and forth several times. Spend a few seconds focusing on each object before shifting to the other, maintaining a steady rhythm as you transition between near and far focus points. Repeat this exercise for 1-2 minutes, gradually increasing the duration as you become more comfortable. The near and far focus exercise helps to strengthen the eye muscles, improve focus flexibility, and alleviate eye strain caused by prolonged near work or digital screen use.</p><br/>
        <a href="https://youtu.be/lmrIua82eEU?si=i4hLoag8SI8x6cHQ" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <div style={boxStyle}>
        <img src={eyeMassageImage} alt="Eye Massage" style={imageStyle} />
        <h2>Exercise 3: Eye Massage</h2>
        <h3>Instructions:</h3>
        <p>1. Preparation: Sit comfortably in a chair with your back straight and shoulders relaxed. Close your eyes gently and take a few deep breaths to relax your mind and body. Ensure that your hands are clean before beginning the massage.</p>
        <p>2. Massage Technique: Using your fingertips, gently massage the area around your eyes in a circular motion. Start from the inner corner of your eye near the bridge of your nose and move outward along the eyebrow bone. Apply light pressure and continue the circular motion for several repetitions.</p>
        <p>3. Repeat on Other Side: After massaging one eye area, repeat the same circular motion on the other side. Move from the inner corner of the eye towards the outer corner along the eyebrow bone. Continue to apply gentle pressure and repeat the circular massage motion several times.</p><br/>
        <h3>Procedure:</h3>
        <p>To perform an eye massage, start by sitting comfortably in a chair with your back straight and shoulders relaxed. Close your eyes gently and take a few deep breaths to center yourself. Using your fingertips, begin massaging the area around your eyes in a gentle circular motion. Start from the inner corner of your eye near the bridge of your nose and move outward along the eyebrow bone. Apply light pressure as you massage, focusing on areas where you feel tension or discomfort. Continue the circular motion for several repetitions, allowing the soothing sensation to penetrate your eye area. After massaging one eye area, repeat the same circular motion on the other side, moving from the inner corner of the eye towards the outer corner along the eyebrow bone. Take your time and continue to apply gentle pressure as needed. Once you have completed the massage on both sides, take a moment to relax and allow the soothing sensation to settle in. Take a few more deep breaths and gently open your eyes when you are ready. Performing this eye massage technique regularly can help alleviate tension, reduce eye strain, and promote relaxation in the eye area.</p><br/>
        <a href="https://youtu.be/AMObqLsAxn8?si=C2PfKyhsgfqrHK4p" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>
          Watch on YouTube
        </a>
      </div>
      <BackButton />
    </div>
  );
}

export default EyeAreaYogaAsanas;
