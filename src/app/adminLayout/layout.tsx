"use client";

import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/Header/AdminHeader";
import ScrollToTop from "@/components/ScrollToTop";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-1 flex-col ml-64">
      <AdminHeader />
      <AdminSidebar />
      <div className="p-8 bg-white">{children}</div>
      <ScrollToTop />
    </div>
  );
}
