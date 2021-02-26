import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { releaseMyPokemon } from '../../redux/MyPokemon/myPokemon.action';

import {
  PokemonListWrapper,
  PokemonInformation,
  Text,
} from './MyPokemon.style';

import { Card, Button } from '../../components';

const MyPokemon = ({ myPokemon, releasePokemon }) => {
  const history = useHistory();
  const handleClickCard = (id) => {
    history.push(`pokemon/${id}`);
  };

  return (
    <div>
      <PokemonInformation position="flex-end">
        <Text color="#3C4858">Owned Total({myPokemon.length} items)</Text>
      </PokemonInformation>
      <PokemonListWrapper>
        {myPokemon.map((pokemon, index) => (
          <Card
            key={index}
            pokemon={pokemon}
            onClick={() => handleClickCard(pokemon.id)}
          >
            <Button
              type="button"
              color="danger"
              onClick={() => releasePokemon(pokemon)}
            >
              Release
            </Button>
          </Card>
        ))}
      </PokemonListWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  myPokemon: state.myPokemon.data,
});

const mapActionToProps = (dispatch) => ({
  releasePokemon: (pokemon) => dispatch(releaseMyPokemon(pokemon)),
});

export default connect(mapStateToProps, mapActionToProps)(MyPokemon);
