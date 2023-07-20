import React from "react";

type Props = {
  difficulty: string;
  displayWord: string;
  gameResult: string;
};

const GameHeader = ({ difficulty, displayWord, gameResult }: Props) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Word Guessing Game</h1>
      {difficulty && (
        <p className="mt-4 text-2xl">
          Difficulty: <strong>{difficulty}</strong>
        </p>
      )}
      <p className="mt-4 text-2xl">
        Word: <strong>{displayWord}</strong>
      </p>
      {gameResult === "lost" && (
        <p className="mt-4 text-2xl text-red-600 font-bold">
          You lost! Better luck next time.
        </p>
      )}
      {gameResult === "won" && (
        <p className="mt-4 text-2xl text-green-600 font-bold">
          Congratulations! You won!
        </p>
      )}
    </div>
  );
};

export default GameHeader;
