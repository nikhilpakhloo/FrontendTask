"use client";
import Editorbox from "@/components/Editorbox";
import { useState } from "react";
import Folder from "@/components/Folder";
import useTraverseTree from "@/hooks/use-traverse-tree";
import explorer from "@/data/folderdata";

export default function Home() {
  const [explorerData, setExplorerData] = useState(explorer);
  const [fileName, setFileName] = useState("Explorer");
  const [fileContent, setFilecontent] = useState("");

  const handleDisplayContent = (content) => {
    setFilecontent(content);
  };

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData({ ...explorerData, ...finalTree });
  };

  const handleAddFileName = (name) => {
    setFileName(name);
  };

  return (
    <>
     <div className="w-full flex">
  <div className="bg-[#11212d] flex-2 border-r border-gray-700 px-10">
    <Folder
      handleInsertNode={handleInsertNode}
      explorer={explorerData}
      handleAddFileName={handleAddFileName}
      handleDisplayContent={handleDisplayContent}
    />
  </div>
  <div className="bg-[#253745] flex-1">
    <Editorbox fileName={fileName} fileContent={fileContent} />
  </div>
</div>



    </>
  );
}
