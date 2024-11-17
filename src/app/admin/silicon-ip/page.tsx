"use client";
import React, { useState } from "react";
import AdminLayout from "@/app/adminLayout/layout";
import SiliconIpList from "@/components/AddSiliconIp/SiliconIpList";
import AddSiliconIpForm from "@/components/AddSiliconIp/AddSiliconIpForm";


const SiliconIpManage = () => {
  const [SiliconIpForm, setSiliconIpForm] = useState<boolean>(false);

  const handleSiliconIpForm = () => {
    setSiliconIpForm(!SiliconIpForm);
  };

  return (
    <AdminLayout>
      <div className="mb-4 flex items-center justify-between gap-5 border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-semibold text-dark dark:text-white">
          Silicon IP
        </h2>
        <button
          onClick={handleSiliconIpForm}
          className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        >
          Add Silicon Ip
        </button>
      </div>
      {SiliconIpForm ? (
        <AddSiliconIpForm handleSiliconIpForm={handleSiliconIpForm} />
      ) : (
        <SiliconIpList handleSiliconIpForm={handleSiliconIpForm} />
      )}
    </AdminLayout>
  );
};

export default SiliconIpManage;
