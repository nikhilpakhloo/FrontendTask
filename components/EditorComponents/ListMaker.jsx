import React, { useState } from "react";

export default function ListMaker() {
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);

  const addItem = () => {
    if (item.trim() === "") return; // Don't add empty items
    setData([...data, item]);
    setItem(""); // Clear the input after adding an item
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent page from refresh as form behavior

      addItem();
    }
  };

  return (
    <div className="p-4 w-full">
      <form>
        <div className="mb-4 flex items-center gap-2">
          <input
            type="text"
            value={item}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter list item"
            className="border rounded p-2 flex-grow placeholder-text-white bg-[#253745] text-white"
            aria-label="Add item to list"
          />
          <button
            type="button"
            onClick={addItem}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Item
          </button>
        </div>
      </form>

      <ul>
        {data?.map((item, index) => (
          <li key={index} className="text-white list-disc list-inside mt-5">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
