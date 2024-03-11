import React from 'react'
import DeletePostButton from './DeletePost'


function Post({ id, title, content, authorName }) {
  return (
    <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[30px] lg:px-[20px] md:px-0 ">
      <h3 className='text-xl font-bold text-blue-800' >{title}</h3>
      <p className='text-black'>{content}</p>
      <p className='text-green-600'>{authorName}</p>
      <DeletePostButton postId={id}/>

    </div>
  )
}

export default Post