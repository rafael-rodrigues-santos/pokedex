import React from 'react';
import './style.css';

const Select = ({
  label,
  name,
  options,
  getType,
  pokemon,
  currentUrl,
  ...rest
}) => {
  const [type, setType] = React.useState('');

  var opt;

  options.map((option) => {
    return (opt = option[0]);
  });

  let optionsArray = [];

  opt &&
    opt.map((option) => {
      return optionsArray.push({
        name: option.name,
        url: option.url,
      });
    });

  React.useEffect(() => {
    if (type !== '') {
      getType(type);
    }
  }, [type]);

  return (
    <div className="select__block">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        onChange={(e) => setType(e.target.value)}
        defaultValue="Select type"
        {...rest}
      >
        <option value="https://pokeapi.co/api/v2/pokemon">all</option>
        {optionsArray.map((option) => {
          return (
            <option key={option.name} value={option.url}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
