import React, { useEffect, useState } from 'react';
import './Game1.css';

const GameDifficulty = [20, 50, 70];

const PuzzleGame = () => {
  const [difficulty, setDifficulty] = useState(1);
  const cols = 3;
  const rows = 3;
  const count = cols * rows;
  const [blocks, setBlocks] = useState([]);
  const [emptyBlockCoords, setEmptyBlockCoords] = useState([2, 2]);
  const [indexes, setIndexes] = useState([]);

  useEffect(() => {
    initGame();
  }, [difficulty]);

  const initGame = () => {
    const blocksArray = document.getElementsByClassName('puzzle_block');
    setBlocks(blocksArray);
    setIndexes([...Array(count).keys()]);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const blockIdx = x + y * cols;
        if (blockIdx + 1 >= count) break;
        const block = blocksArray[blockIdx];
        positionBlockAtCoord(blockIdx, x, y);
        block.addEventListener('click', () => onClickOnBlock(blockIdx));
      }
    }
    setIndexes([...Array(count - 1).keys(), count - 1]);
    randomize(difficulty);
  };

  const randomize = (iterationCount) => {
    for (let i = 0; i < iterationCount; i++) {
      const randomBlockIdx = Math.floor(Math.random() * (count - 1));
      const moved = moveBlock(randomBlockIdx);
      if (!moved) i--;
    }
  };

  const moveBlock = (blockIdx) => {
    const block = blocks[blockIdx];
    const blockCoords = canMoveBlock(block);
    if (blockCoords !== null) {
      positionBlockAtCoord(blockIdx, emptyBlockCoords[0], emptyBlockCoords[1]);
      setIndexes((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[emptyBlockCoords[0] + emptyBlockCoords[1] * cols] = newIndexes[blockCoords[0] + blockCoords[1] * cols];
        return newIndexes;
      });
      setEmptyBlockCoords(blockCoords);
      return true;
    }
    return false;
  };

  const canMoveBlock = (block) => {
    const blockPos = [parseInt(block.style.left), parseInt(block.style.top)];
    const blockWidth = block.clientWidth;
    const blockCoords = [blockPos[0] / blockWidth, blockPos[1] / blockWidth];
    const diff = [Math.abs(blockCoords[0] - emptyBlockCoords[0]), Math.abs(blockCoords[1] - emptyBlockCoords[1])];
    const canMove = (diff[0] === 1 && diff[1] === 0) || (diff[0] === 0 && diff[1] === 1);
    return canMove ? blockCoords : null;
  };

  const positionBlockAtCoord = (blockIdx, x, y) => {
    const block = blocks[blockIdx];
    block.style.left = `${x * block.clientWidth}px`;
    block.style.top = `${y * block.clientWidth}px`;
  };

  const onClickOnBlock = (blockIdx) => {
    if (moveBlock(blockIdx)) {
      if (checkPuzzleSolved()) {
        // Puzzle solved logic
      }
    }
  };

  const checkPuzzleSolved = () => {
    for (let i = 0; i < indexes.length; i++) {
      if (i === emptyBlockCoords[0] + emptyBlockCoords[1] * cols) continue;
      if (indexes[i] !== i) return false;
    }
    return true;
  };

  const setGameDifficulty = (difficultyLevel) => {
    setDifficulty(difficultyLevel);
    randomize(GameDifficulty[difficultyLevel - 1]);
  };

  return (
    <div>
      <div id="puzzle_container">
        {Array.from({ length: count - 1 }).map((_, idx) => (
          <div key={idx} className="puzzle_block">
            {indexes[idx] + 1}
          </div>
        ))}
      </div>
      <div id="difficulty_container">
        {GameDifficulty.map((level, idx) => (
          <div
            key={idx}
            className={`difficulty_button ${difficulty === idx + 1 ? 'active' : ''}`}
            onClick={() => setGameDifficulty(idx + 1)}
          >
            {level}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleGame;
