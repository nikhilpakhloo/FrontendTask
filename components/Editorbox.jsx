"use client"
import React, { useState } from 'react'
import ListMaker from './editorbox/ListMaker'
import NoteMaker from './editorbox/NoteMaker'
import Readmefile from './editorbox/Readmefile'
import TextEditor from './editorbox/TextEditor'
import DragDrop from './DragDrop'
export default function Editorbox() {

  const [showEditor , setShowEditor] = useState(false)
  return (
   <main className='bg-gray-800 flex-1 flex justify-center w-full items-center h-screen'>
    {showEditor ? (
      <ListMaker/>


    ):(


      <DragDrop/>
    )}
 

   </main>
  )
}
