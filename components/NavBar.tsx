'use client'
import React, { useState,useEffect,useContext } from 'react'
import {signIn,signOut,useSession,getProviders,SessionContext} from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { Black_Ops_One} from 'next/font/google'

const blackops = Black_Ops_One({weight:'400',subsets:["latin"]})

const NavBar = () => {
  const sessionCtx = useContext(SessionContext) as any
  const [open,setOpen]=useState<boolean>(false)
  const {data:session} = useSession()
  const [authProviders, setAuthProviders]= useState<any>(null)
  useEffect(()=>{
    const setProviders = async()=>{
      const response = await getProviders()
      setAuthProviders(response)
    }
    setProviders()
  },[])
  useEffect(()=>console.log("CONTEXT:",sessionCtx.data,),[authProviders])
  useEffect(()=>{console.log("SESSION: -->" ,session)},[session])
  return (
    <>
    
    <nav className='navbar-custom'>
        <div className='flex items-center justify-between  gap-x-2 px-5 navbar-box'>
          <Image alt='logo' src={'/logocolor.png'} width={60} height={30} className='py-1'/>
          <h1 style={{fontSize:'20px'}} className={`${blackops.className} gradient-text hidden md:block`}>BURI&KLENCH</h1>
        </div>
        <div className='flex items-center justify-end' style={{minWidth:'fit-content', width:'100%'}} >
          <div className='flex items-center justify-between navbar-box'>
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
          <div className='flex items-center justify-between  gap-x-2 px-5 navbar-box'>
            {session && session?.user
              ?
              <>
                {authProviders && Object.values(authProviders).map((prov:any)=>{
                  return (
                    <div key={prov.id} className='button-box' onClick={()=>{signOut(prov.id)}}>
                      <span style={{paddingInline:'5px'}} className='auth-btn'>Sign out</span>
                      <img 
                        alt='userprofileimg'
                        src={session.user?.image as string}
                        width={40}
                        height={40}
                        key={prov.name}
                        className="logout-image"
                      />
                    </div>
              
                  )
                })}
                
              </>
              :<>
                {authProviders && Object.values(authProviders).map((prov:any)=>{
                  return (
                  <button 
                    className='auth-btn'
                    key={prov.name}
                    onClick={()=>{
                      signIn(prov.id)
                    }}
                  >
                    {`Sign in with ${prov.name}`}
                  </button>)
                })}
              </>
            }
            
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
                href={'/blog'} 
                style={{color:'white'}} 
              >
                <Image className='dropdown-iconimg' alt='blog' src={'/productslist.svg'} width={20} height={20} />
                Blog
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
