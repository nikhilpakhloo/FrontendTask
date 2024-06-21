import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faFileCirclePlus,
  faFolder,

} from "@fortawesome/free-solid-svg-icons";

const SidebarHeader = ({ onAddItem }) => {
  return (
    <div className="p-4 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-2xl">Explorer</p>
        <FontAwesomeIcon icon={faEllipsisH} width={15} />
      </div>

      <div className="w-full flex justify-end gap-4">
        <FontAwesomeIcon
          icon={faFileCirclePlus}
          width={18}
          className="cursor-pointer"
          onClick={()=>onAddItem(1)}
        />
        <FontAwesomeIcon
          icon={faFolder}
          width={18}
          className="cursor-pointer"
          onClick={()=>onAddItem(2)}
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
