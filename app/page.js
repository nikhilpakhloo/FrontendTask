"use client";
import Editorbox from "@/components/Editorbox";
import { useState } from "react";
import Folder from "@/components/Folder";
import useTraverseTree from "@/hooks/use-traverse-tree";
import "@/style.css";
import explorer from "@/data/folderdata";

export default function Home() {
  const [explorerData, setExplorerData] = useState(explorer);
  const [fileName, setFileName] = useState("Explorer"); // Initial file name

  const [fileContent,setFilecontent] = useState("Test")

  const handleDisplayContent =(obj)=>{
    setFilecontent(obj)
  }
  const { insertNode } = useTraverseTree();


  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleAddFileName = (obj) => {
    setFileName(obj); // Update file name
  };
  

  return (
    <>
      <div className="flex">
        <div className="bg-gray-800 w-1/4 h-screen border-r-[1px] px-10 ">
          <Folder
            handleInsertNode={handleInsertNode}
            explorer={explorerData}
            fileName={fileName}
            setFileName={setFileName}
            handleAddFileName={handleAddFileName} // Assuming this is for setting fileName on file click
            handleDisplayContent={handleDisplayContent}
          />
        </div>
        <div className="bg-gray-800 w-3/4 h-screen">
          <Editorbox fileName={fileName} setFileName={setFileName} fileContent={fileContent} />
        </div>
      </div>
    </>
  );
}

