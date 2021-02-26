import MYPOKEMON_TYPE from './myPokemon.type';

export const addMyPokemon = (pokemon) => ({
  type: MYPOKEMON_TYPE.ADD_POKEMON,
  payload: pokemon,
});

export const releaseMyPokemon = (pokemon) => ({
  type: MYPOKEMON_TYPE.RELEASE_POKEMON,
  payload: pokemon,
});

export const setPokemonNickname = (pokemon) => ({
  type: MYPOKEMON_TYPE.SET_NICKNAME_POKEMON,
  payload: pokemon,
});
