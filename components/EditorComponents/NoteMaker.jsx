import React, { useState } from "react";

export default function NoteMaker() {
  // Array of status categories
  const status = ["Todo", "Doing", "Done"];

  // State to manage notes data
  const [data, setData] = useState([]);

  // State to manage input value and selected status
  const [inputValue, setInputValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Todo");

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle status change
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  // Function to add a new note
  const addNote = () => {
    if (inputValue.trim() !== "") {
      const newNote = {
        id: Date.now(),
        note: inputValue,
        status: selectedStatus,
      };
      setData([...data, newNote]);
      setInputValue("");
    }
  };

  // Function to handle drag start event
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id.toString());
  };

  // Function to handle drop event
  const handleDrop = (e, targetStatus) => {
    const id = e.dataTransfer.getData("text/plain");
    const updatedData = data.map((item) => {
      if (item.id === parseInt(id)) {
        return { ...item, status: targetStatus };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <div className="w-full bg-[#253745] h-[94vh] flex flex-col items-center p-5" id="draggablearea">
      <input
        type="text"
        placeholder="Add a new note..."
        value={inputValue}
        onChange={handleInputChange}
        className="mt-3 p-2 border border-gray-300 rounded-md"
      />
      <select value={selectedStatus} onChange={handleStatusChange} className="mt-3 p-2 border border-gray-300 rounded-md">
        {status.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button onClick={addNote} className="mt-3 p-2 bg-blue-500 text-white rounded-md">
        Add Note
      </button>
      <div className="flex-1 w-full mt-5 flex justify-center">
        {status.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col justify-start items-center"
            onDrop={(e) => handleDrop(e, item)}
            onDragOver={(e) => e.preventDefault()}
          >
            <h1 className="text-3xl text-white select-none">{item}</h1>
            <div
              className="flex flex-col cursor-move select-none mt-5 "
              onDragOver={(e) => e.preventDefault()}
            >
              {data
                .filter((note) => note.status === item)
                .map((filteredNote) => (
                  <div
                    key={filteredNote.id}
                    className="bg-gray-200 rounded-md shadow-lg w-[400px] h-auto p-2 mt-2"
                    draggable
                    onDragStart={(e) => handleDragStart(e, filteredNote.id)}
                  >
                    {filteredNote.note}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
