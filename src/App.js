import './App.css';
import Dashboard from './modules/Dashboard';
import PokemonLogo from './assets/images/pokemon.png';
import configuration from './configuration';
import styled from 'styled-components';

const StyledImg = styled.img`
  position: absolute;
  left: 0px;
  bottom: 0px;
  opacity: 0.03;
  width: 75%;
`;

const App = () => {
  return (
    <>
      <Dashboard configuration={configuration} />
      <StyledImg alt="pokemon-logo" src={PokemonLogo} />
    </>
  );
};

export default App;
