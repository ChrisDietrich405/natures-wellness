const races = [
    {
        id: 2,
        name: 'Felinos',
        icon:'',
        description: 'exemplo descrição',
        // traits: [{}],
        // skills: [{}],
        classes: [
            {   
                id: 1,
                name: 'Leão',
                portrait: 'https://i.ibb.co/8xjqJN4/lion.png',
                description: 'exemplo descrição',
                model: 'https://i.ibb.co/8xjqJN4/lion.png',
                // skills: [
                    // { nome: 'Ataque de Garras', mod: 1, custo: 50, tipo: 'ataque', icone: ""},
                    // { nome: 'Mordida', mod: 1.2, custo: 50, tipo: 'ataque', icone: ""},
                    // { nome: 'Cura', mod: 10, custo: 16, tipo: 'cura'}
                // ], 
                // traits: [
                    // { nome: 'regen', efeito: ''},
                    // { nome: 'sangria', efeito: ''},
                // ],
                special: { nome: 'especial', description: "", tipo: 'buff', value: 1.4, effect: null },
                attributes: { STR: 360, DEX: 335, CON: 330, INT: 220, TOU: 240, AGI: 315}
            },
            // { 
            //     name: 'Leopardo',
            //     portrait: '',
            //     description: 'exemplo descrição',
            //     model: '',
            //     skills: [{ nome: 'habilidade1'}, { nome: 'habilidade2'}, { nome: 'habilidade3'}],
            //     attributes: { STR: 300, DEX: 460, CON: 200, INT: 200, TOU: 180, AGI: 400}
            // },
            { 
                id: 2,
                name: 'Tigre',
                portrait: 'https://i.ibb.co/5ntRKcv/tiger.png',
                description: 'exemplo descrição',
                model: 'https://i.ibb.co/5ntRKcv/tiger.png',
                // skills: [{ nome: 'habilidade1'}, { nome: 'habilidade2'}, { nome: 'habilidade3'}],
                attributes: { STR: 330, DEX: 390, CON: 280, INT: 250, TOU: 200, AGI: 350}
            },
        ]
    },

    {
        id: 1,
        name: 'Caninos',
        icon:'',
        description: 'exemplo descrição',
        classes: [
            { 
                id: 1,
                name: 'Lobo',
                portrait: 'https://i.ibb.co/82tS5ZT/wolf.png',
                description: 'exemplo descrição',
                model: 'https://i.ibb.co/82tS5ZT/wolf.png',
                // skills: [{ nome: 'habilidade1'}, { nome: 'habilidade2'}, { nome: 'habilidade3'}],
                attributes: { STR: 290, DEX: 340, CON: 230, INT: 360, TOU: 230, AGI: 350 }
            },
            // { nome: 'Hyena', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
            { 
                id: 2,
                name: 'Terrier',
                portrait: 'https://i.ibb.co/ZBcc07W/terrier.png',
                description: 'exemplo descrição',
                model: 'https://i.ibb.co/ZBcc07W/terrier.png',
                // skills: [{ nome: 'habilidade1'}, { nome: 'habilidade2'}, { nome: 'habilidade3'}],
                attributes: { STR: 430, DEX: 300, CON: 330, INT: 170, TOU: 250, AGI: 320 }
            },
        ]
    },

    // {
    //     name: 'Repteis',
    //     icon:'',
    //     descricao: 'exemplo descrição',
    //     racas: [
    //         { nome: 'Crocodilo', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //         { nome: 'Cobra', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //         { nome: 'Tartaruga', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //     ]
    // },

    // {
    //     nome: 'Insetos',
    //     simbolo:'',
    //     descricao: 'exemplo descrição',
    //     racas: [
    //         { nome: 'Aranha', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //         { nome: 'Besouro', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //         { nome: 'Formiga', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //     ],
    // },
];

const returnSelectedRaces = (racesIds) => {
    if(racesIds == "all"){
        return races;
    }

    const racesArray = [];

    racesIds.forEach((race) => {
        const raceData = races.find((data) => data.id == race);
        racesArray.push(raceData);
    })

    return racesArray;
};

module.exports = returnSelectedRaces;