import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="mt-8">
        <h2 className="text-4xl font-bold">Instructions:</h2>
        <ul className="mt-4 text-xl">
          <li>Guess the correct word by entering letters.</li>
          <li>You have a limited number of attempts.</li>
          <li>Choose the difficulty level below:</li>
        </ul>
        <div className="mt-4 flex space-x-4">
          <Link
            href="/game/easy"
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
          >
            Easy
          </Link>
          <Link
            href="/game/medium"
            className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
          >
            Medium
          </Link>
          <Link
            href="/game/hard"
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
          >
            Hard
          </Link>
        </div>
      </div>
    </div>
  );
}
