import React from 'react';

export default function MenuBar() {
  const menus = [
    "File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"
  ];

  return (
    <div className='w-full h-5 bg-[#06141B] flex gap-5  items-center text-sm'>
      {menus.map((item, index) => (
        <p key={index} className='text-white '>
          {item}
        </p>
      ))}
    </div>
  );
}
