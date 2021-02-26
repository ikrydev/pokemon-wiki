import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getPokemonList, getPokemonData } from '../../service/pokemon';

import { Card, Loader, Navigation } from '../../components';
import { PokemonListWrapper } from './Home.style';

const Home = () => {
  const history = useHistory();

  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const API_URL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemonList(API_URL);
      setNextUrl(response.next);
      setPrevUrl(response.prevUrl);

      await getAllPokemonDetail(response.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  const getAllPokemonDetail = async (data) => {
    const pokemonListData = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonData = await getPokemonData(pokemon);
        return pokemonData;
      })
    );

    setPokemonList(pokemonListData);
  };

  const next = async () => {
    setLoading(true);
    let data = await getPokemonList(nextUrl);
    await getAllPokemonDetail(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getPokemonList(prevUrl);
    await getAllPokemonDetail(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const handleClickCard = (id) => {
    history.push(`pokemon/${id}`);
  };
  return (
    <PokemonListWrapper>
      {loading ? (
        [...Array(10)].map((_item, index) => (
          <Loader key={index} width={200} height={200} radius={4} />
        ))
      ) : (
        <>
          {pokemonList.map((pokemon, index) => (
            <Card
              key={index}
              pokemon={pokemon}
              onClick={() => handleClickCard(pokemon.id)}
            ></Card>
          ))}

          <Navigation prev={prev} next={next} />
        </>
      )}
    </PokemonListWrapper>
  );
};

export default Home;
