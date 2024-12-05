"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem(
      `${process.env.NEXT_PUBLIC_APP_NAME}-token`,
    ); // Adjust based on your auth logic

    if (!isAuthenticated) {
      router.push("/admin/login"); // Redirect to login if not authenticated
    } else {
      router.push("/admin/profile");
    }
  }, [router]);
}
