import React from 'react';

const Button = ({ name, type, onClick, children, dataTestId }) => {
  return (
    <button name={name} type={type} onClick={onClick} data-testid={dataTestId}>
      {children}
    </button>
  );
};

export default Button;
