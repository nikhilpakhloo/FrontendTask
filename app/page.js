import Editorbox from "@/components/Editorbox";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Editorbox/>
      </div>
    </>
  );
}
