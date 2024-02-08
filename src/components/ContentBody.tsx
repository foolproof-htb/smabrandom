import { FightersProvider } from '~/contexts'
import { FighterList } from './FighterList'
import { RandomFighterPanel } from './RandomFighterPanel'

export const ContentBody = () => (
  <FightersProvider>
    <RandomFighterPanel />
    <FighterList />
  </FightersProvider>
)
