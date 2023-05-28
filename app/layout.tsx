import './globals.css'
import { Press_Start_2P } from 'next/font/google'

const mainFont = Press_Start_2P({ subsets: ['cyrillic'], weight: "400" })

export const metadata = {
  title: 'Mark',
  description: 'Mark Glebov`s website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={mainFont.className}>
        {children}
      </body>
    </html>
  )
}
