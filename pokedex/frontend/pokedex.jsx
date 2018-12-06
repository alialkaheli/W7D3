import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon}from './util/api_util';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import {Provider} from 'react-redux';
import PokemonContainer from './components/pokemon_index_container';

const Root = ({store}) => (
  <Provider store={store}>
    <PokemonContainer/>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
window.selectAllPokemon = selectAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
