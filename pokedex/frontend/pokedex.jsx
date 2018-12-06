import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon}from './util/api_util';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<h1>You done goofed Daddy</h1>, rootEl);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
