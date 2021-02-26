import MYPOKEMON_TYPE from './myPokemon.type';
import {
  addPokemonToList,
  releasePokemonFromList,
  setPokemonNickname,
} from './myPokemon.utils';

const INITIAL_STATE = {
  data: [],
};

const myPokemonReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case MYPOKEMON_TYPE.ADD_POKEMON:
      return {
        ...state,
        data: addPokemonToList(state.data, payload),
      };
    case MYPOKEMON_TYPE.RELEASE_POKEMON:
      return {
        ...state,
        data: releasePokemonFromList(state.data, payload),
      };
    case MYPOKEMON_TYPE.SET_NICKNAME_POKEMON:
      return {
        ...state,
        data: setPokemonNickname(state.data, payload),
      };
    default:
      return state;
  }
};

export default myPokemonReducer;
