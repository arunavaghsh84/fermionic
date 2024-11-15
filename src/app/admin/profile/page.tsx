import React from "react";
import AdminLayout from "@/app/adminLayout/layout";

const EditProfile = () => {
  return (
    <AdminLayout>
      <h2 className="mb-4 text-2xl font-semibold text-dark dark:text-white pb-4 border-b border-slate-200">
        Edit Profile
      </h2>
      <form>
        <div className="-mx-4 flex flex-col flex-wrap">
          <div className="w-1/2 px-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300"
              />
            </div>
          </div>
          <div className="w-1/2 px-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300"
              />
            </div>
          </div>
          <div className="w-1/2 px-4">
            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300"
              />
            </div>
          </div>
          <div className="w-1/2 px-4">
            <div className="mb-4">
              <label
                htmlFor="re-password"
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Re-type Password
              </label>
              <input
                type="password"
                name="re-password"
                placeholder="Re-enter your password"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300"
              />
            </div>
          </div>
          <div className="flex w-full px-4">
            <button className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
              Save
            </button>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default EditProfile;
