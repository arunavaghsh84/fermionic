"use client";

import { DecodedToken, decodeToken } from "@/app/lib/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface FormErrors {
  name?: string;
  email?: string;
}

export default function EditProfile() {
  const [userInfo, setUserInfo] = useState<DecodedToken | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(
      `${process.env.NEXT_PUBLIC_APP_NAME}-token`,
    );

    if (token) {
      const decoded = decodeToken(token);

      if (decoded) {
        setUserInfo(decoded);
      }
    }
  }, []);

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!userInfo.name.trim()) newErrors.name = "Name is required.";

    if (!userInfo.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(userInfo.email)) {
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

    formData.append("name", userInfo.name);
    formData.append("email", userInfo.email);

    const apiUrl = `/api/users/${userInfo._id}`;
    const method = "put";

    const response = await fetch(apiUrl, {
      method,
      body: formData,
    });

    if (response.ok) {
      toast.success("Profile saved successfully!");
    } else {
      const data = await response.json();
      toast.error(data.error);
    }

    setIsSaving(false);
  };

  return (
    <form onSubmit={handleSubmit}>
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
            value={userInfo?.name || ""}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            placeholder="Enter your name"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
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
            type="text"
            name="email"
            value={userInfo?.email || ""}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            placeholder="Enter your email"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="flex w-full px-4">
        <button
          disabled={isSaving}
          className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        >
          {isSaving ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
