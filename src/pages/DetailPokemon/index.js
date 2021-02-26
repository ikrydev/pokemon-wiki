import React, { useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as PokeBallIcon } from '../../assets/icons/pokeball.svg';

import {
  addMyPokemon,
  setPokemonNickname,
} from '../../redux/MyPokemon/myPokemon.action';
import { getPokemonData } from '../../service/pokemon';

import {
  DetailWrapper,
  PokemonImage,
  PokemonName,
  PokemonInformation,
  PokeballWrapper,
  Input,
  Overlay,
  PopupModal,
} from './DetailPokemon.style';

import { Button, Loader } from '../../components';

const DetailPokemon = ({ match, addPokemon, setPokemonName, myPokemon }) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [nickname, setNickname] = useState('');
  const [isShowPopupModal, setIsShowPopupModal] = useState(false);
  const [status, setStatus] = useState(''); // success , catched, failed

  const API_URL = 'https://pokeapi.co/api/v2/pokemon';

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getPokemonData({
        url: `${API_URL}/${match.params.id}`,
      });

      setPokemon(data);
      setLoading(false);
    };

    fetchData();
  }, [match.params.id]);

  const loadAllInformationData = ({ list, object, attribute }) => {
    return list
      .map((data) => data[object][attribute])
      .filter((_data, index) => index < 4)
      .join(', ');
  };

  const CatchPokemon = () => {
    if (Math.random() * 100 < 50) {
      setStatus('catched');
      setIsShowPopupModal(true);
    } else {
      setStatus('failed');
      setIsShowPopupModal(true);
    }
  };

  const saveNickname = (myPokemonList, pokemon, nickname) => {
    const pokemonData = myPokemonList.find(
      (pokemon) => pokemon.id === parseInt(match.params.id)
    );

    if (pokemonData) {
      if (pokemon.nickname !== nickname) {
        const newPokemon = {
          ...pokemon,
          nickname,
        };

        setPokemon(newPokemon);
        setPokemonName(newPokemon);
        setStatus('success');
      } else {
        alert(
          'Ooops, The nickname has been used before, please use another nickname'
        );
      }
    } else {
      addPokemon({
        ...pokemon,
        nickname,
      });
      setStatus('success');
    }
  };

  const closePopupModal = () => {
    setIsShowPopupModal(false);
    setStatus('');
  };

  const openMyPokemonPage = () => history.push('/my-pokemon');

  return (
    <div>
      {loading ? (
        <Loader width="100%" height={500} radius={4} />
      ) : (
        <DetailWrapper>
          <PokemonImage source={pokemon.sprites.front_default} />
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonInformation>
            <p>
              <strong>Type :</strong>
              {loadAllInformationData({
                list: pokemon.types,
                object: 'type',
                attribute: 'name',
              })}
            </p>
            <p>
              <strong>Height : </strong> {pokemon.height}
            </p>
            <p>
              <strong>Weight: </strong> {pokemon.weight}
            </p>
            <p>
              <strong>Abilities : </strong>
              {loadAllInformationData({
                list: pokemon.abilities,
                object: 'ability',
                attribute: 'name',
              })}
            </p>
            <p>
              <strong>Moves : </strong>
              {loadAllInformationData({
                list: pokemon.moves,
                object: 'move',
                attribute: 'name',
              })}
            </p>
          </PokemonInformation>

          <PokeballWrapper>
            <Button
              type="button"
              color="dark"
              onClick={() => CatchPokemon(pokemon)}
            >
              <PokeBallIcon />
              Catch
            </Button>
          </PokeballWrapper>
        </DetailWrapper>
      )}

      {isShowPopupModal && (
        <Overlay>
          <PopupModal>
            {status === 'failed' ? (
              <div>
                <h2>FAILED</h2>
                <p>Sorry, You have failed to catch this pokemon.</p>
                <Button color="dark" onClick={closePopupModal}>
                  Close
                </Button>
              </div>
            ) : status === 'catched' ? (
              <div>
                <h2>SUCCESS</h2>
                <p>
                  You have successfully caught the pokemon, please enter a
                  nickname
                </p>
                <Input
                  placeholder="Enter Nickname"
                  type="text"
                  onChange={(e) => setNickname(e.target.value)}
                />
                <Button color="danger" onClick={closePopupModal}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onClick={() => saveNickname(myPokemon, pokemon, nickname)}
                >
                  SUBMIT
                </Button>
              </div>
            ) : (
              <div>
                <h2>SUCCESS</h2>
                <p>
                  Your Pokemon has been successfully saved in my pokemon list
                </p>
                <Button color="dark" onClick={closePopupModal}>
                  Close
                </Button>
                <Button color="primary" onClick={openMyPokemonPage}>
                  Open My Pokemon
                </Button>
              </div>
            )}
          </PopupModal>
        </Overlay>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  myPokemon: state.myPokemon.data,
});

const mapActionToProps = (dispatch) => ({
  addPokemon: (pokemon) => dispatch(addMyPokemon(pokemon)),
  setPokemonName: (pokemon) => dispatch(setPokemonNickname(pokemon)),
});

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(DetailPokemon)
);
