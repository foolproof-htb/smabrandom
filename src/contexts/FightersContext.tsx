import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { Fighter } from '~/types'
import json from './fighters.json'

type ContextType = {
  fighters: Fighter[]
  toggleFighterEnabled: (number: string) => void
  selectAll: () => void
  deselectAll: () => void
  deselectDlc: () => void
}

const FightersContext = createContext<ContextType>({
  fighters: [],
  toggleFighterEnabled: () => {},
  selectAll: () => {},
  deselectAll: () => {},
  deselectDlc: () => {},
})

export const useFightersContext = () => {
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

  const toggleFighterEnabled = (number: string) => {
    const updatedFighters = fighters.map((fighter) =>
      updateFighter(fighter, number)
    )

    setFighters(updatedFighters)
  }

  const selectAll = () => {
    setFighters((current) => current.map((f) => ({ ...f, enabled: true })))
  }

  const deselectAll = () => {
    setFighters((current) => current.map((f) => ({ ...f, enabled: false })))
  }

  const deselectDlc = () => {
    setFighters((current) =>
      current.map((f) => (f.dlc ? { ...f, enabled: false } : f))
    )
  }

  const value = {
    fighters,
    toggleFighterEnabled,
    selectAll,
    deselectAll,
    deselectDlc,
  }

  return (
    <FightersContext.Provider value={value}>
      {children}
    </FightersContext.Provider>
  )
}
