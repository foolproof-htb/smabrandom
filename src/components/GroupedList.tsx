import { List } from 'antd'
import { FC, Fragment } from 'react'
import { FighterItem } from './FighterItem'
import { useFightersContext } from '~/contexts'
import { groupBy, map } from 'lodash'

export const GroupedList: FC = () => {
  const { fighters } = useFightersContext()
  const groupedFighters = groupBy(fighters, 'series')

  return (
    <>
      {map(groupedFighters, (group, key) => (
        <Fragment key={key}>
          <p>{key}</p>

          <List
            bordered
            dataSource={group}
            renderItem={(item) => (
              <FighterItem key={item.number} fighter={item} />
            )}
          />
        </Fragment>
      ))}
    </>
  )
}
