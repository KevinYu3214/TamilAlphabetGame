import React, { useState } from 'react';
import '../styles/GameArea.css';
import Button from './Button'; 

function GameArea({ resetGame, currentLetter, userInput, handleInput, score, highScores }) {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [inputStatus, setInputStatus] = useState(''); 

  const handleInputChange = (e) => {
    const input = e.target.value;
    handleInput(e); 

    if (input.length > currentLetter.romanized.length) {
      setShowCorrectAnswer(true);
      setInputStatus('wrong');
    } else if (input.toLowerCase() === currentLetter.romanized.slice(0, input.length).toLowerCase()) {
      if (input.length === currentLetter.romanized.length) {
        setShowCorrectAnswer(false);
        setInputStatus('');
        nextLetter();
      } else {
        setInputStatus('');
      }
    } else {
      setShowCorrectAnswer(true);
      setInputStatus('wrong');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!showCorrectAnswer) {
        nextLetter();
      }
    }
  };

  const nextLetter = () => {
    setShowCorrectAnswer(false);
    setInputStatus(''); // Reset input status after moving to the next letter
  };

  return (
    <div className="game-area-container">
      <div className="score-container">
        <div className="score-item correct-score">Correct: {score.correct}</div>
        <div className="score-item wrong-score">Wrong: {score.wrong}</div>
        <div className="score-item remaining-score">Remaining: {score.remaining}</div>
      </div>
      <div className="current-letter-container">
        <p className="current-letter">{currentLetter.tamil}</p>
        <p className={`correct-romanization ${showCorrectAnswer ? 'visible' : ''}`}>
          {currentLetter.romanized}
        </p>
        <p className={`mnemonic ${showCorrectAnswer ? 'visible' : ''}`}>
          {currentLetter.mnemonic}
        </p>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoFocus
          className={`input-box ${inputStatus}`}
        />
      </div>
      <div className="back-button-container">
        <Button text="Back to Selection" onClick={resetGame} type="button" /> 
      </div>
      <div className="high-scores-container">
        <table className="high-scores-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time (s)</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {highScores.slice(0, 5).map((score, index) => (
              <tr key={index}>
                <td>{score.date}</td>
                <td>{score.time}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GameArea;
