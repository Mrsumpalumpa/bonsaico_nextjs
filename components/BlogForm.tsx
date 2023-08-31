'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const BlogForm = () => {
  const [post,setPost] = useState<string>("")
  const [tag,setTag] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const {data:session} = useSession()
  const user = session?.user as any

  const handleSubmit= async (e:React.MouseEvent)=>{
    e.preventDefault()
    setLoading(true)
    const body = {
      userId:user._id,
      tag:tag,
      message:post
    }
    try{
      await fetch('/api/blog/createblog',{
        method:"POST",
        body: JSON.stringify(body)
      }).then((res)=>{
        alert(`Success ${JSON.stringify(res)} created`)
        setPost("")
        setTag("")
        setLoading(false)
      })
    }
    catch(err){
      alert(JSON.stringify(err))
      setLoading(false)
      return err
    }

  }
  return (
    
      <form 
        style={{
          display:'flex',
          flexFlow:'row wrap',
          justifyItems:'start',
          columnGap:3,
          justifyContent:'space-around',
          paddingInline:'10px'
          }}
      >
        <div style={{ 
          width:'100%',
          display:'flex',
          flexFlow:'row wrap',
          justifyContent:'space-between',
          marginBlock:'5px',
          
          }}
        >

          <label 
            htmlFor='post'
            style={{
              width:'10%',textAlign:'start'
            }} 
          >
            Message
          
          </label>
          <textarea 
            name='post' 
            id='post' 
            value={post} 
            style={{
              width:'85%',
              minHeight:'200px',
              paddingInline:'10px',
              
            }}
            placeholder='Write something here...' 
            maxLength={1500}
            onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
              setPost((prev)=>{
                prev = e.target.value
                return prev
              })
            }

            }
          />
        </div>
        <div  style={{
          width:'100%',
          display:'flex',
          flexFlow:'row wrap',
          justifyContent:'space-between',
          marginBlock:'5px'
          }}>
          <label htmlFor='post'
            style={{
              width:'10%',
              textAlign:'start'
            }} 
          >Tag</label>
          <input 
            name='tag' 
            id='tag' 
            type='text' 
            value={tag} 
            maxLength={500}
            placeholder='#tag'
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
              setTag((prev)=>{
                prev = e.target.value
                return prev
              })
            }}
            style={{
              width:'85%',
              paddingInline:'10px',
              
            }}
          />
        </div>
        <button className='auth-btn w-full md:w-5/12 my-1' onClick={handleSubmit}>{loading?"Loading":"Create Post"}</button>
        <Link href={'/blog'} className='auth-btn text-center w-full md:w-5/12 my-1'>
          To blogs page
        </Link>
      </form>


  )
}

export default BlogForm
