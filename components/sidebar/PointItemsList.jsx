import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";
import useClickOutside from "@/hooks/useClickOutside";

import Popup from "@/popup/popup";
import NoteMaker from "../editorbox/NoteMaker";
import TextEditor from "../editorbox/TextEditor";
import ListMaker from "../editorbox/ListMaker";
import Readmefile from "../editorbox/Readmefile";
export default function PointItemsList({ item }) {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const popupRef = useClickOutside(() => setSelectedFolder(false));
  const handleFolderRightClick = (folder, event) => {
    event.preventDefault();
    const sidebarRect = event.currentTarget.getBoundingClientRect();
    setSelectedFolder({
      ...folder,
      x: event.clientX - sidebarRect.left + 20, // Adjust position to the right
      y: event.clientY - sidebarRect.top + 10, // Adjust position below
    });

    setIsFileSelected(folder.type === 1);
  };

  const handleAddFile = () => {
    // Handle adding a file
  };

  const handleDeleteFolder = () => {
    // Handle deleting a folder
  };

  const itemClick = () => {
    switch (id) {
      case ".note":
        return <NoteMaker />;
      case ".ed":
        return <TextEditor />;
      case ".lt":
        return <ListMaker />;
      case ".readme":
        return <Readmefile />;

      default:
        break;
    }
  };
  return (
    <li
      key={item.id}
      className="flex gap-2 text-sm items-center cursor-pointer relative"
      onContextMenu={(e) => handleFolderRightClick(item, e)}
    >
      <FontAwesomeIcon
        icon={item.type === 1 ? faFile : faFolder}
        width={10}
        color={item.type === 2 ? "yellow" : "orange"}
      />
      {item.name}
      {selectedFolder && selectedFolder.id === item.id && (
        <div ref={popupRef}>
          <Popup
            title={isFileSelected ? "Delete file" : "Add file"}
            selectedFolder={selectedFolder}
            handleAddFile={handleAddFile}
            handleDeleteFolder={handleDeleteFolder}
            onClose={() => setSelectedFolder(null)}
          />
        </div>
      )}
    </li>
  );
}
