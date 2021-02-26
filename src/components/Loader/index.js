import styled from '@emotion/styled';

const Loader = styled.div`
  width: ${(props) =>
    typeof props.width === 'string' ? props.width : props.width + 'px'};
  height: ${(props) =>
    typeof props.height === 'string' ? props.height : props.height + 'px'};
  border-radius: ${(props) =>
    typeof props.radius === 'string' ? props.radius : props.radius + 'px'};
  display: inline-block;
  background-color: #e2e6ea;
  animation-name: ShineAnimation;
  animation-duration: 1.5s;
  margin: 5px;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.12, 0.89, 0.98, 0.47);

  @keyframes ShineAnimation {
    from {
      background-repeat: no-repeat;
      background-image: linear-gradient(
        to left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 0.5) 45%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.5) 55%,
        rgba(255, 255, 255, 0) 80%,
        rgba(255, 255, 255, 0) 100%
      );
      background-position: -300px -300px;
      background-size: 600px 600px;
    }
    to {
      background-repeat: no-repeat;
      background-position: 300px 300px;
    }
  }
`;

export default Loader;
