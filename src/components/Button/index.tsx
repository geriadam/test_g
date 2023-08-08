import React from 'react';

interface ButtonProps {
  label: string;
  variant: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant, onClick, ...rest }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      {...rest}
    >
     {label}
    </button>
  );
};

export default Button;