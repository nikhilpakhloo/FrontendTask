import React, { useState } from "react";

export default function ReadmeEditor() {
  const [readmeContent, setReadmeContent] = useState("");
  const [formattedReadme, setFormattedReadme] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        setReadmeContent(content);
        formatReadme(content);
      };
      reader.readAsText(file);
    }
  };

  const formatReadme = (content) => {
    // Split the content into paragraphs
    const paragraphs = content.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ));
  
    // Set the formatted content
    setFormattedReadme(paragraphs);
  };
  

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-4xl mx-auto p-4 bg-[#253745]  rounded ">
          <div className="mb-4">
            <input
              type="file"
              onChange={handleFileChange}
              className="p-2 rounded text-white"
            />
          </div>
       
        </div>
        <h2 className="text-xl font-bold mb-2 text-white">Preview:</h2>
        <div className="w-full flex justify-center">
          <div className="border border-gray-300 p-4 rounded w-[75vw] h-[80vh] overflow-y-auto">
            <pre className="whitespace-pre-wrap text-wrap break-words text-white">
              {formattedReadme}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
