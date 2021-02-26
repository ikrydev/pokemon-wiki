export const addPokemonToList = (pokemonList, pokemonToAdd) => {
  const isPokemonExists = pokemonList.find(
    (pokemon) => pokemon.id === pokemonToAdd.id
  );

  return !isPokemonExists ? [...pokemonList, pokemonToAdd] : pokemonList;
};

export const releasePokemonFromList = (pokemonList, pokemonToRemove) =>
  pokemonList.filter((pokemon) => pokemon.id !== pokemonToRemove.id);

export const setPokemonNickname = (pokemonList, pokemonToSetNickname) => {
  return pokemonList.map((pokemon) => {
    if (pokemon.id === pokemonToSetNickname.id) {
      return { ...pokemon, nickname: pokemonToSetNickname.nickname };
    }

    return pokemon;
  });
};
