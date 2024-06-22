"use client";
import Header from "./Header";
import { EditorContainer } from "./EditorContainer";
export default function Editorbox(props) {

  return (
    <div className="">
        <Header fileName={props.fileName} setFileName={props.setFileName} />
     
        <EditorContainer fileExt={props.fileName} />
   
     
    

    </div>
  );
}
