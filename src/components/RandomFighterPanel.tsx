import { Button } from 'antd'
import { useState } from 'react'
import { useFightersContext } from '~/contexts'
import { Fighter } from '~/types'
import { sample } from 'lodash/'

export const RandomFighterPanel = () => {
  const { fighters } = useFightersContext()
  const onClick = () => {
    const enabledFighters = fighters.filter((f) => f.enabled)
    setChosenFighter(sample(enabledFighters))
  }

  const [chosenFighter, setChosenFighter] = useState<Fighter>()
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '300px', fontSize: '24px' }}>
        {chosenFighter?.name}
      </div>
      <Button onClick={onClick}>ファイターを選ぶ</Button>
    </div>
  )
}
