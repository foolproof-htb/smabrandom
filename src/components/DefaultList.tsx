import { Row } from 'antd'
import { FC } from 'react'
import { FighterCard } from './FighterCard'
import { useFightersContext } from '~/contexts'

export const DefaultList: FC = () => {
  const { fighters } = useFightersContext()

  return (
    <Row>
      {fighters.map((fighter) => (
        <FighterCard key={fighter.number} fighter={fighter} />
      ))}
    </Row>
  )
}
