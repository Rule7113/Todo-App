import 'styled-components'
import type { AppTheme } from './theme'

declare module 'styled-components' {
  // Augment the DefaultTheme to match our AppTheme shape
  // This enables theme typing in styled-components interpolations
  export interface DefaultTheme extends AppTheme {}
}


