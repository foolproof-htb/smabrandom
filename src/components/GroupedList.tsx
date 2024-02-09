import { Row } from 'antd'
import { FC } from 'react'
import { FighterCard } from './FighterCard'
import { useFightersContext } from '~/contexts'
import { groupBy, map } from 'lodash'

export const GroupedList: FC = () => {
  const { fighters } = useFightersContext()
  const groupedFighters = groupBy(fighters, 'series')

  return (
    <>
      {map(groupedFighters, (group, key) => (
        <>
          <p>{key}</p>

          <Row>
            {group.map((fighter) => (
              <FighterCard key={fighter.number} fighter={fighter} />
            ))}
          </Row>
        </>
      ))}
    </>
  )
}
