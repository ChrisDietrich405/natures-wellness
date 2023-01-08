const updateCharacterTraitsHandler = (data, client, res) => {

    const queryText = 'UPDATE wb_player_characters SET traits_id = $1 WHERE user_id = $2 AND id = $3';
    const traitsIds = JSON.stringify(data.dataArray.map((trait) => trait == undefined ? 0 : trait.id));

    client.query(queryText, [traitsIds, data.userId, data.characterId], () => {
        res.status(200).json({ success: true });
    });
}

module.exports = updateCharacterTraitsHandler;