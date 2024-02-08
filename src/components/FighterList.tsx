import { FC } from 'react'
import { FighterCard } from './FighterCard'
import { Row } from 'antd'
import { useFightersContext } from '~/contexts'

export const FighterList: FC = () => {
  const { fighters } = useFightersContext()

  return (
    <Row>
      {fighters.map((fighter) => (
        <FighterCard key={fighter.number} fighter={fighter} />
      ))}
    </Row>
  )
}
