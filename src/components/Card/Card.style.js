import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 3px -5px 32px rgba(205, 205, 212, 0.1);
  min-height: 100px;
  margin: 5px;
  flex: 0 0 calc(50% - 10px);
  cursor: pointer;
`;

export const CardFooter = styled.div`
  border-top: 1px solid #f2f4f4;
  text-align: center;
  padding: 10px;
`;

export const PokemonName = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
`;

export const PokemonImage = styled.img`
  width: 100%;
  height: auto;
  margin: auto;
  content: url('${(props) => props.source}');
`;
