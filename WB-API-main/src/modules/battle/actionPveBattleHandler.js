const startPveBattleHandler = (characterData, client, resp) => {

    const queryText = "INSERT INTO wb_pve_battle (playerId, monsterId, stageId, turns) VALUES ($1, $2, $3, '[]')";

    client.query(queryText, [characterData.playerId, characterData.characterId], (err, res) => {
        console.log("ROW: ", res.rows);
        resp.status(200).json({ success: true, battleId: 1 });
    });
}

module.exports = startPveBattleHandler;