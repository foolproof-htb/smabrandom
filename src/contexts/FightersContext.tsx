import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { Fighter } from '~/types'
import json from './fighters.json'

type ContextType = {
  fighters: Fighter[]
  toggleFighterEnabled: (number: string) => void
  switchAllEnableStatus: (type: SwitchType, status: boolean) => void
  checkAllEnabledStatus: (type: SwitchType, shouldBeEnabled: boolean) => boolean
}

type SwitchType = 'all' | 'dlc' | 'mii'

const FightersContext = createContext<ContextType>({
  fighters: [],
  toggleFighterEnabled: () => {},
  switchAllEnableStatus: () => {},
  checkAllEnabledStatus: () => true,
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

  const switchAllEnableStatus = (type: SwitchType, status: boolean) => {
    if (type === 'dlc') {
      setFighters((current) =>
        current.map((f) => (f.dlc ? { ...f, enabled: status } : f))
      )
    } else if (type === 'mii') {
      setFighters((current) =>
        current.map((f) => (f.series === 'Mii' ? { ...f, enabled: status } : f))
      )
    } else {
      setFighters((current) => current.map((f) => ({ ...f, enabled: status })))
    }
  }

  const filteredFighters = (type: SwitchType) => {
    return fighters.filter((f) => {
      if (type === 'dlc') return f.dlc
      if (type === 'mii') return f.series === 'Mii'
      return true
    })
  }

  const checkAllEnabledStatus = (
    type: SwitchType,
    shouldBeEnabled: boolean
  ) => {
    return filteredFighters(type).every((f) => f.enabled === shouldBeEnabled)
  }

  const value = {
    fighters,
    checkAllEnabledStatus,
    toggleFighterEnabled,
    switchAllEnableStatus,
  }

  return (
    <FightersContext.Provider value={value}>
      {children}
    </FightersContext.Provider>
  )
}
