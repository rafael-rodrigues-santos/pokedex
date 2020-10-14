import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Home = ({ pokemon }) => {
  let listPokemon = [];

  pokemon &&
    pokemon.map((p) => {
      listPokemon.push({
        name: p.name,
      });
    });

  return (
    <div className="list__pokemon">
      {listPokemon.map((p, index) => (
        <div className="card" key={index}>
          <div className="card__name">
            <Link to={p.name}>
              <p> {p.name} </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
