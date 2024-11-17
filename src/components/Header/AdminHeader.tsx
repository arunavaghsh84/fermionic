import React from "react";
import DropdownUser from "./DropdownUser";

const AdminHeader = () => {
  return (
    <header className="z-999 drop-shadow-1 dark:bg-boxdark sticky top-0 flex w-full bg-black dark:drop-shadow-none">
      <div className="shadow-2 flex flex-grow items-center justify-end px-4 py-4 md:px-6 2xl:px-11">
          <DropdownUser />
      </div>
    </header>
  );
};

export default AdminHeader;
