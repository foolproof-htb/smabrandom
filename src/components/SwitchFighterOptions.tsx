import { FC } from 'react'
import { Collapse } from 'antd'
import { SwitchFighterButtons } from './SwitchFighterButtons'

export const SwitchFighterOptions: FC = () => {
  return (
    <Collapse
      bordered={false}
      items={[
        {
          key: 1,
          label: 'ファイター選択オプション',
          children: <SwitchFighterButtons />,
        },
      ]}
    />
  )
}
