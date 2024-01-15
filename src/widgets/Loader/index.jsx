import PikaLoader from '../../assets/gifs/pokemon-loader.gif';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 50px;
`;

export default function Loader() {
  return <StyledImg alt="loader" src={PikaLoader} style={{ width: '50px' }} />;
}
