import React from 'react'

const Input = ({ type, name, className, value, onChange, id, placeholder, disabled }) => {
  // render input tag
  return <input
    type={type}
    name={name}
    className={className}
    id={id}
    value={value}
    onChange={onChange}
    disabled={disabled}
    placeholder={placeholder}
  />
}

export default Input;