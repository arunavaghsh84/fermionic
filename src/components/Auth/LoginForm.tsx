"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem(
      `${process.env.NEXT_PUBLIC_APP_NAME}-token`,
    ); // Adjust based on your auth logic

    if (isAuthenticated) {
      router.push("/admin/profile"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(false);
    }
  }, [router]);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: any = {};

    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.password.trim()) newErrors.password = "Name is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData();

    formData.append("email", form.email);
    formData.append("password", form.password);

    const apiUrl = "/api/auth/login";
    const method = "post";

    const response = await fetch(apiUrl, {
      method,
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();

      localStorage.setItem(
        `${process.env.NEXT_PUBLIC_APP_NAME}-token`,
        data.token,
      );

      toast.success("User logged in successfully!");
      router.push("/admin/profile");
    } else {
      const data = await response.json();
      toast.error(data.error);
    }
  };

  return (
    !isAuthenticated && (
      <form onSubmit={handleLogin}>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            Your Email
          </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your Email"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            Your Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter your Password"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>
        <div className="mb-6">
          <button className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
            Sign in
          </button>
        </div>
      </form>
    )
  );
}
