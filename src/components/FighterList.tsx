import { FC, useState } from 'react'
import { Button, Flex, Row, Switch } from 'antd'
import { useFightersContext } from '~/contexts'
import { GroupedList } from './GroupedList'
import { DefaultList } from './DefaultList'

export const FighterList: FC = () => {
  const { selectAll, deselectAll, deselectDlc } = useFightersContext()
  const [isGrouped, setIsGrouped] = useState<boolean>(false)

  const onChangeArrangement = (checked: boolean) => {
    setIsGrouped(checked)
  }

  return (
    <>
      <Row>
        <Button onClick={selectAll}>全ファイター有効化</Button>
        <Button onClick={deselectAll}>全ファイター無効化</Button>
        <Button onClick={deselectDlc}>DLCファイターを無効化</Button>
      </Row>
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
