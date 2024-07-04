import React, { useState } from "react";

export default function Folder({ folderData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {folderData.isFolder ? (
        <div className="pb-3">
          <p onClick={handleToggle} style={{ cursor: "pointer" }}>
            <span className="text-7xl ">📂 {folderData.name}</span>
          </p>
          <div className={`pl-10 pt-3 ${isOpen ? '' : 'hidden '} border-x-4 border-cyan-800`}>
            {Array.isArray(folderData.items) && folderData.items.map((child, index) => (
              <Folder key={index} folderData={child} />
            ))}
          </div>
        </div>
      ) : (
        <p className="pt-3">
          <span className="text-7xl">📄 {folderData.name}</span>
        </p>
      )}
    </>
  );
}
