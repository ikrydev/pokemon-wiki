import styled from '@emotion/styled';

const colors = {
  dark: '#3c4858',
  primary: '#1292ee',
  danger: '#ff312d',
};

const getColorFromProps = (props) => {
  if (props.color) {
    return ['dark', 'danger', 'primary'].includes(props.color)
      ? colors[props.color]
      : colors['dark'];
  }

  return colors['dark'];
};

export const MainButton = styled.button`
  color: white;
  border: none;
  margin: 10px 5px;
  width: auto;
  padding: 10px;
  font-size: 15px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: bolder;
  cursor: pointer;
  background-color: ${getColorFromProps};
`;
