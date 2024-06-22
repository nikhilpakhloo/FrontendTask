import TextEditor from "./EditorComponents/TextEditor";
import NoteMaker from "./EditorComponents/NoteMaker";
import ListMaker from "./EditorComponents/ListMaker";
import ReadmeEditor from "./EditorComponents/ReadmeEditor";
import DragDrop from "./EditorComponents/Default";

export const EditorContainer = ( props ) => {
  const Ext = props.fileExt.split('.').pop();


  const renderEditorComponent = () => {
    switch (Ext) {
      case "ed":
        return <TextEditor />;
      case "note":
        return <NoteMaker />;
      case "lt":
        return <ListMaker />;
      case "readme":
        return <ReadmeEditor />;
      default:
        return <DragDrop/>;
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      {renderEditorComponent()}
    </div>
  );
};
