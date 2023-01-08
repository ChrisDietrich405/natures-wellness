const returnSelectedItens = require('../../codedData/itens');

const updateCharacterItensHandler = (data, client, res) => {
    console.log(data);
    const queryText = 'UPDATE wb_player_characters SET itens_id = $1 WHERE user_id = $2 AND id = $3';
    const itensIds = JSON.stringify(data.dataArray.map((item) => item == undefined ? 0 : item.id));

    client.query(queryText, [itensIds, data.userId, data.characterId], () => {
        res.status(200).json({ success: true });
    });
}

module.exports = updateCharacterItensHandler;