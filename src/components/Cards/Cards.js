import '../Cards/Cards.css'

const Cards = ({id, name, type, sprite, moves}) => {
    return (
        <div className='card'>
            <span>#{id}</span>
            <span className='name'>{name}</span>
            <span className={`fwBold ${type} type mt1`}> {type}</span>
            <img src={sprite} alt={name}/>
            <div>
                <span>Abilities</span>
                <ul className='abilities'>
                    {moves.map((abilities, indice) => {
                        return <li className='abilities' key={indice}>{abilities.ability.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Cards