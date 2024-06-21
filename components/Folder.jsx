import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";

function Folder({
  handleInsertNode = () => {},
  explorer,
  fileName,
  setFileName,
  handleAddFileName,
  handleDisplayContent
}) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div className="mt-2">
        <div
          onClick={() => setExpand(!expand)}
          className="flex items-center cursor-pointer text-gray-400"
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
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="ml-2 px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-sm focus:outline-none focus:border-blue-500"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {explorer.items.map((exp) => (
            <Folder
              handleInsertNode={handleInsertNode}
              key={exp.id}
              explorer={exp}
              fileName={fileName}
              setFileName={setFileName}
              handleAddFileName={handleAddFileName}
              handleDisplayContent={handleDisplayContent}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span
        className="block mt-2 text-gray-400 cursor-pointer"
        onClick={() => {
          handleAddFileName(explorer.name);
          handleDisplayContent(explorer.content)}} 
      >
        📄 {explorer.name}
      </span>
    );
  }
}

export default Folder;
