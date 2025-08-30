import React from 'react';

interface ButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ name, onClick, className = '', style = {} }) => (
  <button
    className={`w-[230px] h-[58px] text-white px-8 py-3 transition flex items-center justify-center text-center gap-2 shadow-[5px_5px_0px_rgba(0,0,0,0.25),4px_5px_2px_rgba(236,132,181,0.87)] ${className}`}
    style={{
      background: "var(--landing-content-button-color)",
      ...style,
    }}
    onClick={onClick}
  >
    <span className="text-[26px]">{name}</span>
    <span>
      <img src="/hire-btn-logo.png" alt="" width={22} height={22} />
    </span>
  </button>
);

export default Button;