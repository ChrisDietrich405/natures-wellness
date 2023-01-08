const updateCharacterSkillsHandler = (data, client, res) => {
    console.log(data.userId);
    const queryText = 'UPDATE wb_player_characters SET skills_id = $1 WHERE user_id = $2 AND id = $3';
    const skillsIds = JSON.stringify(data.dataArray.map((skill) => skill == undefined ? 0 : skill.id));

    client.query(queryText, [skillsIds, data.userId, data.characterId], () => {
        res.status(200).json({ success: true });
    });
}

module.exports = updateCharacterSkillsHandler;