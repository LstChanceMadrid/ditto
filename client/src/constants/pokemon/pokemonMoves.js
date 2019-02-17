
export const pokemonMove = {
    growl: {
        name: 'Growl',
        type: 'Normal',
        category: 'Status',
        powerPoints: 40,
        power: '--',
        accuracy: 100,
        // priority: null,
        contact: false,
        additionalEffects: {
            description: 'reduces opponents attack',
            stage: {
                negSix: 2/8,
                negFive: 2/7,
                negFour: 2/6,
                negThree: 2/5,
                negTwo: 2/4,
                negOne: 2/3,
                base: 1,
                posOne: 1.5,
                posTwo: 2,
                posThree: 2.5,
                posFour: 3,
                posFive: 3.5,
                posSix: 4,
            }
        },
        condition: null,
        // appeal: null,
        // jamming: null
    },
    tackle: {
        name: 'Tackle',
        type: 'Normal',
        category: 'Physical',
        powerPoints: 35,
        power: 40,
        accuracy: 100,
        // priority: null,
        contact: true,
        additionalEffects: null,
        condition: null,
        // appeal: null,
        // jamming: null
    },
    transform: {
        name: 'Transform',
        type: 'Normal',
        category: 'Status',
        powerPoints: 10,
        power: '--',
        accuracy: '--',
        // priority: null,
        contact: false,
        additionalEffects: null,
        condition: null,
        // appeal: null,
        // jamming: null
    },
    vineWhip: {
        name: 'Vine Whip',
        type: 'Grass',
        category: 'Physical',
        powerPoints: 25,
        power: 45,
        accuracy: 100,
        // priority: null,
        contact: true,
        additionalEffects: null,
        condition: null,
        // appeal: null,
        // jamming: null
    }
}