import React from 'react';

import { Card, CardFooter, PokemonImage, PokemonName } from './Card.style';

const PokemonCard = ({ pokemon, children, onClick }) => {
  return (
    <Card>
      <PokemonImage source={pokemon.sprites.front_default} onClick={onClick} />
      <CardFooter>
        <PokemonName onClick={onClick}>
          {pokemon.nickname ? pokemon.nickname : pokemon.name}
        </PokemonName>
        {children}
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
