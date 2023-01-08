
const maps = [
    {
        name: 'Floresta',
        level: [1,10],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac.",
        id: 1,
        stages: [
            { id : 1, name: 'estagio 1', position: [7,64], enemies: [1], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac.", },
            { id : 2, name: 'estagio 2', position: [31,80], enemies: [1], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 3, name: 'estagio 3', position: [42,38], enemies: [2], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 4, name: 'estagio 4', position: [57,85], enemies: [2], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 5, name: 'estagio 5', position: [63,52], enemies: [3], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 6, name: 'estagio 6', position: [74,70], enemies: [3], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 7, name: 'estagio 7', position: [83,30], enemies: [4], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
        ]
    },
    {
        name: 'Planicie',
        level: [11,20],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac.",
        id: 2,
        stages: [
            { id : 8, name: 'estagio 8', position: [7,64], enemies: [1], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 9, name: 'estagio 9', position: [31,80], enemies: [1], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 10, name: 'estagio 10', position: [42,38], enemies: [2], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 11, name: 'estagio 11', position: [57,85], enemies: [2], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 12, name: 'estagio 12', position: [63,52], enemies: [3], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 13, name: 'estagio 13', position: [83,30], enemies: [3], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
            { id : 14, name: 'estagio 14', position: [74,70], enemies: [4], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nunc tellus, et volutpat nisi hendrerit ac." },
        ]
    },
    // { name: 'Planicie', nivel: '11-20', idMapa: '02'},
    // { name: 'Montanha', nivel: '21-30', idMapa: '03'},
    // { name: 'Pantano', nivel: '31-40', idMapa: '04'},
    // { name: 'Planalto', nivel: '41-50', idMapa: '05'},
    // { name: 'Savana', nivel: '51-60', idMapa: '06'},
    // { name: 'Deserto', nivel: '61-70', idMapa: '07'},
];

const returnSelectedMaps = (mapsIds) => {
    if(mapsIds == "all"){
        return maps;
    }

    const mapsArray = [];

    mapsIds.forEach((map) => {
        const mapData = maps.find((data) => data.id == map);
        mapsArray.push(mapData);
    })

    return mapsArray;
};

const returnMonstersIdsFromStage = (stageId) => {
    let monstersIds;

    maps.forEach((map) => {
        map.stages.forEach((stage) => {
            if(stage.id == stageId){
                monstersIds = stage.enemies;
            }
        })
    });

    return monstersIds;
}

module.exports = {
    returnSelectedMaps,
    returnMonstersIdsFromStage
};