import styled from '@emotion/styled';

export const DetailWrapper = styled.div`
  background-color: #ffffff;
  min-height: 150px;
  margin: 5px;
  padding: 20px;
  text-align: center;
  margin: -20px;
  height: 100vh;
`;

export const PokemonImage = styled.img`
  width: 300px;
  height: auto;
  content: url('${(props) => props.source}');
`;

export const PokemonInformation = styled.div`
  text-align: center;
  padding: 5px;
  background-color: #fff;
`;

export const PokemonName = styled.h2`
  border-top: 1px solid #f2f4f4;
  border-bottom: 1px solid #f2f4f4;
  text-align: center;

  padding: 10px;
`;

export const PokeballWrapper = styled.div`
  position: absolute;
  width: 50px;
  top: 50px;
  right: 50px;
`;

export const Overlay = styled.div`
  transition: all 0.3s ease-out;
  position: absolute;
  background-color: rgba(31, 37, 46, 0.62);
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 10;
`;

export const PopupModal = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 11;
  height: 400px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: #ffffff;
  padding: 50px;
  text-align: center;
`;

export const Input = styled.input`
  margin-top: 25px;
  width: 100%;
  padding: 8px 16px;
  line-height: 24px;
  border-radius: 8px;
  border: 1px solid #edeff1;
`;
