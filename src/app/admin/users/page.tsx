"use client";

import React, { useState } from "react";
import AdminLayout from "@/app/adminLayout/layout";
import AddUserForm from "@/components/AddUser/AddUserForm";
import UserList from "@/components/AddUser/UserList";
import { User } from "@/types/user";

const UserManage = () => {
  const [UserForm, setUserForm] = useState<boolean>(false);
  const [editableUser, setEditableUser] = useState<User | null>(null);

  const handleUserForm = (user?: User) => {
    setUserForm(!UserForm);
    setEditableUser(user || null);
  };

  return (
    <AdminLayout>
      <div className="mb-4 flex items-center justify-between gap-5 border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-semibold text-dark dark:text-white">
          Users
        </h2>
        <button
          onClick={() => handleUserForm()}
          className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        >
          {UserForm ? "Back" : "Add User"}
        </button>
      </div>
      {UserForm ? (
        <AddUserForm
          initialData={editableUser}
          handleUserForm={handleUserForm}
        />
      ) : (
        <UserList handleUserForm={handleUserForm} />
      )}
    </AdminLayout>
  );
};

export default UserManage;
