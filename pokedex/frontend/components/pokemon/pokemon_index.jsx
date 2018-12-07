import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    return (
      <ul>
        {this.props.arrayofpoke.map(pokemon => {
          return (<PokemonIndexItem key={pokemon.id} poke={pokemon}/>);
        })
        }
      </ul>
    );
  }
}

export default PokemonIndex;
