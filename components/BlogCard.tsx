import React from 'react'
interface IProps{
    message:string,
    id:string
    tag:string
}
const BlogCard = (props:IProps) => {
  return (
    <div className='container card-container'>
        <div 
            className='card-header' 
        >
            <span>{props.id}</span>
            <p>{props.tag}</p>
        </div>
        <div
            className='card-content'
        >
            {props.message}
        </div>
    </div>
  )
}

export default BlogCard
