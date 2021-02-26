import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import myPokemon from './MyPokemon/myPokemonReducer';

const rootReducer = combineReducers({
  myPokemon: myPokemon,
});

const PERSIST_CONFIG = {
  key: 'root',
  storage,
  whitelist: ['myPokemon'], //whitelist
};

export default persistReducer(PERSIST_CONFIG, rootReducer);
