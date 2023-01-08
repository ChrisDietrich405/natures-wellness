const returnSelectedItens = require('../../codedData/itens');
const returnSelectedSkills = require('../../codedData/skills');
const returnSelectedTraitss = require('../../codedData/traits');
const returnSelectedRaces = require('../../codedData/races');

const myCharactersHandler = (userId, client, resp) => {

    const queryText = 'SELECT * FROM wb_player_characters WHERE user_id = $1';
    console.log("ID: ", userId);
    client.query(queryText, [userId], (err, res) => {
        if(res.rows.length !== 0){
            
            const characters = res.rows.map((char) => {
                
                const attributes = JSON.parse(char.atributes);
                const skillsIds = JSON.parse(char.skills_id);
                const traitsIds = JSON.parse(char.traits_id);
                const itensIds = JSON.parse(char.itens_id);

                delete char.skills_id;
                delete char.traits_id;
                delete char.itens_id;

                const skills = returnSelectedSkills(skillsIds);
                const traits = returnSelectedTraitss(traitsIds);
                const itens = returnSelectedItens(itensIds);
                const raceData = returnSelectedRaces([parseInt(char.race_id)])[0];
                
                let classData;

                for(let i = 0; i<raceData.classes.length;i++){
                    if(raceData.classes[i].id == char.class_id){
                        classData = raceData.classes[i];
                    }
                }

                delete char.class_id;
                delete char.race_id;
                
                return {
                    ...char,
                    attributes,
                    skills,
                    traits,
                    itens,
                    race: {
                        id: raceData.id,
                        name: raceData.name,
                        description: raceData.description,
                        class: classData,
                    },
                };
            })

            resp.json({ userCharacters: characters });
        } else {
            resp.json({ userCharacters: [] });
        }
    }); 
}

module.exports = myCharactersHandler;