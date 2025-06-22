import Head from 'next/head'
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
            <Head>
              <link rel='icon' href='/favicon.ico' sizes='any' />
            </Head>
            <body className={oswald.className}>
              {children}
            </body>
          </html>
        </Styled>
      </Theme>
    </State>
  )
}