const returnSelectedMonsters = require('../../codedData/monsters');

const getMonstersHandler = (resp, data) => {
    const monsterId = data && data.monsterId;

    const monsterData = returnSelectedMonsters(monsterId ? [monsterId] : "all");
    
    const jsonMonsterData = monsterData.map((monDat) => {
        return {
            ...monDat,
            action: JSON.stringify(monDat.action)
        }
    });

    console.log(jsonMonsterData);

    resp.status(200).json({ monsters: jsonMonsterData });
}

module.exports = getMonstersHandler;