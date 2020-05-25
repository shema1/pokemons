const baseUrl = "http://pokeapi.co/api/v2/pokemon/?limit=12"



export const fetchPokeList = () => {
    return fetch(`${baseUrl}`).then(response => response.json())
}

export const fetchPokeListWhithParam = (paramUrl) => {
    return fetch(`${paramUrl}`).then(response => response.json())
}


export const fetchPoke = (url) => {
    return fetch(url).then(response => response.json())
}