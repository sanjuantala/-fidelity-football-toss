import React from 'react';
import flowerImage from './assets/Flower-Right.png';
import logoSmall from './assets/Logo-corner.png';

function PositiveReinforcement({ startGame }) {
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

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#57a84c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '50px',
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
    marginTop: '15px',
    color: '#57a84c',
    lineHeight: '1',
    letterSpacing: '2px',
    maxWidth: '1430px',
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
    <div style={containerStyle} className="instructions-screen">
      <div style={flowerStyle}>
        <img  src={flowerImage} alt="Flower Corner" />
      </div>
      <h1 style={titleStyle} className="page-heading">
        Remember:
      </h1>
      <h2 style={subTitleStyle} className="page-subheading">
        there are no right or wrong answers with mindful spending.
      </h2>
      <button style={buttonStyle} className="start-game-button" onClick={startGame}>
        Start Game
      </button>
      <div style={logoSmallStyle}>
        <img src={logoSmall} alt="Logo Small" />
      </div>
    </div>
  );
}

export default PositiveReinforcement;
