"use client";

import GetDocumentBox from "@/components/SiliconIPs/GetDocumentBox";
import RootLayout from "@/app/defaultLayout/layout";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SiliconIP } from "@/types/siliconIP";

const SiliconIPDetailsPage = () => {
  const { id } = useParams();
  const [siliconIP, setSiliconIP] = useState<SiliconIP | null>(null);

  useEffect(() => {
    fetchSiliconIP();
  }, [id]);

  const fetchSiliconIP = async () => {
    const response = await fetch(`/api/siliconIPs/${id}`);

    if (response.ok) {
      const data = await response.json();
      setSiliconIP(data.siliconIP);
    } else {
      console.error("Error fetching siliconIP");
    }
  };

  return (
    <RootLayout>
      <section className="pb-8 pt-[120px]">
        <div className="container">
          {siliconIP && (
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <h2 className="sm:2xl mb-2 text-2xl font-semibold text-dark dark:text-white sm:mb-4">
                    {siliconIP.name}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: siliconIP.details }}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                <GetDocumentBox siliconIP={siliconIP} />
              </div>
            </div>
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default SiliconIPDetailsPage;
