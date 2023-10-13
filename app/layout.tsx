import './globals.css'
import type { Metadata } from 'next'
import NavBar from '../components/NavBar'
import AuthProvider from '@/components/AuthProvider'
import SphereComponent from '@/components/Sphere'
import { Special_Elite } from 'next/font/google'

const spe = Special_Elite({weight:'400',subsets:["latin"]})

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
        <link rel='icon' href='/burico.png' type="image/png" sizes="32x32"></link>
      <meta name="google-site-verification" content="0CXYADZ-HerQXbqXYAx8RqMgp05B6CqXgThoLq22emc" />
      </head>
      <body className={spe.className} style={{background:'black'}}>
        <AuthProvider>
          <>
          <main className='main-container'>
          <NavBar/>
          {children}

          <SphereComponent/>
          </main>
          </>
        </AuthProvider>
      </body>
    </html>
  )
}
