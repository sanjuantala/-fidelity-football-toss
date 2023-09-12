import React from 'react';

function GameScreen({ timer, prompts, handleBucketChoice, handleNextPrompt }) {
  return (
    <div>
      <h2>Time Remaining: {timer} seconds</h2>
      <div>
        <h3>Current Prompt: {prompts[prompts.length - 1]}</h3>
        <button onClick={() => handleBucketChoice('save')}>Save</button>
        <button onClick={() => handleBucketChoice('spend')}>Spend</button>
        <button onClick={() => handleBucketChoice('invest')}>Invest</button>
        <button onClick={handleNextPrompt}>Next Prompt</button>
      </div>
    </div>
  );
}

export default GameScreen;
