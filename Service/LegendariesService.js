const LegendaryModel = require('../models/LegendaryModel')
const { uuid } = require ('uuidv4')


const LegendarieService = {
    ListLegendarie: ()=> {
      const MewTwo = new LegendaryModel(
        1 ,
        'MewTwo',
        'Its DNA is almost the same as Mews Howerver, its size and disposition are vastly different',
        'Fogo',
        '1000,000',
        '1000,000',
        '1000,000',
        '1000,000',
        '1000,000',
        '1000,000',
        
        )
     
            const Moltres = new LegendaryModel(
              2 ,
              'Moltres',
              'Its DNA is almost the same as Mews Howerver, its size and disposition are vastly different',
              'Fogo',
              '1000,000',
              '1000,000',
              '1000,000',
              '1000,000',
              '1000,000',
              '1000,000',
            )

        return [MewTwo, Moltres];
    },
    ListPokemonData: (pokemonName) => {
      const pokemonList = LegendarieService.ListLegendarie();
      const pokemon = pokemonList.fing(item => item.name === pokemonName);
      return pokemon;

    },
    creatLegendary:(
      name,
      description,
      type,
      helthPoints,
      defense,
      attack,
      experience,
      especialDefense
    ) => {
      const newLegendary = new LegendaryModel(
        uuid(),
        name,
      description,
      type,
      helthPoints,
      defense,
      attack,
      experience,
      especialDefense
      )

      return newLegendary;
    },
 
}


module.exports = LegendarieService;