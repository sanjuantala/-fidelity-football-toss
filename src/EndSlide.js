import React from 'react';

function EndSlide({ userChoices, resetGame }) {
  return (
    <div>
      <h1>Game Over!</h1>
      <h2>Choices:</h2>
      <ul>
        {userChoices.map((choice, index) => (
          <li key={index}>{choice}</li>
        ))}
      </ul>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
}

export default EndSlide;
