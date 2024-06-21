import React from "react";

export default function Popup({selectedFolder, handleAddFile,handleDeleteFolder, title}) {
    
  return (
    <div
      className="absolute bg-gray-500 w-24 flex flex-col text-white p-2 rounded-md shadow-md"
      style={{ top: selectedFolder.y, left: selectedFolder.x }}
    >
      <button onClick={handleAddFile} className="mb-1">
        {title}
      </button>
    </div>
  );
}
