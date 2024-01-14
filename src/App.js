import './App.css';
import Dashboard from './modules/Dashboard';
import PokemonLogo from './assets/images/pokemon.png';
import styled from 'styled-components';

const StyledImg = styled.img`
  position: absolute;
  left: 0px;
  bottom: 0px;
  opacity: 0.03;
  width: 75%;
`;

const App = () => {
  const configuration = {
    columns: [
      {
        // First column
        size: 1, // The size of the column
        heading: 'General Pokemon Information',
        widgets: [
          {
            title: 'Pokemon Colours',
            subtitle: 'List of all the colours',
            type: 'list',
            api: 'https://pokeapi.co/api/v2/pokemon-color/',
          },
          {
            title: 'Pokemon Gender',
            subtitle: 'List of all the genders',
            type: 'list',
            api: 'https://pokeapi.co/api/v2/gender/',
          },
        ],
      },
      {
        // Second column
        size: 2, // The size of the column
        heading: 'Pokemon Counts',
        widgets: [
          {
            title: 'Male Count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/gender/2/',
          },
          {
            title: 'Female Count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/gender/1/',
          },
          {
            title: 'Genderless Count',
            type: 'number',
            api: 'https://pokeapi.co/api/v2/gender/3/',
          },
        ],
      },
    ],
  };
  return (
    <>
      <Dashboard configuration={configuration} />
      <StyledImg alt="pokemon-logo" src={PokemonLogo} />
    </>
  );
};

export default App;
