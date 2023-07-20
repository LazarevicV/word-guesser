import React, { ChangeEvent } from "react";

type Props = {
  disabled: boolean;
  gameResult: string;
  input: string;
  onChange: (value: string) => void;
};

const GameInput = ({ onChange, input, gameResult, disabled }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        maxLength={1}
        className="border rounded px-4 py-2 focus:outline-none text-slate-950"
        disabled={disabled}
      />
      <button
        className="ml-2 bg-blue-700 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded"
        disabled={disabled}
      >
        Guess
      </button>
    </>
  );
};
export default GameInput;
