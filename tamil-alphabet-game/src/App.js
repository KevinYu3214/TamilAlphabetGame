import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { tamilLetters } from './utils/tamilLetters';
import { getColumnsPerPage } from './utils/getColumnsPerPage';
import GameArea from './components/GameArea';
import Button from './components/Button';
import LetterTable from './components/LetterTable';

function App() {
  
  const columns = {
    Vowels: tamilLetters.vowels,
    ...tamilLetters.vowelConsonantCombinations.reduce((acc, letter) => {
      const columnKey = letter.tamil.charAt(0);
      if (!acc[columnKey]) {
        acc[columnKey] = [];
      }
      acc[columnKey].push(letter);
      return acc;
    }, {})
  };

  const columnKeys = Object.keys(columns);

  const [selectedColumns, setSelectedColumns] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [uniqueLetterCount, setUniqueLetterCount] = useState(0); // Track the count of unique letters
  const [currentLetter, setCurrentLetter] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [correctFirstTime, setCorrectFirstTime] = useState([]); // New state to track first-time correct answers
  const [score, setScore] = useState({ correct: 0, wrong: 0, remaining: 0 });
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [columnsPerPage, setColumnsPerPage] = useState(getColumnsPerPage());
  const [wrongOnce, setWrongOnce] = useState(false);
  const [selectAll, setSelectAll] = useState(true);
  const [highScores, setHighScores] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedColumns = JSON.parse(localStorage.getItem('selectedColumns')) || columnKeys;
    const storedHighScores = JSON.parse(localStorage.getItem('highScores')) || [];

    setSelectedColumns(storedColumns);
    setHighScores(storedHighScores);

    updateSelectAllState(storedColumns, currentPage);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('selectedColumns', JSON.stringify(selectedColumns));
      updateSelectAllState(selectedColumns, currentPage);
    }
  }, [selectedColumns, currentPage]);

  useEffect(() => {
    const handleResize = () => setColumnsPerPage(getColumnsPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateSelectAllState = (columns, page) => {
    const startIndex = page * columnsPerPage;
    const endIndex = startIndex + columnsPerPage;
    const columnsToShow = columnKeys.slice(startIndex, endIndex);

    setSelectAll(columnsToShow.every(col => columns.includes(col)));
  };

  const handleColumnSelection = (columnKey) => {
    setSelectedColumns((prevColumns) => {
      const newSelectedColumns = prevColumns.includes(columnKey)
        ? prevColumns.filter((col) => col !== columnKey)
        : [...prevColumns, columnKey];

      return newSelectedColumns;
    });
  };

  const toggleSelectAll = () => {
    const startIndex = currentPage * columnsPerPage;
    const endIndex = startIndex + columnsPerPage;
    const columnsToShow = columnKeys.slice(startIndex, endIndex);

    if (selectAll) {
      setSelectedColumns(prevColumns => prevColumns.filter(col => !columnsToShow.includes(col)));
    } else {
      setSelectedColumns(prevColumns => [...new Set([...prevColumns, ...columnsToShow])]);
    }
  };
  
  const startGame = () => {
    if (selectedColumns.length === 0) {
      alert('Please select at least one column to start the game.');
      return;
    }
  
    // Combine all selected columns into a single array, removing duplicates
    const selected = selectedColumns.reduce((acc, col) => {
      acc.push(...columns[col]);
      return acc;
    }, []);
  
    // Remove duplicates by creating a Set based on the Tamil character (letter.tamil)
    const uniqueLetters = Array.from(new Set(selected.map(letter => letter.tamil)))
      .map(uniqueTamil => selected.find(letter => letter.tamil === uniqueTamil));
  
    // Initialize the game state
    setSelectedLetters(uniqueLetters);
    setUniqueLetterCount(uniqueLetters.length); // Store the count of unique letters
    setCorrectFirstTime([]); // Reset first-time correct answers
    setCurrentLetter(uniqueLetters[Math.floor(Math.random() * uniqueLetters.length)]);
    setScore({ correct: 0, wrong: 0, remaining: uniqueLetters.length });
    setUserInput('');
    setInstructionsVisible(false);
    setWrongOnce(false);
    setStartTime(Date.now());
  };
  
  const nextLetter = () => {
    setScore(prevScore => ({
      ...prevScore,
      remaining: prevScore.remaining - 1 // Decrement remaining here
    }));

    const remainingLetters = selectedLetters.filter((letter) => letter !== currentLetter);
    if (remainingLetters.length > 0) {
      const next = remainingLetters[Math.floor(Math.random() * remainingLetters.length)];
      setSelectedLetters(remainingLetters.filter((letter) => letter !== next));
      setCurrentLetter(next);
      setUserInput('');
      setWrongOnce(false);
    } else {
      // Capture the last letter's result
      if (!wrongOnce && !correctFirstTime.includes(currentLetter)) {
        setCorrectFirstTime([...correctFirstTime, currentLetter]);
      }

      const endTime = Date.now();
      const durationInSeconds = (endTime - startTime) / 1000;

      // Format the time
      const minutes = Math.floor(durationInSeconds / 60);
      const seconds = Math.floor(durationInSeconds % 60);
      const hours = Math.floor(minutes / 60);
      const formattedTime = hours > 0 
          ? `${hours}:${minutes % 60}:${seconds.toString().padStart(2, '0')}`
          : `${minutes}:${seconds.toString().padStart(2, '0')}`;

      const newScore = {
        date: new Date().toLocaleDateString(),
        time: formattedTime,
        score: `${correctFirstTime.length + (wrongOnce ? 0 : 1)}/${uniqueLetterCount}` // Correctly reflecting first-time correct answers
      };

      const updatedScores = [newScore, ...highScores.slice(0, 4)];
      setHighScores(updatedScores);
      localStorage.setItem('highScores', JSON.stringify(updatedScores));

      startGame();
    }
  };

  const autoValidate = (input) => {
    if (
      input.length > currentLetter.romanized.length ||
      input.toLowerCase() !== currentLetter.romanized.slice(0, input.length).toLowerCase()
    ) {
      if (!wrongOnce) {
        setScore((prevScore) => ({
          ...prevScore,
          wrong: prevScore.wrong + 1,
        }));
        setWrongOnce(true);
      }
    } else if (input.toLowerCase() === currentLetter.romanized.toLowerCase()) {
      if (!wrongOnce) {
        setScore((prevScore) => ({
          ...prevScore,
          correct: prevScore.correct + 1,
        }));
        setCorrectFirstTime([...correctFirstTime, currentLetter]); // Add to first-time correct answers
      }
      nextLetter();
    }
  };

  const handleInput = (e) => {
    const { value } = e.target;

    if (e.key === 'Enter') {
      autoValidate(value);
      if (value.toLowerCase() === currentLetter.romanized.toLowerCase()) {
        nextLetter();
      } else {
        setWrongOnce(true);
        setUserInput(currentLetter.romanized);
        setScore((prevScore) => ({
          ...prevScore,
          wrong: prevScore.wrong + 1,
        }));
      }
    } else {
      setUserInput(value);
      autoValidate(value);
    }
  };

  const resetGame = () => {
    const storedColumns = JSON.parse(localStorage.getItem('selectedColumns')) || columnKeys;
    setSelectedColumns(storedColumns);
    setSelectedLetters([]);
    setCurrentLetter(null);
    setUserInput('');
    setCorrectFirstTime([]); // Reset first-time correct answers
    setScore({ correct: 0, wrong: 0, remaining: 0 });
    setInstructionsVisible(true);
    setWrongOnce(false);
  };

  const renderLetterTable = () => {
    const startIndex = currentPage * columnsPerPage;
    const endIndex = startIndex + columnsPerPage;
    const columnsToShow = columnKeys.slice(startIndex, endIndex);

    return (
      <LetterTable
        columns={columns}
        columnsToShow={columnsToShow}
        selectedColumns={selectedColumns}
        handleColumnSelection={handleColumnSelection}
      />
    );
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(columnKeys.length / columnsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

    return (
      <div className="pagination-container">
        <span
          className={`select-all-text ${!selectAll ? 'current-page' : ''}`}
          onClick={toggleSelectAll}
        >
          {selectAll ? 'Deselect All' : 'Select All'}
        </span>
        <div className="pagination">
          {pageNumbers.map((pageIndex) => (
            <span
              key={pageIndex}
              className={`page-number ${currentPage === pageIndex ? 'current-page' : ''}`}
              onClick={() => {
                setCurrentPage(pageIndex);
                updateSelectAllState(selectedColumns, pageIndex); // Update the selectAll state whenever the page changes
              }}
            >
              {pageIndex + 1}
            </span>
          ))}
        </div>
      </div>
    );
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <div className="App">
      {instructionsVisible ? (
        <div>
          <h1>Tamil Combinations</h1>
          <p className="instructions-text">
            Select or deselect columns, then press 'Start Game' to begin
          </p>
          <div className="table-navigation-container">
            <div className="letter-table-container">
              {renderLetterTable()}
            </div>
            {renderPageNumbers()}
          </div>
          <div className="button-container">
            <Button text="Start Game" onClick={startGame} type="button" />
          </div>
        </div>
      ) : (
        <div>
          <h1>Tamil Combinations</h1>
          <p className="instructions-text">
            Type the correct Romanized version of the Tamil letter below:
          </p>
          <GameArea
            resetGame={resetGame}
            currentLetter={currentLetter}
            userInput={userInput}
            handleInput={handleInput}
            score={score}
            highScores={highScores}
            showMnemonic={wrongOnce} 
          />
        </div>
      )}
    </div>
  );
}

export default App;
