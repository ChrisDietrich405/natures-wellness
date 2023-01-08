const itens = [
    {
        id: 1,
        name: 'Runa do poder',
        icon: 'https://i.ibb.co/8cpnK1b/ability-domination-rune05.jpg',
        description: 'Uma runa que aumenta seu poder de ataque.',
        STR: 2,
        DEX: 0,
        CON: 0,
        INT: 0,
        TOU: 0,
        AGI: 0,
    },
    {
        id: 2,
        name: 'Runa da velocidade',
        icon: 'https://i.ibb.co/J3gbKYD/ability-domination-rune03.jpg',
        description: 'Uma runa que aumenta sua velocidade.',
        STR: 0,
        DEX: 2,
        CON: 0,
        INT: 0,
        TOU: 0,
        AGI: 0,
    },
    {
        id: 3,
        name: 'Runa do vigor',
        icon: 'https://i.ibb.co/c2mTN92/ability-domination-rune07.jpg',
        description: 'Uma runa que aumenta seu vigor.',
        STR: 0,
        DEX: 0,
        CON: 2,
        INT: 0,
        TOU: 0,
        AGI: 0,
    },
    {
        id: 4,
        name: 'Runa da agilidade',
        icon: 'https://i.ibb.co/h9Rwq5b/ability-domination-rune11.jpg',
        description: 'Uma runa que melhora seus movimentos.',
        STR: 0,
        DEX: 0,
        CON: 0,
        INT: 0,
        TOU: 0,
        AGI: 2,
    }
];

const returnSelectedItens = (itensIds) => {
    
    if(itensIds == "all"){
        return itens;
    }

    const itensArray = [];

    itensIds.forEach((item) => {
        const itemData = itens.find((data) => data.id == item);
        itensArray.push(itemData);
    })

    return itensArray;
};

module.exports = returnSelectedItens;