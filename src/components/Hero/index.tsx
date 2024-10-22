"use client";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Image from "next/image";

const Hero: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider
        {...settings}
        className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark"
      >
        <div>
          <Image
            src="/images/sliders/slider_1.jpg"
            alt="slider 1"
            className="h-full w-full object-cover"
            width={1024}
            height={525}
          />
          <div className="absolute top-16 z-10 ml-10 mt-16 max-w-[320px] pl-10 pt-16 lg:max-w-[550px]">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Wireline Transceivers
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-white dark:text-body-color-dark sm:text-lg md:text-xl">
              Developing PPA optimized NRZ and PAM4 SerDes transceiver core for
              backplane wireline communication standards
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/images/sliders/slider_2.jpg"
            alt="slider 1"
            className="h-full w-full object-cover"
            width={1024}
            height={525}
          />
          <div className="absolute top-16 z-10 ml-10 mt-16 max-w-[320px] pl-10 pt-16 lg:max-w-[550px]">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              RF Wireless Communication
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-white dark:text-body-color-dark sm:text-lg md:text-xl">
              Developing Quad-Transceiver Beamformer IC for 6-10.5 GHz with
              6-bit Phase-Control and 6-bit Gain Control
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/images/sliders/slider_3.jpg"
            alt="slider 1"
            className="h-full w-full object-cover"
            width={1024}
            height={525}
          />
          <div className="absolute top-16 z-10 ml-10 mt-16 max-w-[320px] pl-10 pt-16 lg:max-w-[550px]">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Automotive SERDES
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-white dark:text-body-color-dark sm:text-lg md:text-xl">
              Developing asymmetrical, high-performance SerDes Cores for
              in-vehicle connectivity for ASA Motion Link and broadband
              connection of sensors for autonomous driving
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/images/sliders/slider_4.jpg"
            alt="slider 1"
            className="h-full w-full object-cover"
            width={1024}
            height={525}
          />
          <div className="absolute top-16 z-10 ml-10 mt-16 max-w-[320px] pl-10 pt-16 lg:max-w-[550px]">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              D2D and SiP Subsystem
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-white dark:text-body-color-dark sm:text-lg md:text-xl">
              Developing High-Performance D2D PHY for Protocol and
              Interface-agnostic and standard UCIe standards for chiplet
              connectivity for AI/ML, cloud computing
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Hero;
