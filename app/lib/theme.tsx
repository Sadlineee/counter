'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { ProviderProps } from '@/types/ProviderProps'

export default function Theme({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}