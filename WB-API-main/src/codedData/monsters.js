
const monsters = [
    {
        id: 1,
        name: "Monster 1",
        attributes: { STR: 450, DEX: 230, INT: 170, AGI: 230, TOU: 310, CON: 410 },
        // itens: {},
        level: 1,
        model: "https://i.ibb.co/nrg9Czq/bear.png",
        portrait: "https://i.ibb.co/nrg9Czq/bear.png",
        actionsId: 1
    },
    {
        id: 2,
        name: "Monster 2",
        attributes: { STR: 450, DEX: 230, INT: 170, AGI: 230, TOU: 310, CON: 410 },
        // itens: {},
        level: 1,
        model: "https://i.ibb.co/nrg9Czq/bear.png",
        portrait: "https://i.ibb.co/nrg9Czq/bear.png",
        actionsId: 2
    },
    {
        id: 3,
        name: "Monster 3",
        attributes: { STR: 450, DEX: 230, INT: 170, AGI: 230, TOU: 310, CON: 410 },
        // itens: {},
        level: 1,
        model: "https://i.ibb.co/nrg9Czq/bear.png",
        portrait: "https://i.ibb.co/nrg9Czq/bear.png",
        actionsId: 3
    },
    {
        id: 4,
        name: "Monster 4 | Boss",
        attributes: { STR: 450, DEX: 230, INT: 170, AGI: 230, TOU: 310, CON: 410 },
        // itens: {},
        level: 1,
        model: "https://i.ibb.co/LxDbqky/dragon.webp",
        portrait: "https://i.ibb.co/LxDbqky/dragon.webp",
        actionsId: 4
    },
];

const returnSelectedMonsters = (monstersIds) => {
    if(monstersIds == "all"){
        return monsters;
    }

    const monstersArray = [];

    monstersIds.forEach((monster) => {
        const monsterData = monsters.find((data) => data.id == monster);
        monstersArray.push(monsterData);
    })

    return monstersArray;
};

module.exports = returnSelectedMonsters;

