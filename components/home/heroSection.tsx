import React from "react";
import Image from "next/image";
import AnimatedContent from "../ui/globalsEffeckt/AnimatedContent";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="flex bg-[url(/hero-section-bg.webp)] bg-cover bg-center h-screen items-center justify-center px-4 w-full overflow-x-hidden">
        {/* Animated Content */}
        <AnimatedContent
          distance={100}
          direction="vertical"
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1.05}
          threshold={0.1}
          delay={0}
        >
          <div className="container bg-gray-200/5 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 rounded-4xl top-20 mx-auto flex flex-col items-center justify-center py-8 md:py-12 w-full  overflow-hidden" id="/">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 lg:gap-8 w-full mx-96 overflow-hidden">
              <div className="order-1 md:order-none w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shrink-0">
                <Image
                  src="/sheffield.webp"
                  alt="Sheffield-united"
                  width={300}
                  height={300}
                  className="rounded-full object-cover w-full h-full md:mt-20"
                />
              </div>
              {/* Ana logo */}
              <div className="order-3 md:order-none w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80  md:my-0 shrink-0">
                {" "}
                {/* shrink-0 eklendi */}
                <Image
                  src="/ada-accounts.webp"
                  alt="Ada & Co Accounts Logo"
                  width={300}
                  height={300}
                  className="filter brightness-0 invert w-full h-auto object-contain"
                />
              </div>
              {/* Hull City logosu */}
              <div className="order-2 md:order-none w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shrink-0">
                {" "}
                {/* shrink-0 eklendi */}
                <Image
                  src="/Hull-City.webp"
                  alt="Hull City"
                  width={300}
                  height={300}
                  className="object-fill w-full h-full md:mt-20"
                />
              </div>
            </div>
            {/* Başlık - overflow-x-hidden eklendi */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-50 text-center px-4 w-full overflow-hidden -mt-18 md:-mt-3">
              Ada & Co
              <br />
              <span className="text-slate-50 text-xl sm:text-2xl md:text-3xl font-medium">
                Accounts
              </span>
            </h2>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default HeroSection;
