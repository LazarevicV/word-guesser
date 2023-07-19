// Define an interface for game data
interface GameData {
  difficulty: string;
  words: string[];
}

// Define an array of game data for different difficulty levels
const gameData: GameData[] = [
  {
    difficulty: "easy",
    words: [
      "apple",
      "banana",
      "cat",
      "dog",
      "elephant",
      "flower",
      "guitar",
      "house",
      "ice cream",
      "jungle",
    ],
  },
  {
    difficulty: "medium",
    words: [
      "football",
      "garden",
      "happiness",
      "internet",
      "jacket",
      "kangaroo",
      "library",
      "mountain",
      "notebook",
      "ocean",
    ],
  },
  {
    difficulty: "hard",
    words: [
      "piano",
      "queen",
      "rainbow",
      "sunflower",
      "tiger",
      "universe",
      "victory",
      "waterfall",
      "xylophone",
      "yellowstone",
    ],
  },
];

// Get a random word for a given difficulty level
function getRandomWord(difficulty: string): string {
  const gameLevel = gameData.find((data) => data.difficulty === difficulty);
  if (gameLevel) {
    const words = gameLevel.words;
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  return "";
}

// Export the necessary functions and data
export { gameData, getRandomWord };
