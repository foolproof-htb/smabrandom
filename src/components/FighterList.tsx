import { FC } from 'react'
import { FighterCard } from './FighterCard'
import { Button, Flex, Row } from 'antd'
import { useFightersContext } from '~/contexts'

export const FighterList: FC = () => {
  const { fighters, selectAll, deselectAll } = useFightersContext()

  return (
    <>
      <Flex>
        <Button onClick={selectAll}>全選択</Button>
        <Button onClick={deselectAll}>全解除</Button>
      </Flex>
      <Row>
        {fighters.map((fighter) => (
          <FighterCard key={fighter.number} fighter={fighter} />
        ))}
      </Row>
    </>
  )
}
