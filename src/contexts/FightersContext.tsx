import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Fighter } from '~/types'
import json from './fighters.json'
import { useCookies } from 'react-cookie'

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

  const [cookies, setCookie] = useCookies()

  useEffect(() => {
    const enabledMap = cookies['enabledMap']
    if (enabledMap) {
      setFighters((current) =>
        current.map((f) => ({ ...f, enabled: enabledMap[f.number] }))
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setEnabledCookie = (numbers: string[], enabled: boolean) => {
    const enabledMap = cookies['enabledMap'] || {}
    numbers.forEach((number) => {
      enabledMap[number] = enabled
    })
    setCookie('enabledMap', enabledMap, { maxAge: 3600 * 24 * 365 })
  }

  const updateFighter = (fighter: Fighter, number: string) => {
    if (fighter.number !== number) return fighter

    setEnabledCookie([number], !fighter.enabled)
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
      const dlcFighterNumbers: string[] = []
      const dlcFighters = fighters.map((f) => {
        if (!f.dlc) return f

        dlcFighterNumbers.push(f.number)
        return { ...f, enabled: status }
      })

      setEnabledCookie(dlcFighterNumbers, status)
      setFighters(dlcFighters)
    } else if (type === 'mii') {
      const miiFighterNumbers: string[] = []
      const miiFighters = fighters.map((f) => {
        if (f.series !== 'Mii') return f

        miiFighterNumbers.push(f.number)
        return { ...f, enabled: status }
      })

      setEnabledCookie(miiFighterNumbers, status)
      setFighters(miiFighters)
    } else {
      const updatedFighters = fighters.map((f) => ({ ...f, enabled: status }))
      const fighterNumbers = updatedFighters.map((f) => f.number)

      setEnabledCookie(fighterNumbers, status)
      setFighters(updatedFighters)
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
