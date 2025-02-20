'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ProviderProps } from '@/types/ProviderProps'

export default function State({ children }: ProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}