import React from "react";
import AdminLayout from "@/app/adminLayout/layout";
import EditProfile from "@/components/Profile/EditProfile";
import ChangePassword from "@/components/Profile/ChangePassword";

const Profile = () => {
  return (
    <AdminLayout>
      <h2 className="mb-4 border-b border-slate-200 pb-4 text-2xl font-semibold text-dark dark:text-white">
        Edit Profile
      </h2>
      <EditProfile />
      <div className="-mx-4 flex flex-col flex-wrap">
        <h2 className="mb-4 ml-4 mt-10 border-b border-slate-200 pb-4 text-2xl font-semibold text-dark dark:text-white">
          Change Password
        </h2>
        <ChangePassword />
      </div>
    </AdminLayout>
  );
};

export default Profile;
