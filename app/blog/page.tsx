'use client'

import { useEffect,useState } from "react"
import BlogCard from "@/components/BlogCard"
import Link from "next/link"

const loadPrompts = async ()=>{
  const output = await fetch('/api/blog',{cache:'no-store'})
          .then(res=>{
            console.log("blog res",res)
            return res.json()
          })
          .catch(err=>{
            
            return err
          })
  return output
}
const blogPage = () => {
//  const promptData = loadPrompts()
  const [prompts,setPrompts]= useState<any[]>([])
  useEffect( ()=>{
    loadPrompts()
    .then((r:any[])=>setPrompts(r))
  },[])
  return (
    <section className="w-full">
      <div 
        style={{
          marginBlock:'10px',
          paddingInline:'10px',
        }}
      >

        <Link href={'/blog/createblog'} >
          <button className="auth-btn">
            Create Post
          </button>
        </Link>
      </div>
      <div 
        style={{
          paddingInline:'10px',
          marginBlock:'10px',
          display:'flex',
          flexFlow:'row wrap',
          justifyContent:'center',
          width:'100%'
        }}
      >
      {prompts.length>0?prompts.map((pr:{_id:string,message:string,tag:string},index:number)=>{
        return(
          <BlogCard key={index} message={pr.message} id={pr._id} tag={pr.tag}/>
        )
      }):(null)}

      </div>
    </section>  

  )
}

export default blogPage
