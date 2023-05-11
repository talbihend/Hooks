import { Link } from 'react-router-dom';
import EditMovie from './EditMovie';
import StarRating from './StarRating'

const MovieCard = ({ card, handleDelete, handleEdit  }) => {
  
  return (
    
    <div className="card-form">
      
      <h1 className="title-form">{card.title}</h1>
      <Link to={`/info/${card.id}`}><img src={card.image} alt="filmimage" className="image-form"/></Link>
      <div className="div-date-star">
      <h3 className="date-form">{card.date}</h3>
      <p className="rate-form"><StarRating  rate={card.rate}/></p>
      </div>
      <div className="btn-card-form">
      <EditMovie handleEdit={handleEdit} card={card}/>
        <button className="buttDelMod" onClick={() => handleDelete(card.id)}>Delete</button>
        </div>
      


        

    </div>
  )
}

export default MovieCard
