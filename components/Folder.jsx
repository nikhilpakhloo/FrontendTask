import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

function Folder({
  handleInsertNode,
  explorer,
  handleAddFileName,
}) {
  // states to manage the input to add file/foldername 
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

//setting the new folder/file
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };
//on pressing enter handleInsertNode call and name file/folder save as object
  const onAddFolder = (e) => {
    if (e.key === "Enter" && e.target.value) {
      const enteredFileName = e.target.value.trim();
      const isFolder = showInput.isFolder;
      // if its file then it check for the entered extension is not equal to specified extension it will not save the folder

      if (!isFolder) {
        const allowedExtensions = [".note", ".lt", ".readme", ".ed"];

        if (!allowedExtensions.some((ext) => enteredFileName.endsWith(ext))) {
          alert(
            "Invalid file extension. Please use only '.note', '.lt', '.readme', or '.ed' extensions."
          );
          return;
        }
      }

      handleInsertNode(explorer.id, enteredFileName, isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };
//sort the file/folder as per alphabetical order , folder comes at the top  and file at bottom
  const sortedItems = [...explorer.items].sort((a, b) => {
    if (a.isFolder && !b.isFolder) return -1;
    if (!a.isFolder && b.isFolder) return 1;
    return a.name.localeCompare(b.name);
  });

  if (explorer.isFolder) {
    //if saved item is folder it will show file and folder icon next to it for nesting
    return (
      <div className=" w-full mt-5">
        <div
          onClick={() => setExpand(!expand)}
          className="flex items-center justify-center w-[300px] cursor-pointer text-gray-400"
        >
          <span>📁 {explorer.name}</span>

          <div className="ml-auto space-x-2">
            <button
              onClick={(e) => handleNewFolder(e, true)}
              className="text-sm text-gray-400 hover:text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faFolder} />
            </button>
            <button
              onClick={(e) => handleNewFolder(e, false)}
              className="text-sm text-gray-400 hover:text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faFile} />
            </button>
          </div>
        </div>

        <div className={`pl-5 ${expand ? "block" : "hidden"}`}>
          {showInput.visible && (
            <div className="flex items-center mt-2 text-gray-400 cursor-pointer">
              {/* if folder the "📁"  else  "📄" icon preceeded */}
              <span>{showInput.isFolder ? "📁" : "📄"}</span>

              {/* input bar to add folder/file name */}
              <input
                type="text"
                className="ml-2 px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-sm focus:outline-none focus:border-blue-500"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {sortedItems.map((exp) => (

            //retuning folder func here
            <Folder
              handleInsertNode={handleInsertNode}
              key={exp.id}
              explorer={exp}
              handleAddFileName={handleAddFileName}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (

      // if file no icon will show
      <span
        className="block mt-2 text-gray-400 cursor-pointer"
        onClick={() => {
          handleAddFileName(explorer.name);
        }}
      >
        📄 {explorer.name}
      </span>
    );
  }
}

export default Folder;
