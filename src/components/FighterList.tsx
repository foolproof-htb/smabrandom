import { FC } from 'react'
import { FighterCard } from './FighterCard'
import { Row } from 'antd'
import { FightersProvider, useFighters } from '~/contexts'

export const FighterList: FC = () => {
  return (
    <FightersProvider>
      <Body />
    </FightersProvider>
  )
}

const Body: FC = () => {
  const { fighters } = useFighters()

  return (
    <Row>
      {fighters.map((fighter) => (
        <FighterCard key={fighter.number} fighter={fighter} />
      ))}
    </Row>
  )
}
