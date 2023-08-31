import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nixie_One} from 'next/font/google'
import { Aboreto} from 'next/font/google'
import NavBar from '../components/NavBar'
import AuthProvider from '@/components/AuthProvider'
import SphereComponent from '@/components/Sphere'

const inter = Inter({ subsets: ['latin'] })
const nix = Nixie_One({weight:'400',subsets:['latin']})
const aboreto = Aboreto({weight:'400',subsets:["latin"]})

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
        <link rel='icon' href='/logocolor.png' type="image/png" sizes="32x32"></link>
      <meta name="google-site-verification" content="0CXYADZ-HerQXbqXYAx8RqMgp05B6CqXgThoLq22emc" />
      </head>
      <body className={aboreto.className} >
        <AuthProvider>
          <>
          <main className='main-container'>
          <NavBar/>
          {children}
          </main>
          </>
        </AuthProvider>
      </body>
    </html>
  )
}
