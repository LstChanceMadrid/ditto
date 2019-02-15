
const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/"
const SPRITE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"




export const pokemonSprite = {
    bulbasaur: {
        male: {
            default: {
                front: `${SPRITE_URL}/1.png`,
                back: `${SPRITE_URL}/back/1.png`
            },
            shiny: {
                front: `${SPRITE_URL}/shiny/1.png`,
                back: `${SPRITE_URL}/back/shiny/1.png`
            }
        },
        female: {
            default: {
                front: null,
                back: null
            },
            shiny: {
                front: null,
                back: null
            }
        }
    },



    ditto: {
        male: {
            default: {
                front: `${SPRITE_URL}/132.png`,
                back: `${SPRITE_URL}/back/132.png`
            },
            shiny: {
                front: `${SPRITE_URL}/shiny/132.png`,
                back: `${SPRITE_URL}/back/shiny/132.png`
            }
        },
        female: {
            default: {
                front: null,
                back: null
            },
            shiny: {
                front: null,
                back: null
            }
        }
    }




}


