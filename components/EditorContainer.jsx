import React, { useEffect, useState } from "react";

export const EditorContainer = (props) => {
  const [content, setContent] = useState(props.fileContent);

  const handleChange = (e) => {
    setContent(e.target.value);

    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  useEffect(() => {
    setContent(props.fileContent);
  }, [props.fileContent]);

  return (
    <div className="text-white bg-gray-900 rounded-lg shadow-lg overflow-auto">
      <pre className="line-numbers">
        <code className="language-html">
          <textarea
            className="w-full h-full bg-gray-800 text-white p-2"
            value={content}
            rows={30}
            onChange={handleChange}
          />
        </code>
      </pre>
    </div>
  );
};
