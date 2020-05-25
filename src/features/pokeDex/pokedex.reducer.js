import { POKE_LIST_RECIVED } from './pokedex.action'



const initState = {
    pokeList: []
}

const pokeReducer = (state = initState, action) => {
    switch (action.type) {
        case POKE_LIST_RECIVED: {
            return {
                ...state,
                pokeList: action.payload.pokeList
            }
        }

        default: {
            return state
        }
    }
}

export default pokeReducer