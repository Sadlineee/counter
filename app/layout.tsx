import { Metadata } from 'next'
import { State, Styled, Theme } from '@/lib'
import { oswald } from '@/fonts/fonts'
import { ProviderProps } from '@/types/ProviderProps'

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