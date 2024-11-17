"use client";
import React, { useState } from "react";
import TinyEditor from "@/components/Common/TinyEditor/TinyEditor";


const AddSiliconIpForm = ({handleSiliconIpForm}) => {
  const [content, setContent] = useState<string>("");

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };
  return (
    <form>
      <div className="-mx-4 flex flex-col flex-wrap">
        <div className="w-1/2 px-4">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="mb-3 block text-sm font-medium text-black dark:text-white"
            >
              Product Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter your name"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300"
            />
          </div>
        </div>
        <div className="w-1/2 px-4">
          <div className="mb-4">
            <label
              htmlFor="file"
              className="mb-3 block text-sm font-medium text-black dark:text-white"
            >
              Upload Document
            </label>
            <input
              multiple
              type="file"
              name="file"
              placeholder="Enter your name"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300"
            />
          </div>
        </div>
        <div className="w-1/2 px-4">
          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-3 block text-sm font-medium text-black dark:text-white"
            >
              Short Description
            </label>
            <textarea
              name="description"
              rows={4}
              placeholder="Enter description"
              className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300"
            ></textarea>
          </div>
        </div>
        <div className="mb-5 w-full px-4">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Description
          </label>
          <TinyEditor onEditorChange={handleEditorChange} />
          {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        </div>
        <div className="flex w-full px-4">
          <button onClick={handleSiliconIpForm} className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddSiliconIpForm;
