import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nixie_One} from 'next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })
const nix = Nixie_One({weight:'400',subsets:['latin']})

export const metadata: Metadata = {
  title: 'BonsaiCo',
  description: 'Bonsai eCommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nix.className} style={{position:'relative'}}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
