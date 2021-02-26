import styled from '@emotion/styled';

export const PokemonInformation = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.position ? props.position : 'flex-start'};
  margin: 18px 0;
`;

export const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const PokemonListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
