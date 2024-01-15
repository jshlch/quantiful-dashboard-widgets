export default {
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
