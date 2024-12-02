"use client";

import { DecodedToken, decodeToken } from "@/app/lib/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface FormErrors {
  oldPassword?: string;
  newPassword?: string;
  rePassword?: string;
}

export default function ChangePassword() {
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

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    rePassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    const { oldPassword, newPassword, rePassword } = formData;

    if (!oldPassword.trim())
      newErrors.oldPassword = "Old password is required.";

    if (!newPassword.trim()) {
      newErrors.newPassword = "New password is required.";
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters long.";
    }

    if (newPassword !== rePassword)
      newErrors.rePassword = "New password and confirmation do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSaving(true);

    const { oldPassword, newPassword } = formData;

    try {
      const response = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userInfo?._id, // Replace with dynamic user ID
          oldPassword,
          newPassword,
        }),
      });

      if (response.ok) {
        // Reset form data
        setFormData({
          oldPassword: "",
          newPassword: "",
          rePassword: "",
        });

        toast.success("Password updated successfully!");
      } else {
        const data = await response.json();
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-1/2 px-4">
        <div className="mb-4">
          <label
            htmlFor="old-password"
            className="mb-3 block text-sm font-medium text-black dark:text-white"
          >
            Old Password
          </label>
          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleInputChange}
            placeholder="Enter old password"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          {errors.oldPassword && (
            <p className="text-sm text-red-500">{errors.oldPassword}</p>
          )}
        </div>
      </div>
      <div className="w-1/2 px-4">
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-3 block text-sm font-medium text-black dark:text-white"
          >
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            placeholder="Enter new password"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          {errors.newPassword && (
            <p className="text-sm text-red-500">{errors.newPassword}</p>
          )}
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
            name="rePassword"
            value={formData.rePassword}
            onChange={handleInputChange}
            placeholder="Re-enter your password"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          {errors.rePassword && (
            <p className="text-sm text-red-500">{errors.rePassword}</p>
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
