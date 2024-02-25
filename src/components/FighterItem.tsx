import { FC } from 'react'
import { List } from 'antd'
import { Fighter } from '~/types'
import { useFightersContext } from '~/contexts'

const FighterName: FC<{ name: string; enabled: boolean }> = ({
  name,
  enabled,
}) => <span style={{ fontWeight: enabled ? 'bold' : 'normal' }}>{name}</span>

export const FighterItem: FC<{ fighter: Fighter }> = ({ fighter }) => {
  const { toggleFighterEnabled } = useFightersContext()

  const onClick = () => {
    toggleFighterEnabled(fighter.number)
  }

  const bg = fighter.enabled ? 'white' : 'gray'

  return (
    <List.Item
      style={{
        width: '100%',
        height: '2rem',
        backgroundColor: bg,
      }}
      onClick={onClick}
    >
      <FighterName name={fighter.name} enabled={fighter.enabled} />
    </List.Item>
  )
}
