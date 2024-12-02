"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { User } from "@/types/user";

interface FormErrors {
  name?: string;
  email?: string;
}

const AddUserForm = ({
  initialData,
  handleUserForm,
}: {
  initialData: User | null;
  handleUserForm: () => void;
}) => {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSaving, setIsSaving] = useState(false);

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSaving(true);

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);

    const apiUrl = initialData ? `/api/users/${initialData._id}` : "/api/users";
    const method = initialData ? "put" : "post";

    const response = await fetch(apiUrl, {
      method,
      body: formData,
    });

    if (response.ok) {
      toast.success("User saved successfully!");
      handleUserForm();
    } else {
      const data = await response.json();
      toast.error(data.error);
    }

    setIsSaving(false);
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
              User Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter user name"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>
        </div>
        <div className="w-1/2 px-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-black dark:text-white"
            >
              User Email
            </label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter user email"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="flex w-full px-4">
          <button
            type="submit"
            disabled={isSaving}
            className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
