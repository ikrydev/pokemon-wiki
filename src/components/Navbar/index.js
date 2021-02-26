import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as PokeBallIcon } from '../../assets/icons/pokeball.svg';

import {
  HeaderContainer,
  HeaderWrapper,
  LogoWrapper,
  BookmarkWrapper,
  BookmarkCount,
  LogoText,
} from './Navbar.style';

const Header = ({ myPokemon, showBackButton }) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoWrapper to="/">
          <LogoText>PokeWiki</LogoText>
        </LogoWrapper>
        <BookmarkWrapper to="/my-pokemon">
          <BookmarkCount>{myPokemon.length}</BookmarkCount>
          <PokeBallIcon />
        </BookmarkWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  myPokemon: state.myPokemon.data,
});

export default connect(mapStateToProps)(Header);
