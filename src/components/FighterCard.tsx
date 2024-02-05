import { Card } from 'antd'
import { Fighter } from '../types'

export const FighterCard: React.FC<{ fighter: Fighter }> = ({ fighter }) => {
  return (
    <Card>
      <p>{fighter.name}</p>
    </Card>
  )
}
