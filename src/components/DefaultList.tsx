import { List } from 'antd'
import { FC } from 'react'
import { FighterItem } from './FighterItem'
import { useFightersContext } from '~/contexts'

export const DefaultList: FC = () => {
  const { fighters } = useFightersContext()

  return (
    <List
      bordered
      dataSource={fighters}
      renderItem={(item) => <FighterItem key={item.number} fighter={item} />}
    />
  )
}
