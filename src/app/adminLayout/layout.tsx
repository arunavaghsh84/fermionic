"use client";

import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/Header/AdminHeader";
import ScrollToTop from "@/components/ScrollToTop";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem(
      `${process.env.NEXT_PUBLIC_APP_NAME}-token`,
    ); // Adjust based on your auth logic

    if (!isAuthenticated) {
      router.push("/admin/login"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  return (
    isAuthenticated && (
      <div className="relative ml-64 flex flex-1 flex-col">
        <ToastContainer position="bottom-right" />
        <AdminHeader />
        <AdminSidebar />
        <div className="bg-white p-8">{children}</div>
        <ScrollToTop />
      </div>
    )
  );
}
