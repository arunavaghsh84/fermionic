"use client";

import React, { useState } from "react";
import TinyEditor from "@/components/Common/TinyEditor/TinyEditor";
import { SiliconIP } from "@/types/siliconIP";
import { toast } from "react-toastify";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

interface FormErrors {
  name?: string;
  details?: string;
}

interface SiliconIPFormProps {
  initialData?: SiliconIP;
  handleSiliconIpForm: () => void;
}

const AddSiliconIpForm = ({
  initialData,
  handleSiliconIpForm,
}: SiliconIPFormProps) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    details: initialData?.details || "",
    files: initialData?.files || [],
    isFeatured: initialData?.isFeatured || false,
  });

  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleDeleteFile = (index: number) => {
    const updatedFiles = [...formData.files];

    updatedFiles.splice(index, 1);

    setFormData({ ...formData, files: updatedFiles });
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.details.trim()) newErrors.details = "Details is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formDataObj = new FormData();

    formDataObj.append("name", formData.name);
    formDataObj.append("details", formData.details);
    formDataObj.append("isFeatured", String(formData.isFeatured));

    files.forEach((file) => formDataObj.append("newFiles", file));

    if (initialData) {
      formDataObj.append("files", JSON.stringify(formData.files));
    }

    const apiUrl = initialData
      ? `/api/siliconIPs/${initialData._id}`
      : "/api/siliconIPs";

    const method = initialData ? "put" : "post";

    const response = await fetch(apiUrl, {
      method,
      body: formDataObj,
    });

    if (response.ok) {
      toast.success("Silicon IP saved successfully!");
      handleSiliconIpForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="-mx-4 flex flex-col flex-wrap">
        <div className="w-1/2 px-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-black dark:text-white"
            >
              Silicon IP Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter name"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>
        </div>
        <div className="mb-5 w-full px-4">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Product Details
          </label>
          <TinyEditor
            initialValue={initialData?.details || ""}
            onEditorChange={(details) => setFormData({ ...formData, details })}
          />
          {errors.details && (
            <p className="text-sm text-red-500">{errors.details}</p>
          )}
        </div>
        {initialData && (
          <div className="w-1/2 px-4">
            <div className="mb-4">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Uploaded Documents
              </label>
              {formData.files.length > 0 ? (
                <ul className="mb-3 border-b border-body-color border-opacity-25 pb-2 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
                  {formData.files.map((file, index) => (
                    <li
                      key={file._id}
                      className="mb-3 flex items-center gap-3 hover:cursor-pointer hover:text-primary"
                    >
                      <Image
                        src="/images/pdf.png"
                        alt="icon"
                        width={20}
                        height={20}
                      />
                      <Tooltip
                        showArrow={true}
                        content="Download PDF"
                        placement="top"
                        color="foreground"
                      >
                        <Link
                          href={file.url}
                          download={true}
                          target="_blank"
                          className="text-sm text-black hover:text-primary"
                        >
                          {file.name}
                        </Link>
                      </Tooltip>
                      <button
                        onClick={() => handleDeleteFile(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Tooltip
                          showArrow={true}
                          content="Delete"
                          placement="top"
                          color="foreground"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m7 0H5"
                            />
                          </svg>
                        </Tooltip>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  No documents uploaded.
                </p>
              )}
            </div>
          </div>
        )}
        <div className="w-1/2 px-4">
          <div className="mb-4">
            <label
              htmlFor="file"
              className="mb-3 block text-sm font-medium text-black dark:text-white"
            >
              Documents
            </label>
            <input
              multiple
              type="file"
              name="file"
              accept=".jpg,.png,.pdf"
              onChange={(e) =>
                setFiles(e.target.files ? Array.from(e.target.files) : [])
              }
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="flex w-full px-4">
          <button
            type="submit"
            className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddSiliconIpForm;
