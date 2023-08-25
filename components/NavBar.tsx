'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  const [open,setOpen]=useState<boolean>(false)
  return (
    <>
    
    <nav className='navbar-custom'>
        <div className='flex items-center justify-between  gap-x-2 px-5 navbar-box '>
          <Image alt='logo' src={'/logocolor.svg'} width={60} height={30} className='py-1'/>
          <h1 style={{fontWeight:700}} className='gradient-text hidden md:block'>Friends&Klench</h1>
        </div>
        <div className='flex items-center justify-end' style={{minWidth:'290px', width:'100%'}} >
          <div className='flex items-center justify-between  gap-x-2 px-5 navbar-box'>
            <Image 
              alt='menu' 
              src={'/menu.svg'} 
              width={30} 
              height={30} 
              style={{cursor:'pointer'}}
              onClick={()=>{
                setOpen(prev=>!prev)
              }}
              onMouseEnter={()=>setOpen(prev=>!prev)}
            />
          </div>

        </div>
    </nav>
      {/*MENU DROPDOWN ABSOLUTE POSITION */}
      <div 
        className='dropdown-menu px-5' 
        style={{display:open?"block":"none" }}
        onMouseLeave={()=>setOpen(prev=>!prev)}
      >
            <div className='flex items-center gap-x-2 py-1'>
              
              <Link 
                className='dropdown-item' 
                href={'/'} 
                style={{color:'white'}}> 
                <Image 
                  className='dropdown-iconimg' 
                  alt='menu' 
                  src={'/home.svg'} 
                  width={20} 
                  height={20}  /> Home
              </Link>
            </div>
            <div className='flex items-center gap-x-2 py-1'>

              <Link 
                className='dropdown-item' 
                href={'/products'} 
                style={{color:'white'}} 
              >
                <Image className='dropdown-iconimg' alt='productslist' src={'/productslist.svg'} width={20} height={20} />
                Products
              </Link>
            </div>
            <div className='flex items-center gap-x-2 py-1'>
              <Link 
                className='dropdown-item' 
                href={'/config'} 
                style={{color:'white'}} 
              >
                <Image 
                  className='dropdown-iconimg' 
                  alt='config' 
                  src={'/config.svg'} 
                  width={20} 
                  height={20} 
                />
                Configuration
              </Link>
            </div>
      </div>
    </>
  )
}

export default NavBar
