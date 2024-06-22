import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faCodeCompare,
  faCodeFork,
  faCodePullRequest,
  faCopy,
  faExternalLinkSquare,
  faRunning,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function SideIcons() {
  return (
    <div className="w-14  bg-[#06141B] flex flex-col gap-5 items-center py-5">
      <FontAwesomeIcon icon={faCopy} color="white" size="2xl" />
      <FontAwesomeIcon icon={faSearch} color="white" size="2xl" />
      <FontAwesomeIcon icon={faCodeBranch} color="white" size="2xl" />
      <FontAwesomeIcon icon={faRunning} color="white" size="2xl" />
      <FontAwesomeIcon icon={faExternalLinkSquare} color="white" size="2xl" />
      <FontAwesomeIcon icon={faCodeFork} color="white" size="2xl" />
      <FontAwesomeIcon icon={faCopy} color="white" size="2xl" />
      <FontAwesomeIcon icon={faCodeCompare} color="white" size="2xl" />
      <FontAwesomeIcon icon={faCodePullRequest} color="white" size="2xl" />
    </div>
  );
}
