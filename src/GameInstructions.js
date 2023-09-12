import React from 'react';
import flowerImage from './assets/Flower-Right.png';
import logoSmall from './assets/Logo-corner.png';

function GameInstructions() {
  const containerStyle = {
    textAlign: 'left',
    padding: '0 90px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100vh',
    minHeight: '920px',
    position: 'relative',
  };

  const titleStyle = {
    fontSize: '7rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#57a84c',
    lineHeight: '1',
  };

  const subTitleStyle = {
    fontSize: '6rem',
    fontWeight: 'normal',
    margin: '0',
    color: '#57a84c',
    lineHeight: '1',
    letterSpacing: '2px',
  };

  const paragraphStyle = {
    fontSize: '4rem',
    fontWeight: 'normal',
    marginTop: '20px',
    lineHeight: '1.2',
    maxWidth: '1120px',
    marginBottom: '0',
  };

  const flowerStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
  };

  const logoSmallStyle = {
    position: 'absolute',
    bottom: '50px',
    right: '50px',
  };

  return (
    <div style={containerStyle} className="page-screen">
      <div style={flowerStyle}>
        <img  src={flowerImage} alt="Welcome" />
      </div>
      <h1 style={titleStyle} className="page-heading">
        Would you rather
      </h1>
      <h2 style={subTitleStyle} className="page-subheading">spend, save, or invest?</h2>
      <p style={paragraphStyle}>After each prompt, throw the football into the spend, save, or invest basket.</p>
      <div style={logoSmallStyle}>
        <img src={logoSmall} alt="Welcome" />
      </div>
    </div>
  );
}

export default GameInstructions;
