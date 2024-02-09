import { FC, useState } from 'react'
import { Button, Flex, Switch } from 'antd'
import { useFightersContext } from '~/contexts'
import { GroupedList } from './GroupedList'
import { DefaultList } from './DefaultList'

export const FighterList: FC = () => {
  const { selectAll, deselectAll } = useFightersContext()
  const [isGrouped, setIsGrouped] = useState<boolean>(false)

  const onChangeArrangement = (checked: boolean) => {
    setIsGrouped(checked)
  }

  return (
    <>
      <Flex>
        <Button onClick={selectAll}>全選択</Button>
        <Button onClick={deselectAll}>全解除</Button>
      </Flex>
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
