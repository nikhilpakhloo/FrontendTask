"use client";
import Header from "./Header";
import { EditorContainer } from "./EditorContainer";
export default function Editorbox(props) {
  return (

    //showing the header where fie/folder name will visible and editor box where different components will render basis on extension of file
    <div className="">
      <Header fileName={props.fileName} setFileName={props.setFileName} />

      <EditorContainer fileExt={props.fileName} />
    </div>
  );
}
