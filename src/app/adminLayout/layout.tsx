"use client";

import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/Header/AdminHeader";
import ScrollToTop from "@/components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative ml-64 flex flex-1 flex-col">
      <ToastContainer position="bottom-right" />
      <AdminHeader />
      <AdminSidebar />
      <div className="bg-white p-8">{children}</div>
      <ScrollToTop />
    </div>
  );
}
