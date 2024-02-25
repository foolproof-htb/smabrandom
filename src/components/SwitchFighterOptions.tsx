import { FC } from 'react'
import { Button, Collapse } from 'antd'
import { useFightersContext } from '~/contexts'
import styled from 'styled-components'

const StyledButton = styled(Button)({
  marginBottom: '4px',
  width: '100%',
})

export const SwitchFighterOptions: FC = () => {
  const { selectAll, deselectAll, deselectDlc } = useFightersContext()

  return (
    <Collapse
      bordered={false}
      items={[
        {
          key: 1,
          label: 'ファイター選択オプション',
          children: (
            <>
              <StyledButton onClick={selectAll}>
                全ファイター有効化
              </StyledButton>
              <StyledButton onClick={deselectAll}>
                全ファイター無効化
              </StyledButton>
              <StyledButton onClick={deselectDlc}>
                DLCファイターを無効化
              </StyledButton>
            </>
          ),
        },
      ]}
    />
  )
}
