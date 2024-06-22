import React, { useState } from 'react';

export default function TextEditor() {
  const [text, setText] = useState('Welcome to text Editor');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText('');
  };
const handleUpperCase = ()=>{
  setText(text.toUpperCase())
}
const handleLowerCase = ()=>{
  setText(text.toLowerCase())
}
  return (
    <div className="w-full h-[94vh] mx-auto  p-6  bg-[#253745] relative ">
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        className="w-full h-full p-2 focus:outline-none text-white  rounded-lg mb-4 bg-[#253745] "
      />
      <div className='absolute bottom-2 left-2 flex gap-4 '>
      <button
        onClick={handleClear}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 "
      >
        Clear
      </button>
      <button
        onClick={handleUpperCase}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 "
      >
        UpperCase
      </button>
      <button
        onClick={handleLowerCase}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 "
      >
        LowerCase
      </button>
      </div>
    </div>
  );
}
