import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { Fighter } from '~/types'
import json from './fighters.json'

type ContextType = {
  fighters: Fighter[]
  toggleFighter: (number: string) => void
}

const FightersContext = createContext<ContextType>({
  fighters: [],
  toggleFighter: () => {},
})

export const useFighters = () => {
  return useContext(FightersContext)
}

export const FightersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [fighters, setFighters] = useState<Fighter[]>(
    json.map((item) => ({ ...item, enabled: true }))
  )

  const updateFighter = (fighter: Fighter, number: string) => {
    if (fighter.number !== number) return fighter

    return { ...fighter, enabled: !fighter.enabled }
  }

  const toggleFighter = (number: string) => {
    const updatedFighters = fighters.map((fighter) =>
      updateFighter(fighter, number)
    )

    setFighters(updatedFighters)
  }

  const value = { fighters, toggleFighter }

  return (
    <FightersContext.Provider value={value}>
      {children}
    </FightersContext.Provider>
  )
}
