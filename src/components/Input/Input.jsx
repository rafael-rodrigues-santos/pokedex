import React from 'react';
import Button from '../Button/Button';
import './style.css';

const Input = ({ label, name, getPokemon, ...rest }) => {
  const [search, setSearch] = React.useState('');

  return (
    <div className="input__block">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        {...rest}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button text="Buscar" onClick={(e) => getPokemon(search)} />
    </div>
  );
};

export default Input;
