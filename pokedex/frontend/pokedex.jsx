import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon}from './util/api_util';
import {receiveAllPokemon} from './actions/pokemon_actions';
document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>You done goofed Daddy</h1>, rootEl);
});
window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
