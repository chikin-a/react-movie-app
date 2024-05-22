import { CardModel } from './CardModel'
import './Card.scss'
import { Link } from 'react-router-dom'

export const Card = ({ id, name, poster, voteAverage }: CardModel) => {
  const posterSrc = `https://media.themoviedb.org/t/p/w220_and_h330_face${poster}`
  const vote = Math.trunc(voteAverage * 10) / 10

  return (
    <Link className='card__overlay' style={{}} to={`/movie/${id}`}>
      <div className='card'>
        <div className='card__poster'>
          <div className='card__vote'>
            <div className='card__rating'></div>
            <span>{vote}</span>
          </div>
          <img className='card__img' src={posterSrc} alt={name} />
        </div>

        <h3 className='card__title'>{name}</h3>
      </div>
    </Link>
  )
}
