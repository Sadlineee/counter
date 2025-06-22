'use client'

import { Provider } from 'react-redux'
import { ProviderProps } from '@/types/ProviderProps'
import { store } from '@/store/store'

export default function State({ children }: ProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}