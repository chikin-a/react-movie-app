import { CardModel } from './CardModel'

export const Card = ({ title }: CardModel) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
