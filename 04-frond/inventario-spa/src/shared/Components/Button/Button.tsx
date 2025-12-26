import type { JSX } from "react";

interface ButtonIPropsItems {
  text?: string;
  style?: string;
  icon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
export default function Button({
  style,
  icon,
  onClick,
  disabled,
  text,
  type,
}: ButtonIPropsItems) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700  text-white font-semibold py-2 px-4 rounded-md ${style}`}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {text}
    </button>
  );
}
