import '../Screen/Screen.css'
import Cards from "../Cards/Cards";

const Screen = ({ pokemons }) => {
    return (
        <div className="screen">
            {(pokemons.map((pokemon, indice) => {
                return <Cards
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                sprite={pokemon.sprites.front_default}
                moves={pokemon.abilities}
                key={indice}
                />
            }))}
        </div>
    )
}

export default Screen