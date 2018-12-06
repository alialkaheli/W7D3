import pokemonReducer from './pokemon_reducer';
import {combineReducers} from 'redux';
// import itemsReducer from './items_reducers';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  // items: itemsReducer,
});

export default entitiesReducer;
