import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="flex  w-full  px-4 py-8  overflow-hidden  bg-[url('/ada-business.webp')] bg-cover bg-center bg-no-repeat ">
        <div className="flex absolute  w-[calc(100%-theme(spacing.4))] justify-center items-center ">
          <h2 className="text-3xl z-10 md:text-4xl lg:text-5xl font-extrabold text-center text-white ">
            About Us
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full  mx-auto mt-10 bg-gray-200/5 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 rounded-4xl px-4 py-8">
          <div className="flex md:w-1/2 mr-auto px-4 py-8 mt-10 ">
            <Image
              src="/about.webp"
              alt="About Us"
              width={700}
              height={300}
              className="rounded-lg shadow-lg flex-wrap  md:flex"
            />
          </div>
          <div className="w-full  md:w-1/2 ml-auto  px-4 py-8 mt-10">
            <p className="text-2xl font-semibold text-justify text-amber-50 ">
              Our objective is to offer our growing client base professional
              service and technical expertise with their financial matters. We
              Save your precious time Reduce their tax liability by identifying
              potential deductions Help with budgeting and monitoring cash-flow
              on a steady basis Help grow business Prevent from receiving hefty
              tax penalties and fines We provide a full range of accounting
              services leaving you more free time to concentrate on running your
              business. We will deal with all the numbers and the rules. We
              offer complete flexibility to our clients and provide as much or
              as little support as suitable for their purposes. We are seasoned
              business professionals and are the natural choice for consultancy
              on many business issues.​We will be advising you on the most
              appropriate business structure for you considering the commercial
              matters and tax issues.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
