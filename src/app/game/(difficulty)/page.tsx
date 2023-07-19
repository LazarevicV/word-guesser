"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { getRandomWord } from "../../GameData";

export default function DifficultyPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const difficulty = searchParams.get("difficulty");

  // Retrieve a random word based on the selected difficulty
  const word = difficulty ? getRandomWord(difficulty) : "";

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [remainingLives, setRemainingLives] = useState(3);
  const [gameResult, setGameResult] = useState("");
  const [displayWord, setDisplayWord] = useState<string>("");

  useEffect(() => {
    if (!difficulty || !word) {
      // Redirect to the home page if difficulty is not selected or word is not available
      window.location.href = "/";
    } else {
      // Initialize the display word with underscores and spaces
      const initialDisplayWord = word
        .split("")
        .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
      setDisplayWord(initialDisplayWord);
    }
  }, [difficulty, word, guessedLetters]);

  const handleGuess = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const guessedLetter = event.target.value.toLowerCase();

    if (
      guessedLetter &&
      !guessedLetters.includes(guessedLetter) &&
      remainingLives > 0 &&
      gameResult === ""
    ) {
      const newGuessedLetters = [...guessedLetters, guessedLetter];
      setGuessedLetters(newGuessedLetters);

      if (!word.includes(guessedLetter)) {
        setRemainingLives((prevLives) => prevLives - 1);
      }
    }

    event.target.value = "";
  };

  useEffect(() => {
    if (remainingLives === 0) {
      setGameResult("lost");
    } else if (
      guessedLetters.length > 0 &&
      guessedLetters.every((letter) => word.includes(letter))
    ) {
      setGameResult("won");
    }

    const updatedDisplayWord = word
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
    setDisplayWord(updatedDisplayWord);
  }, [remainingLives, guessedLetters, word]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
      <div className="mt-8">
        {gameResult !== "won" && remainingLives > 0 && (
          <form onSubmit={handleGuess}>
            <input
              type="text"
              onChange={handleGuess}
              maxLength={1}
              className="border rounded px-4 py-2 focus:outline-none text-slate-950"
              disabled={gameResult !== ""}
            />
            <button
              type="submit"
              className="ml-2 bg-blue-700 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded"
              disabled={gameResult !== ""}
            >
              Guess
            </button>
          </form>
        )}
        <div className="mt-4">
          <a
            href={`/game?difficulty=${difficulty}`}
            className="text-xl bg-blue-700 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded"
          >
            New word
          </a>
          <a
            href="/start"
            className="text-xl ml-2 bg-blue-700 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded"
          >
            Select a different difficulty
          </a>
        </div>
      </div>
    </div>
  );
}
