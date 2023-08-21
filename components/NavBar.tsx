import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className='navbar-custom flex bg-[#333333]'>
        <Image alt='logo' src={'/icon.png'} width={40} height={40} style={{mixBlendMode:'difference'}}/>
        <Link href={'/'} style={{color:'pink'}}>Home</Link>
        <Link href={'/products'}>Products</Link>
    </nav>
  )
}

export default NavBar
