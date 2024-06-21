"use client";
import { useState } from "react";
import Header from "./Header";
import { EditorContainer } from "./EditorContainer";
export default function Editorbox(props) {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div>
      <section>
        <Header fileName={props.fileName} setFileName={props.setFileName} />
      </section>
      <section>
        <EditorContainer fileContent={props.fileContent} />
      </section>

    </div>
  );
}
