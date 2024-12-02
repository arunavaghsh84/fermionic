"use client";

import React, { useState } from "react";
import TinyEditor from "@/components/Common/TinyEditor/TinyEditor";
import { Blog } from "@/types/blog";
import Image from "next/image";
import { toast } from "react-toastify";

interface FormErrors {
  title?: string;
  shortDescription?: string;
  content?: string;
  image?: string;
}

const AddBlogForm = ({
  initialData,
  handleBlogForm,
}: {
  initialData: Blog | null;
  handleBlogForm: () => void;
}) => {
  const [form, setForm] = useState({
    title: initialData?.title || "",
    shortDescription: initialData?.shortDescription || "",
    content: initialData?.content || "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [saving, setSaving] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};

    if (!form.title.trim()) newErrors.title = "Title is required.";
    if (!form.shortDescription.trim())
      newErrors.shortDescription = "Short description is required.";
    if (!form.content.trim()) newErrors.content = "Content is required.";
    if (!imageFile && !initialData) newErrors.image = "Image file is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSaving(true);

    const formData = new FormData();

    formData.append("createdBy", "672bac64efcf9efa94151928");
    formData.append("title", form.title);
    formData.append("shortDescription", form.shortDescription);
    formData.append("content", form.content);

    if (imageFile) formData.append("image", imageFile);

    const apiUrl = initialData ? `/api/blogs/${initialData._id}` : "/api/blogs";
    const method = initialData ? "put" : "post";

    const response = await fetch(apiUrl, {
      method,
      body: formData,
    });

    if (response.ok) {
      toast.success("Blog saved successfully!");
      handleBlogForm();
    }

    setSaving(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="-mx-4 flex flex-col flex-wrap">
        <div className="w-1/2 px-4">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="mb-3 block text-sm font-medium text-black dark:text-white"
            >
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Enter your name"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
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
              value={form.shortDescription}
              onChange={(e) =>
                setForm({ ...form, shortDescription: e.target.value })
              }
              rows={4}
              placeholder="Enter description"
              className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            ></textarea>
            {errors.shortDescription && (
              <p className="text-sm text-red-500">{errors.shortDescription}</p>
            )}
          </div>
        </div>
        <div className="mb-5 w-full px-4">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Full Description
          </label>
          <TinyEditor
            initialValue={initialData?.content || ""}
            onEditorChange={(content) => setForm({ ...form, content })}
          />
          {errors.content && (
            <p className="text-sm text-red-500">{errors.content}</p>
          )}
        </div>
        {initialData && (
          <div className="w-1/2 px-4">
            <div className="mb-4">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Uploaded Image
              </label>
              <Image
                width={1024}
                height={425}
                src={initialData.image}
                alt={initialData.title}
                className="h-[200px] w-full object-cover"
              />
            </div>
          </div>
        )}
        <div className="w-1/2 px-4">
          <div className="mb-4">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Featured Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImageFile(e.target.files ? e.target.files[0] : null)
              }
              className="block w-full border px-3 py-2"
            />
            {errors.image && (
              <p className="text-sm text-red-500">{errors.image}</p>
            )}
          </div>
        </div>
        <div className="flex w-full px-4">
          <button
            type="submit"
            disabled={saving}
            className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBlogForm;
