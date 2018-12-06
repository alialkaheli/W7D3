import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    return (
      <ul>
        {this.props.arrayofpoke.map(pokemon => {
          return (
            <li key={pokemon.id}>{pokemon.id}
            <img src={pokemon.image_url}/></li>
          );
        })
        }
      </ul>
    );
  }
}

export default PokemonIndex;
