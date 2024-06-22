import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faLanguage,
  faSpellCheck,
  faCodeBranch,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const items1 = [
    { icon: faCodeBranch, text: "master" },
    { icon: null, text: "Launchpad" },
    { icon: faShare, text: "Live share" },
    { icon: null, text: "Copilot" },
  ];

  const items2 = [
    { icon: faChevronCircleUp, text: "Ln 15 Col-5" },
    { icon: null, text: "Space - 4" },
    { icon: faLanguage, text: "UTF-8" },
    { icon: null, text: "LF" },
    { icon: null, text: "Go Live" },
    { icon: faSpellCheck, text: "Spell" },
    { icon: null, text: "Prettier" },
  ];

  return (
    <div className="flex justify-between h-5 items-center bg-[#06141B] text-white">
      <div className="text-sm flex gap-5 ">
        {items1.map((item, index) => (
          <p key={index} className="flex gap-2 items-center">
            {item.icon && <FontAwesomeIcon icon={item.icon} width={10} />}
            {item.text}
          </p>
        ))}
      </div>
      <div className="text-sm flex gap-5 px-10">
        {items2.map((item, index) => (
          <p key={index} className="flex gap-2 items-center">
            {item.icon && <FontAwesomeIcon icon={item.icon} width={15} />}
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
}
