import { FC, ReactNode } from 'react'
import { Button, Col, Row } from 'antd'
import { useFightersContext } from '~/contexts'

const ButtonsRow: FC<{ children: ReactNode }> = ({ children }) => (
  <Row gutter={[0, 0]}>{children}</Row>
)
const LabelCol: FC<{ children: ReactNode }> = ({ children }) => (
  <Col span={6}>{children}</Col>
)
const ButtonCol: FC<{ children: ReactNode }> = ({ children }) => (
  <Col span={9}>{children}</Col>
)

export const SwitchFighterButtons: FC = () => {
  const { checkAllEnabledStatus, switchAllEnableStatus } = useFightersContext()

  return (
    <>
      <ButtonsRow>
        <LabelCol>全員：</LabelCol>
        <ButtonCol>
          <Button
            onClick={() => {
              switchAllEnableStatus('all', true)
            }}
            disabled={checkAllEnabledStatus('all', true)}
          >
            全選択
          </Button>
        </ButtonCol>
        <ButtonCol>
          <Button
            onClick={() => {
              switchAllEnableStatus('all', false)
            }}
            disabled={checkAllEnabledStatus('all', false)}
          >
            全解除
          </Button>
        </ButtonCol>
      </ButtonsRow>
      <ButtonsRow>
        <LabelCol>DLC：</LabelCol>
        <ButtonCol>
          <Button
            onClick={() => {
              switchAllEnableStatus('dlc', true)
            }}
            disabled={checkAllEnabledStatus('dlc', true)}
          >
            全選択
          </Button>
        </ButtonCol>
        <ButtonCol>
          <Button
            onClick={() => {
              switchAllEnableStatus('dlc', false)
            }}
            disabled={checkAllEnabledStatus('dlc', false)}
          >
            全解除
          </Button>
        </ButtonCol>
      </ButtonsRow>
      <ButtonsRow>
        <LabelCol>Mii：</LabelCol>
        <ButtonCol>
          <Button
            onClick={() => {
              switchAllEnableStatus('mii', true)
            }}
            disabled={checkAllEnabledStatus('mii', true)}
          >
            全選択
          </Button>
        </ButtonCol>
        <ButtonCol>
          <Button
            onClick={() => {
              switchAllEnableStatus('mii', false)
            }}
            disabled={checkAllEnabledStatus('mii', false)}
          >
            全解除
          </Button>
        </ButtonCol>
      </ButtonsRow>
    </>
  )
}
