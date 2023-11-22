"use client";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

export default function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button
      className="bg-white text-black rounded-lg p-4 m-2 min-w-full text-2xl font-bold"
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text.toUpperCase()}
    </button>
  );
}
