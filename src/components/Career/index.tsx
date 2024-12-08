"use client";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";
import Link from "next/link";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <Image
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWNoZXZyb24tZG93biIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgPHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiIC8+Cjwvc3ZnPgoKCg=="
          alt="Chevron"
          width={20}
          height={20}
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && "bg-slate-200"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Career = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="contact" className="overflow-hidden py-4 md:py-6 lg:py-8">
      <div className="container">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-2xl font-semibold capitalize text-dark dark:text-white sm:2xl md:text-3xl">
            Transform your Future, We are hiring
          </h2>
          <p className="mb-8 text-sm text-black dark:text-white">
            At Fermionic, we&apos;re continuously looking for smart and
            passionate engineers ready to drive and contribute on our product
            roadmap. We seek people who are intelligent than us. That&apos;s how
            we create a company of high-performance innovators for a meaningful
            impact on the semiconductor IC and product design.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Accordion transition transitionTimeout={200} className="text-sm">
              <AccordionItem
                header="Senior Manager / Principal Engineer Silicon Validation"
                initialEntered
              >
                <p className="mb-4">
                  <span className="font-semibold text-dark">
                    Responsibilities:
                  </span>{" "}
                  Plan, develop, and execute tests to validate a hardware
                  SERDES, RF-Front-End IP, power-management ICs and integration
                  at the system level.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Qualification:</span>{" "}
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <ul className="mb-6 list-inside list-disc">
                  <li className="mb-2">
                    10+ years of relevant Silicon-validation, Debug/Test and
                    complete product-lifecycle-management experience, Hands-on
                    experience in chip bring-up and silicon debug
                  </li>
                  <li className="mb-2">
                    Bachelor&apos;s degree in
                    Electronics/Electrical/Instrumentation Engineering or
                    equivalent practical experience. Master&apos;s Degree
                    preferred
                  </li>
                </ul>
                <p className="font-semibold">
                  Send your CV at:{" "}
                  <Link href="mailto:careers@fermionic.design" className="text-primary">careers@fermionic.design</Link>
                </p>
              </AccordionItem>

              <AccordionItem header="Analog/Mixed-Signal Design Engineer">
                <p className="mb-4">
                  <span className="font-semibold text-dark">
                    Lorem ipsum dolor sit amet:
                  </span>{" "}
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Lorem ipsum:</span>{" "}
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">
                    Lorem ipsum dolor:
                  </span>{" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Place:</span> Kolkata
                  office
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Role Category:</span>{" "}
                  Website Design
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Education:</span> A
                  bachelor&apos;s degree in fields like Graphic Design,
                  Interaction Design or related areas.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Key Skills:</span>{" "}
                  Desired profile of the candidate good knowledge in UI / UX,
                  Figma, , Photoshop, Web Design, Mobile App screen design.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Experience:</span> 2
                  - 5 years
                </p>
                <p className="font-semibold">
                  Send your CV at:{" "}
                  <span className="text-primary">careers@fermionic.design</span>
                </p>
              </AccordionItem>

              <AccordionItem header="What is Lorem Ipsum?">
                <p className="mb-4">
                  <span className="font-semibold text-dark">
                    Lorem ipsum dolor sit amet:
                  </span>{" "}
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Lorem ipsum:</span>{" "}
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">
                    Lorem ipsum dolor:
                  </span>{" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Place:</span> Kolkata
                  office
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Role Category:</span>{" "}
                  Website Design
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Education:</span> A
                  bachelor&apos;s degree in fields like Graphic Design,
                  Interaction Design or related areas.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Key Skills:</span>{" "}
                  Desired profile of the candidate good knowledge in UI / UX,
                  Figma, , Photoshop, Web Design, Mobile App screen design.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-dark">Experience:</span> 2
                  - 5 years
                </p>
                <p className="font-semibold">
                  Send your CV at:{" "}
                  <span className="text-primary">careers@fermionic.design</span>
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="md:w-1/2 hidden md:block">
            <Image
              src="/images/career/we-are-hiring-.jpg"
              alt="career-image"
              width={500}
              height={500}
              className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
