
import React from 'react'

export default function Header(props) {
  return (
    <div className='w-full flex items-center justify-center bg-[#11212d] h-5  '>
        <p className=' text-gray-400  text-[16px]'>{props.fileName}</p>
    </div>
  )
}
