import { FC } from 'react'
import { Card } from 'antd'
import { Fighter } from '~/types'
import { useFightersContext } from '~/contexts'

export const FighterCard: FC<{ fighter: Fighter }> = ({ fighter }) => {
  const { toggleFighterEnabled } = useFightersContext()

  const onClick = () => {
    toggleFighterEnabled(fighter.number)
  }

  const bg = fighter.enabled ? 'white' : 'gray'

  return (
    <Card
      style={{ width: '150px', margin: '5px', backgroundColor: bg }}
      onClick={onClick}
    >
      <p>{fighter.name}</p>
    </Card>
  )
}
