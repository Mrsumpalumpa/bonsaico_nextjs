import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nixie_One} from 'next/font/google'
import NavBar from '../components/NavBar'
import AuthProvider from '@/components/AuthProvider'
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
      <head>
        <meta name="google-site-verification" content="0CXYADZ-HerQXbqXYAx8RqMgp05B6CqXgThoLq22emc" />
      </head>
      <body className={nix.className} style={{position:'relative'}}>
        <AuthProvider>
          <>
          <NavBar/>
          {children}
          </>
        </AuthProvider>
      </body>
    </html>
  )
}
