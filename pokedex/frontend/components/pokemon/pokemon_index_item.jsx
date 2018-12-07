import React from 'react';

const PokemonIndexItem = ({poke}) => (
  <li>{poke.name}
    <img src={poke.image_url}/></li>
);

export default PokemonIndexItem;
