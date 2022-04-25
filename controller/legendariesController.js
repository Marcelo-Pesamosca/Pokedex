const LegendarieService = require('../Service/LegendariesService')

const controller= {
index: (request, response) => {
const { id } = request.params
const{ name } = request.query

const legendary = LegendarieService.ListPokemonData(name);

return response.json(legendary) 
},
creat: (request, response)=> {
    const {    name,
        description,
        type,
        helthPoints,
        defense,
        attack,
        experience,
        especialDefense 
    } = request.body
    
    const legendary = LegendarieService.creatLegendary(
        name,
        description,
        type,
        helthPoints,
        defense,
        attack,
        experience,
        especialDefense
    )

    return response.json(legendary)
}


}


module.exports = controller