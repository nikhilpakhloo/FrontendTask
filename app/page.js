"use client";
import Editorbox from "@/components/Editorbox";
import { useState } from "react";
import Folder from "@/components/Folder";
import useTraverseTree from "@/hooks/use-traverse-tree";
import explorer from "@/data/folderdata";

export default function Home() {
  const [explorerData, setExplorerData] = useState(explorer);
  const [fileName, setFileName] = useState("Explorer");

  
  // destructuring insertNode from UseTransversehook which is hused for hierarichal folder/file structure
  const { insertNode } = useTraverseTree();

  // setting the explorer data

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData({ ...explorerData, ...finalTree });
  };
  // setting file name for Header component
  const handleAddFileName = (name) => {
    setFileName(name);
  };

  return (
    <>
      <div className="w-full flex">
        <div className="bg-[#11212d] flex-2 border-r border-gray-700 px-10">

          {/* passing props to Sidebar */}
          <Folder
            handleInsertNode={handleInsertNode}
            explorer={explorerData}
            handleAddFileName={handleAddFileName}
          />
        </div>
        <div className="bg-[#253745] flex-1">
          {/* filename as prop to show at the top of text edirtor */}
          <Editorbox fileName={fileName}  />
        </div>
      </div>
    </>
  );
}
