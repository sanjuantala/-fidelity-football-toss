import React from 'react';
import welcomeImage from './assets/welcome-top.png';
import welcomeLogo from './assets/welcome-logo.png';

function WelcomeScreen() {
  const containerStyle = {
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '0',
    marginBottom: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    width: '100%',
  };

  const logoStyle = {
    maxHeight: '40vh',
    maxWidth: '100%',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle} className="welcome-screen">
      <div className="image-container">
        <img style={imageStyle} src={welcomeImage} alt="Welcome" />
      </div>
      <h1 style={titleStyle} className="welcome-logo">
        <img style={logoStyle} src={welcomeLogo} alt="Welcome Logo" />
      </h1>
    </div>
  );
}

export default WelcomeScreen;
