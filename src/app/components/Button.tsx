"use client";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  text,
  onClick,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      className={
        (className ? className : "") +
        " bg-white text-black rounded-lg p-4 m-2 text-2xl font-bold disabled:bg-gray-500"
      }
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text.toUpperCase()}
    </button>
  );
}
