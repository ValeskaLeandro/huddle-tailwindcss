import './globals.css'
import type { Metadata } from 'next'
import { openSans } from './fonts'

export const metadata: Metadata = {
  title: 'Huddle',
  description: 'Build the community your fans will love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="./favicon-32x32.png" />
      </head>
      <body
        className={`${openSans.className} flex w-full flex-col items-center`}
      >
        {children}
      </body>
    </html>
  )
}
