const startPveBattleHandler = (characterData, client, resp) => {

    const queryText = "INSERT INTO wb_pvp_battle () VALUES ()";

    client.query(queryText, [characterData.playerId, characterData.characterId], (err, res) => {
        console.log("ROW: ", res.rows);
        resp.status(200).json({ success: true, battleId: 1 });
    }); 
}

module.exports = startPveBattleHandler;