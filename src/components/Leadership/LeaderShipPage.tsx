"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import RootLayout from "@/app/defaultLayout/layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const LeadershipPage = () => {
  return (
    <RootLayout>
      {/* <div className="pt-28 lg:pt-[120px]"></div> */}
      <Breadcrumb
        pageName="Leadership"
        description="FermionIC Design is a fabless semiconductor company."
      />

      <section className="container">
        <div className="mx-auto max-w-[900px] pt-8 text-center">
          <p className="text-sm leading-relaxed text-black">
            Our executive management team combines decades of semiconductor IC
            development and product marketing experience with focus on customer
            needs to offer best-in-class Product/Solutions.
          </p>
        </div>
      </section>

      <section className="container">
        <Tabs className="my-8">
          <TabList>
            <Tab>
              <Card className="">
                <CardHeader className="block">
                  <Image
                    src="/images/leadership/gautam_da.png"
                    alt="leadership image"
                    width={500}
                    height={50}
                    className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                  />
                </CardHeader>
                <CardBody className="padding text-small text-black">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <div className="flex flex-col items-start justify-center gap-1">
                      <h4 className="text-md font-semibold leading-none text-black">
                        Gautam Kumar Singh
                      </h4>
                      <h5 className="text-small text-default-400">CEO</h5>
                    </div>
                    <Link href="#">
                      <Image
                        src="/images/leadership/linkedin.png"
                        alt="linkedin"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                  <p className="h-[60px]">
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                </CardBody>
              </Card>
            </Tab>
            <Tab>
              <Card className="">
                <CardHeader className="block justify-between">
                  <Image
                    src="/images/leadership/gautam_da.png"
                    alt="leadership image"
                    width={500}
                    height={50}
                    className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                  />
                </CardHeader>
                <CardBody className="padding text-small text-black">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <div className="flex flex-col items-start justify-center gap-1">
                      <h4 className="text-md font-semibold leading-none text-black">
                        Prasun Bhattacharyya
                      </h4>
                      <h5 className="text-small text-default-400">CTO</h5>
                    </div>
                    <Link href="#">
                      <Image
                        src="/images/leadership/linkedin.png"
                        alt="linkedin"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                  <p className="h-[60px]">
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                </CardBody>
              </Card>
            </Tab>
            <Tab>
              <Card className="">
                <CardHeader className="block justify-between">
                  <Image
                    src="/images/leadership/gautam_da.png"
                    alt="leadership image"
                    width={500}
                    height={50}
                    className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                  />
                </CardHeader>
                <CardBody className="padding text-small text-black">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <div className="flex flex-col items-start justify-center gap-1">
                      <h4 className="text-md font-semibold leading-none text-black">
                        Abhra Bagchi
                      </h4>
                      <h5 className="text-small text-default-400">
                        Architect, Digital Design
                      </h5>
                    </div>
                    <Link href="#">
                      <Image
                        src="/images/leadership/linkedin.png"
                        alt="linkedin"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                  <p className="h-[60px]">
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                </CardBody>
              </Card>
            </Tab>
            <Tab>
              <Card className="">
                <CardHeader className="block justify-between">
                  <Image
                    src="/images/leadership/gautam_da.png"
                    alt="leadership image"
                    width={500}
                    height={50}
                    className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                  />
                </CardHeader>
                <CardBody className="padding text-small text-black">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex flex-col items-start justify-center gap-1">
                      <h4 className="text-md font-semibold leading-none text-black">
                        Shabaaz N Syed
                      </h4>
                      <h5 className="text-small text-default-400">
                        Director, Custom Layout
                      </h5>
                    </div>
                    <Link href="#">
                      <Image
                        src="/images/leadership/linkedin.png"
                        alt="linkedin"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                  <p className="h-[60px]">
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                </CardBody>
              </Card>
            </Tab>
          </TabList>

          <TabPanel>
            <p className="rounded-md bg-white p-5 text-sm drop-shadow-three">
              Gautam is an accomplished semiconductor professional with
              experience in IC and IP product-design and business creation. He
              has held senior engineering positions at top semiconductor product
              and IP companies in India, driving the product-definition and
              management of business-units responsible for
              designing/architecting the high-speed interconnect communication
              IPs for multiple protocols and high-performance clock and data
              products. He holds an M.Sc(Engg) degree in Electronic Design and
              Technology from Indian Institute of Science (IISc, Bangalore) and
              a B.Tech degree from IIT Varanasi, India. Gautam has been part of
              some of the well known successful semiconductor startups from
              India.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="rounded-md bg-white p-5 text-sm drop-shadow-three">
              In his two decades of experience, Prasun led some of the
              cutting-edge designs coming out of top semiconductor products and
              IP companies. He was responsible for the successful design and
              productization of industry-leading RF transceivers,
              high-performance PLLs, ADCs, TIAs and SERDES. He holds a B.E.
              degree in Electronics and Communication Systems from IIEST,
              Shibpur, West Bengal. He has been part of one of the most
              successful semiconductor startup from India.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="rounded-md bg-white p-5 text-sm drop-shadow-three">
              Abhra brings with him a rich and diverse experience in Digital
              Design. He has previously worked with Google, Qualcomm & Intel
              after graduating from Indian Institute of Science (IISc) with an
              M.Tech in Electronic Design and B.Tech from IIEST, Shibpur. He has
              worked on Coherent Caches for GPUs, WiFi 6/6E PHY, Memory
              Controllers and other HSIO.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="rounded-md bg-white p-5 text-sm drop-shadow-three">
              Shabaaz brings with him extensive experience in custom-layout,
              chip-integration of complex SoCs and ICs. He has previously worked
              with Maxlinear, Western-Digital after having a B.Tech Degree in
              Electronics from Sri Dharmasthala Manjunatheshwara College of
              Engineering and Technology,Dharwad. He has worked on
              multi-protocol Serdes, RF-transceivers, High-performance analog
              ICs.
            </p>
          </TabPanel>
        </Tabs>
      </section>
    </RootLayout>
  );
};

export default LeadershipPage;
