import React from "react";

const sections = [
  {
    title: "Start",
    items: ["New File", "Open Folder", "Add workspace folder"]
  },
  {
    title: "Help",
    items: ["Printable Keyboard hacks", "Tips and tricks", "Github repository"]
  }
];

const gettingStarted = [
  "Opening the IDE: Explain how to launch your IDE.",
  "Interface Overview: Describe the different components of the IDE interface (e.g., editor, sidebar, menu bar).",
  "Creating a New File: Show how to create a new file in the IDE."
];

const additionalSections = [
  {
    title: "FAQ",
    content: "Include common questions and answers about your IDE."
  },
  {
    title: "Support",
    content: "Provide information on how users can get support for your IDE (e.g., community forums, documentation)."
  },
  {
    title: "Conclusion",
    content: "Summarize the key points of your IDE and encourage users to explore its features further."
  }
];

export default function DragDrop() {
  return (
    <div className="w-full h-[94vh] flex px-20 justify-between">
      <div className="flex flex-col gap-20 items-start justify-center">
        <div>
          <p className="text-white text-3xl">Nikhil Pakhloo IDE</p>
          <p className="text-2xl text-gray-500">Editing evolved</p>
        </div>
        {sections.map((section, index) => (
          <div key={index}>
            <p className="text-white text-2xl">{section.title}</p>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="text-blue-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-20 justify-center">
        <p className="text-white text-2xl">Getting Started</p>
        <ul className="text-white list-disc">
          {gettingStarted.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {additionalSections.map((section, index) => (
          <div key={index}>
            <h1 className="text-white text-2xl">{section.title}</h1>
            <p className="text-white">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
