const baseUrl = 'https://pokeapi.co/api/v2';
const query = {
  pokemon: 'pokemon',
};

export const fetchPokemon = (pokemon) => {
  return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`);
};
