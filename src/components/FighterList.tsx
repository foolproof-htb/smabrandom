import { FC, useState } from 'react'
import { Flex, Switch } from 'antd'
import { GroupedList } from './GroupedList'
import { DefaultList } from './DefaultList'
import { SwitchFighterOptions } from './SwitchFighterOptions'

export const FighterList: FC = () => {
  const [isGrouped, setIsGrouped] = useState<boolean>(false)

  const onChangeArrangement = (checked: boolean) => {
    setIsGrouped(checked)
  }

  return (
    <>
      <div style={{ margin: '8px 0' }}>
        <SwitchFighterOptions />
      </div>
      <Flex>
        <p>シリーズ別表示</p>
        <Switch
          checkedChildren="シリーズ別"
          unCheckedChildren="番号順"
          onChange={onChangeArrangement}
        />
      </Flex>
      {isGrouped ? <GroupedList /> : <DefaultList />}
    </>
  )
}
