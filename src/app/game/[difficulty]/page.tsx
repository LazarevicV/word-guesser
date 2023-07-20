"use client";

import { useState, useEffect, ChangeEvent, useMemo } from "react";
import { getRandomWord } from "../../GameData";
import GameHeader from "./_game/GameHeader";
import GameInput from "./_game/GameInput";
import GameActions from "./_game/GameActions";

export default function DifficultyPage({
  params,
}: {
  params: { difficulty: string };
}) {
  // Retrieve a random word based on the selected difficulty
  const word = useMemo(() => {
    return params.difficulty ? getRandomWord(params.difficulty) : "";
  }, [params.difficulty]);

  const [input, setInput] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [remainingLives, setRemainingLives] = useState(3);

  const displayWord: string[] = useMemo(() => {
    if (!word) return [];

    if (!input && guessedLetters.length == 0)
      return (
        word
          .split("")
          .map((letter) => (guessedLetters.includes(letter) ? letter : "_")) ||
        []
      );

    if (word.includes(input)) {
      return (
        word
          .split("")
          .map((letter) => (guessedLetters.includes(letter) ? letter : "_")) ||
        []
      );
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  useEffect(() => {
    if (!input || !word || remainingLives == 0) return;

    setGuessedLetters([...guessedLetters, input]);

    if (guessedLetters.includes(input)) {
      setInput("");
      console.log("already guessed");
      return;
    }

    if (!word.includes(input)) {
      setInput("");
      setRemainingLives((prevLives) => prevLives - 1);
      console.log("wrong guess");
      return;
    }

    setInput("");

    console.log("good guess");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const gameResult: "won" | "lost" | "" = useMemo(() => {
    if (remainingLives === 0) {
      return "lost";
    }

    if (displayWord.join("") === word) {
      return "won";
    }

    return "";
  }, [remainingLives, displayWord, word]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <GameHeader
        difficulty={params.difficulty || ""}
        displayWord={displayWord.join(" ")}
        gameResult={gameResult}
      />
      <div className="mt-8">
        {gameResult !== "won" && remainingLives > 0 && (
          <GameInput
            disabled={gameResult !== ""}
            gameResult={gameResult}
            input={input}
            onChange={(value) => setInput(value)}
          />
        )}
      </div>
      <GameActions difficulty={params.difficulty || ""} />
    </div>
  );
}
