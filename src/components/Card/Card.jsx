import "./card.css"

const Card = ({ item }) => {
    return (
        <div className='card'>
            <img src={item.image} alt={`Imagem de ${item.title}`} />
            <div className="info">
                <h2>{item.title}</h2>
            </div>
        </div>
    )
}

export default Card