import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import api from '../../services/api';
import './style.css';

const DetailPage = () => {
  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [type, setType] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [urlEvolution, setUrlEvolution] = React.useState('');
  const [evolution, setEvolution] = React.useState('');

  const loadUrl = async () => {
    const result = await api.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setUrl(result.data.species.url);
  };

  loadUrl();

  const urlPageSpecie = async () => {
    if (url !== '') {
      const result = await api.get(url);
      setUrlEvolution(result.data.evolution_chain.url);
    }
  };
  urlPageSpecie();

  const urlPageEvolution = async () => {
    if (urlEvolution !== '') {
      const result = await api.get(urlEvolution);
      setEvolution(result.data.chain.evolves_to['0'].species.name);
    }
  };
  urlPageEvolution();

  const loadPokemon = async () => {
    const result = await api.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    setName(result.data.name);
    setImage(result.data.sprites.other['official-artwork'].front_default);
    setWeight(result.data.weight);
    setHeight(result.data.height);
    setType(result.data.types.map((t) => <p>{t.type.name}</p>));
  };

  React.useEffect(() => {
    loadPokemon();
  });

  return (
    <div className="card__pokemon">
      <div className="card__pokemon-name">
        <h1>{name}</h1>
      </div>
      <div className="card__pokemon-image">
        <img src={image} alt={name} />
      </div>
      <div className="card__pokemon-feature">
        <p>Peso: {weight}</p>
        <p>Altura: {height}</p>
      </div>
      <div className="card__pokemon-type">
        <p>Tipo: {type}</p>
      </div>

      <p>Evolução: {evolution}</p>
      <Button text="Voltar" onClick={() => history.push('/')} />
    </div>
  );
};

export default DetailPage;
