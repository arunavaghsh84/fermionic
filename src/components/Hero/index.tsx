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
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
            height={425}
            priority={true}
          />
          <div className="container">
            <div className="absolute top-12 z-10 max-w-[320px] pl-10 pt-16 sm:max-w-[500px] md:mt-12">
              <h1 className="mb-5 text-xl font-semibold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                RF Beamformers
              </h1>
              <p className="mb-12 text-sm text-white dark:text-body-color-dark sm:text-base">
                Developing PPA optimized NRZ and PAM4 SerDes transceiver core
                for backplane wireline communication standards
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/sliders/slider_2.jpg"
            alt="slider 1"
            className="h-full w-full object-cover"
            width={1024}
            height={425}
          />
          <div className="container">
            <div className="absolute top-12 z-10 max-w-[320px] pl-10 pt-16 sm:max-w-[500px] md:mt-12">
              <h1 className="mb-5 text-xl font-semibold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                RF Front End Modules
              </h1>
              <p className="mb-12 text-sm text-white dark:text-body-color-dark sm:text-base">
                Developing Quad-Transceiver Beamformer IC for 6-10.5 GHz with
                6-bit Phase-Control and 6-bit Gain Control
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/sliders/slider_3.jpg"
            alt="slider 1"
            className="h-full w-full object-cover"
            width={1024}
            height={425}
          />
          <div className="container">
            <div className="absolute top-12 z-10 max-w-[320px] pl-10 pt-16 sm:max-w-[500px] md:mt-12">
              <h1 className="mb-5 text-xl font-semibold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                Power Management
              </h1>
              <p className="mb-12 text-sm text-white dark:text-body-color-dark sm:text-base">
                Developing asymmetrical, high-performance SerDes Cores for
                in-vehicle connectivity for ASA Motion Link and broadband
                connection of sensors for autonomous driving
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/sliders/slider_4.jpg"
            alt="slider 1"
            className="h-full w-full object-cover"
            width={1024}
            height={425}
          />
          <div className="container">
            <div className="absolute top-12 z-10 max-w-[320px] pl-10 pt-16 sm:max-w-[500px] md:mt-12">
              <h1 className="mb-5 text-xl font-semibold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                Microcontrollers
              </h1>
              <p className="mb-12 text-sm text-white dark:text-body-color-dark sm:text-base">
                Developing High-Performance D2D PHY for Protocol and
                Interface-agnostic and standard UCIe standards for chiplet
                connectivity for AI/ML, cloud computing
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Hero;
