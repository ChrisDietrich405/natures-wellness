const returnSelectedRaces = require('../../codedData/races');

const createCharacterHandler = (characterData, client, resp) => {

    const { raceId, classId, name, playerId } = characterData;

    const race = returnSelectedRaces([raceId])[0];

    let classData;

    for(let i = 0; i<race.classes.length;i++){
        if(race.classes[i].id == classId){
            classData = race.classes[i];
        }
    }

    const queryText = "INSERT INTO wb_player_characters (name, user_id, level, portrait, model, special_skill_id, class_id, race_id, atributes, skills_id, traits_id, itens_id) VALUES ( $1, $2, 1, $3, $4, 1, $5, $6, $7, '[0,0,0,0]', '[0,0,0,0]', '[0,0,0,0]')";

    client.query(queryText, [name, playerId, classData.portrait, classData.model, classId, raceId, JSON.stringify(classData.attributes)], (err, res) => {
        console.log("RES: ", res);
        console.log("ERR: ", err);
        resp.status(200).json({ success: true});
    }); 
}

module.exports = createCharacterHandler;