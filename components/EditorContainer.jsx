import TextEditor from "./EditorComponents/TextEditor";
import NoteMaker from "./EditorComponents/NoteMaker";
import ListMaker from "./EditorComponents/ListMaker";
import ReadmeEditor from "./EditorComponents/ReadmeEditor";
import Default from "./EditorComponents/Default";

export const EditorContainer = ( props ) => {
  // props accepting file name splitting the items after dot e.g index.html after splitting it will html
  const Ext = props.fileExt.split('.').pop();
//using switch case to render the different component based on ext

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
        return <Default/>;
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      {renderEditorComponent()}
    </div>
  );
};
