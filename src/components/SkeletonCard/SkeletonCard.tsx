import './SkeletonCard.scss'

const SkeletonCard = () => {
  return (
    <div className='skeleton-card'>
      <div className='skeleton-card__poster'>
        <div className='skeleton-card__vote'>
          {/* <span>vote</span> */}
        </div>
        <div className='skeleton-card__img'></div>
      </div>

      <h3 className='skeleton-card__title'></h3>
    </div>
  )
}

export default SkeletonCard
