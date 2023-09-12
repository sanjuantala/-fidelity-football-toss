import React, { useState, useEffect } from 'react';
import './App.css';
import WelcomeScreen from './WelcomeScreen';
import GameInstructions from './GameInstructions';
import PositiveReinforcement from './PositiveReinforcement';
import GameScreen from './GameScreen';
import EndSlide from './EndSlide';

function App() {
  const [timer, setTimer] = useState(20);
  const [prompts, setPrompts] = useState([]);
  const [userChoices, setUserChoices] = useState([]);
  const [gameStatus, setGameStatus] = useState('welcome');
  const [showGameInstructions, setShowGameInstructions] = useState(false);
  const [showPositiveReinforcement, setShowPositiveReinforcement] = useState(false);

  useEffect(() => {
    let interval;
    document.title = 'Fidelity Football Toss Microsite';

    if (gameStatus === 'playing' && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setGameStatus('ended');
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, gameStatus]);

  const generateRandomPrompt = () => {
    const promptList = ['Prompt 11', 'Prompt 2', 'Prompt 3'];
    const randomIndex = Math.floor(Math.random() * promptList.length);
    const randomPrompt = promptList[randomIndex];
    setPrompts([...prompts, randomPrompt]);
  };

  const startGame = () => {
    setGameStatus('playing');
    setShowGameInstructions(false);
    setShowPositiveReinforcement(false);
    generateRandomPrompt();
  };

  const handleBucketChoice = (choice) => {
    setUserChoices([...userChoices, choice]);
  };

  const handleNextPrompt = () => {
    generateRandomPrompt();
  };

  const resetGame = () => {
    setTimer(20);
    setPrompts([]);
    setUserChoices([]);
    setGameStatus('welcome');
  };

  useEffect(() => {
    const instructionsTimeout = setTimeout(() => {
      setShowGameInstructions(true);
    }, 5000);

    const positiveReinforcementTimeout = setTimeout(() => {
      setShowPositiveReinforcement(true);
    }, 10000);

    return () => {
      clearTimeout(instructionsTimeout);
      clearTimeout(positiveReinforcementTimeout);
    };
  }, []);

  return (
    <div className="App">
      {showGameInstructions && !showPositiveReinforcement && gameStatus !== 'ended' && (
        <GameInstructions />
      )}
      {showPositiveReinforcement && gameStatus !== 'ended' && (
        <PositiveReinforcement startGame={startGame} />
      )}
      {gameStatus === 'welcome' && !showGameInstructions && !showPositiveReinforcement && (
        <WelcomeScreen startGame={startGame} />
      )}
      {gameStatus === 'playing' && (
        <GameScreen
          timer={timer}
          prompts={prompts}
          handleBucketChoice={handleBucketChoice}
          handleNextPrompt={handleNextPrompt}
        />
      )}
      {gameStatus === 'ended' && (
        <EndSlide
          userChoices={userChoices}
          resetGame={resetGame}
        />
      )}
    </div>
  );
}

export default App;
