import { useEffect, useState } from 'react'
import { FighterCard } from './FighterCard'
import json from './fighters.json'
import { Fighter } from '~/types'

export const FighterList = () => {
  const [fighters, setFighters] = useState<Fighter[]>([])

  useEffect(() => {
    setFighters(json)
  })

  return (
    <div style={{ display: 'flex' }}>
      {fighters.map((fighter) => (
        <FighterCard key={fighter.number} fighter={fighter} />
      ))}
    </div>
  )
}
