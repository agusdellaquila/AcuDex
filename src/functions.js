export const getPokemons = async (limit=10, offset=10) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const respuesta = await fetch(url)
        const data = await respuesta.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const individualPokemon = async (url) => {
    try {
        const respuesta = await fetch(url)
        const data = await respuesta.json()
        return data
    } catch (error) {
        console.error(error)
    }
}