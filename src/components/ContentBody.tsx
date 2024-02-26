import { FightersProvider } from '~/contexts'
import { FighterList } from './FighterList'
import { RandomFighterPanel } from './RandomFighterPanel'
import { CookiesProvider } from 'react-cookie'

export const ContentBody = () => (
  <CookiesProvider>
    <FightersProvider>
      <RandomFighterPanel />
      <FighterList />
    </FightersProvider>
  </CookiesProvider>
)
