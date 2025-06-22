import { Metadata } from 'next'
import { State, Styled, Theme } from '@/lib'
import { ProviderProps } from '@/types/ProviderProps'
import { oswald } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'counter'
}

export default function RootLayout({ children }: Readonly<ProviderProps>) {
  return (
    <State>
      <Theme>
        <Styled>
          <html>
            <body className={oswald.className}>
              {children}
            </body>
          </html>
        </Styled>
      </Theme>
    </State>
  )
}