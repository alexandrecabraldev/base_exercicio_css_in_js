import { Colors } from '../src/ThemeColors'

type CustomTheme = typeof Colors

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
