"use client";
import React, { useState } from "react";
import AdminLayout from "@/app/adminLayout/layout";
import SiliconIpList from "@/components/AddSiliconIp/SiliconIpList";
import AddSiliconIpForm from "@/components/AddSiliconIp/AddSiliconIpForm";
import { SiliconIP } from "@/types/siliconIP";

const SiliconIpManage = () => {
  const [SiliconIpForm, setSiliconIpForm] = useState<boolean>(false);
  const [editableSiliconIP, setEditableSiliconIP] = useState<SiliconIP | null>(
    null,
  );

  const handleSiliconIpForm = (product?: SiliconIP) => {
    setSiliconIpForm(!SiliconIpForm);
    setEditableSiliconIP(product || null);
  };

  return (
    <AdminLayout>
      <div className="mb-4 flex items-center justify-between gap-5 border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-semibold text-dark dark:text-white">
          Silicon IPs
        </h2>
        <button
          onClick={() => handleSiliconIpForm()}
          className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        >
          {SiliconIpForm ? "Back" : "Add Silicon IP"}
        </button>
      </div>
      {SiliconIpForm ? (
        <AddSiliconIpForm
          initialData={editableSiliconIP}
          handleSiliconIpForm={handleSiliconIpForm}
        />
      ) : (
        <SiliconIpList handleSiliconIpForm={handleSiliconIpForm} />
      )}
    </AdminLayout>
  );
};

export default SiliconIpManage;
