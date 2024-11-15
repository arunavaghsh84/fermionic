import React from "react";

const d = new Date();
let year = d.getFullYear();

const AdminFooter = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="py-5 bg-black">
        <p className="text-center text-xs text-white dark:text-white">
          &copy; {year} by{" "}
          <a
            href="https://www.fermionic.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            FermionIC
          </a>
          {". "}
          All Right Resrved.
        </p>
      </div>
    </div>
  );
};

export default AdminFooter;
