import React from 'react';
import './styles/global.css';
import Home from './pages/Home/Home';
import api from './services/api';
import axios from 'axios';
import Input from './components/Input/Input';
import { fetchPokemon } from './services/getPokemon';
import { fetchType } from './services/getTypes';
import Select from './components/Select/Select';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [pokemon, setPokemon] = React.useState([]);
  const [currentUrl, setCurrentUrl] = React.useState('/pokemon');
  const [nextPageUrl, setNextPageUrl] = React.useState();
  const [prevPageUrl, setPrevPageUrl] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [option, setOption] = React.useState('');

  React.useEffect(() => {
    setLoading(true);
    let cancel;
    api
      .get(currentUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((response) => {
        const pokemons = response.data;
        // console.log(pokemons);
        setLoading(false);
        setNextPageUrl(pokemons.next);
        setPrevPageUrl(pokemons.previous);
        setPokemon(pokemons.results);
      });

    return () => cancel();
  }, [currentUrl]);

  React.useEffect(() => {
    const types = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
    });

    types.get('/type').then((result) => {
      const options = result.data.results;
      setOption([options]);
    });
  }, []);

  const goNextPage = () => {
    setCurrentUrl(nextPageUrl);
  };

  const goPrevPage = () => {
    setCurrentUrl(prevPageUrl);
  };

  if (loading) return 'Carregando...';

  const getPokemon = async (query) => {
    const response = await fetchPokemon(query);
    const results = await response.json();
    console.log('Pesquisa', results);
    setPokemon([results]);
  };

  const getType = async (type) => {
    const response = await fetchType(type);
    const results = await response.json();

    if (response.url !== 'https://pokeapi.co/api/v2/pokemon') {
      var typepokemon = results.pokemon.map((res) => {
        return res.pokemon;
      });
    } else {
      typepokemon = results.results.map((res) => {
        return res;
      });
    }

    setPokemon(typepokemon);
  };

  return (
    <div className="App">
      <Input
        name="searchByName"
        label="Busque pelo nome do pokemon"
        getPokemon={getPokemon}
      />
      <Select
        name="filter"
        label="Filtre por categoria"
        options={[option]}
        getType={getType}
        pokemon={pokemon}
        currentUrl={currentUrl}
      />

      <Home pokemon={pokemon} />
      <Pagination
        goNextPage={nextPageUrl ? goNextPage : null}
        goPrevPage={prevPageUrl ? goPrevPage : null}
      />
    </div>
  );
}

export default App;
