import { Button, Col, Row } from 'antd'
import { useState } from 'react'
import { useFightersContext } from '~/contexts'
import { Fighter } from '~/types'
import { sample } from 'lodash'
import styled from 'styled-components'

const StyledCol = styled(Col)({
  width: '100%',
  fontSize: '24px',
  marginBottom: '8px',
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
})

export const RandomFighterPanel = () => {
  const { fighters } = useFightersContext()
  const onClick = () => {
    const enabledFighters = fighters.filter((f) => f.enabled)
    setChosenFighter(sample(enabledFighters))
  }

  const [chosenFighter, setChosenFighter] = useState<Fighter>()

  return (
    <>
      <Row>
        <StyledCol>
          {chosenFighter ? chosenFighter.name : 'Choose Your Fighter!!'}
        </StyledCol>
      </Row>
      <Button onClick={onClick}>ファイターを選ぶ</Button>
    </>
  )
}
