import Link from "next/link";
import React from "react";

type Props = {
  difficulty: string;
};

const GameActions = ({ difficulty }: Props) => {
  return (
    <div className="mt-4">
      <a
        href={`/game/${difficulty}`}
        className="text-xl bg-blue-700 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded"
      >
        New word
      </a>
      <Link
        href="/start"
        className="text-xl ml-2 bg-blue-700 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded"
      >
        Select a different difficulty
      </Link>
    </div>
  );
};

export default GameActions;
