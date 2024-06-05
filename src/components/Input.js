import React from 'react';

const Input = ({ id, label, type, placeholder, name, value, onChange, dataTestId }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        data-testid={dataTestId}
      />
    </div>
  );
};

export default Input;
