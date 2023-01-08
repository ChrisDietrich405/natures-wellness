const createCharacterHandler = (characterData, client, resp) => {

    const queryText = "DELETE FROM wb_player_characters WHERE user_id = $1 AND id = $2";

    client.query(queryText, [characterData.playerId, characterData.characterId], (err, res) => {
        resp.status(200).json({ success: true});
    }); 
}

module.exports = createCharacterHandler;