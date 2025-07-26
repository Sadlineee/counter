import { Metadata } from 'next'
import { State, Styled, Theme } from '@/lib'
import { ProviderProps } from '@/types/ProviderProps'
import { oswald } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'counter',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }: Readonly<ProviderProps>) {
  return (
    <html>
      <body className={oswald.className}>
        <State>
          <Theme>
            <Styled>
              {children}
            </Styled>
          </Theme>
        </State>
      </body>
    </html>
  )
}