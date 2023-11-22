"use client";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="bg-white rounded-lg p-4 m-2 min-w-full text-2xl font-bold"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
