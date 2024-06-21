"use client";
import React, { useState } from "react";

import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarContent from "./sidebar/SidebarContent";

const Sidebar = () => {
  const [data, setData] = useState([]);
  const [ShowInput, setShowInput] = useState(false);
  const [id, setId] = useState(null)
  const handleIconClick = (id) => {
    setShowInput(!ShowInput);
    setId(id)

  };
  return (
    <aside className="bg-gray-800 text-gray-200 h-screen w-80 flex flex-col border-r-[1px]">
      <div className="p-4 flex flex-col gap-5">
        {/* Sidebar header */}
        <SidebarHeader onAddItem={handleIconClick}  />
        {/* Sidebar Content */}
        <SidebarContent data={data} input={ShowInput} setInput={setShowInput} id={id} />
      </div>
    </aside>
  );
};

export default Sidebar;
