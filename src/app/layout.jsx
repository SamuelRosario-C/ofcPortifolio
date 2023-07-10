
import './globals.css'

import { Inter } from 'next/font/google'
import ThemeToggle from './components/theme/themeToggle'
import Providers from './providers'
export const metadata = {
  title: "Bem-vindo",
  description: "descrição da page"
}

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>
          <ThemeToggle />
          {children} 
        </Providers>

        
      </body>

    </html>

  )
}
