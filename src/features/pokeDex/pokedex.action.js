export const POKE_LIST_RECIVED = "POKE_LIST_RECIVED";
import * as pokeGateway from '../gateway/gateway'
export const pokeListRecived = pokeList => {
    return {
        type: POKE_LIST_RECIVED,
        payload: {
            pokeList
        }
    }
}


export const getPokeList = () => {
    return function (dispatch) {
        pokeGateway.fetchPokeList().then(data => dispatch(pokeListRecived(data)))
    }
}

export const getPoke = (id) =>{
    return function (dispatch){
        pokeGateway.fetchPoke(id)
    }
}