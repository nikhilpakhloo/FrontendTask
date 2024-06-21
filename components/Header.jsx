"use client"
import React from 'react'
import { useState } from 'react'

export default function Header(props) {
  return (
    <div className='w-full bg-gray-800 h-10 border-b-[1px] '>
        <p className=' text-gray-400 text-center italic text-[14px]'>{props.fileName}</p>
    </div>
  )
}
