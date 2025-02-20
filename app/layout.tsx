import { State, Styled, Theme } from '@/lib'
import { oswald } from '@/fonts/fonts'
import { ProviderProps } from '@/types/ProviderProps'

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