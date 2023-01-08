const { returnMonstersIdsFromStage } = require("../../codedData/maps");
const returnSelectedMonsters = require("../../codedData/monsters");

const createPveBattleHandler = (battleData, client, resp) => {

    const queryText = "INSERT INTO wb_pve_battle (player_id, character_id, monster_id, stage_id, turns) VALUES ($1, $2, $3, $4, '[]')";

    const monster = returnSelectedMonsters(returnMonstersIdsFromStage(battleData.stageId))[0];

    delete monster.action;
    // DESCOMENTAR QUANDO ESTIVER PRONTO
    // client.query(queryText, [battleData.playerId, battleData.characterId, monsters.id, battleData.stageId], (err, res) => {
    //     resp.status(200).json({ success: true, battleId: 1, monsterData });
    // });

    console.log("C-BATTLE: ", monster);
    const battleState = {
        battleId: 1,
        playerId: null,
        characterId: null,
        monsterId: null,
        characterData: null,
        characterInitialData: null,
        monsterData: monster,
        monsterInitialData: monster,
        currentTurn: null,
        turnsData: null,
    }

    resp.status(200).json({ success: true, battleState });
}

module.exports = createPveBattleHandler;