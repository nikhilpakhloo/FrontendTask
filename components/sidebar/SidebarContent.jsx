"use client";
import React, { useState } from "react";

import PointItemsList from "./PointItemsList";

export default function SidebarContent({ data, input, setInput, id }) {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(data);
 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputEnter = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      if (id === 1) {
        const allowedExtensions = [".md", ".note", ".lt", ".readme"];
        const extension = getFileExtension(inputValue.trim());

        if (allowedExtensions.includes(extension)) {
          const newItem = { name: inputValue.trim(), type: id, id: Date.now() };
          setItems([...items, newItem]);
          setInputValue("");
          setInput(false);
        } else {
          alert("Invalid file extension. Only .md, .note, .lt, .readme allowed.");
        }
      } else if (id === 2) {
        const newItem = { name: inputValue.trim(), type: id, id: Date.now() };
        setItems([...items, newItem]);
        setInputValue("");
        setInput(false);
      }
    }
  };

  const getFileExtension = (filename) => {
    const parts = filename.split(".");
    return parts.length > 1 ? `.${parts.pop()}` : "";
  };



  const getPlaceholderText = () => {
    switch (id) {
      case 1:
        return "Add file (.md, .note, .lt, .readme)";
      case 2:
        return "Add folder";
      default:
        return "";
    }
  };

  // Sort the folder and files in alphabetical order, push folders at the top and files at the bottom
  const sortedItems = [...items].sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 2 ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="pl-5 relative mt-10">
      <ul className="list-none flex-col flex gap-3">
        {sortedItems.length > 0 &&
          sortedItems.map((item) => (
          <>
          <PointItemsList item = {item}/>
          </>
          ))}
        {input && (
          <li className="flex gap-2 text-sm">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputEnter}
              className="bg-gray-800 rounded-md px-3 py-2 placeholder:text-white"
              autoFocus
              placeholder={getPlaceholderText()}
            />
          </li>
        )}
      </ul>
    </div>
  );
}
