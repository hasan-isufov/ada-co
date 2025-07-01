"use client";

import { HoverEffect } from "../ui/card-hover-effect";
import AnimatedContent from "../ui/globalsEffeckt/AnimatedContent";

const projects = [
  {
    title: "ACCOUNTANCY",
    description:
      "for Companies, Contractors and Small Businesses. We provide comprehensive accounting services tailored to your business needs.",
    link: "",
  },
  {
    title: "BOOKKEEPING",
    description:
      "Accurate, affordable bookkeeping for sole traders, contractors & SMEs. We handle invoicing, expenses, VAT, payroll & reporting—keeping your finances compliant & organized. Save time, reduce stress!",
    link: "",
  },
  {
    title: "TAX RETURNS",
    description:
      "Expert assistance with tax returns for individuals and businesses. We ensure compliance and maximize your deductionsPrecise tax solutions for companies, sole traders, contractors & SMEs.",
    link: "",
  },
  {
    title: "PAYROLL",
    description:
      "We handle payroll processing, tax calculations, and compliance—ensuring accurate, on-time payments for your employees. Stress-free payroll for companies, contractors & SMEs.",
    link: "",
  },
  {
    title: "VAT RETURNS",
    description:
      "Specialized VAT solutions for companies, sole traders, contractors & SMEs. We handle VAT registration, returns, compliance and reclaims - maximizing your recoverable VAT while ensuring full HMRC compliance.",
    link: "",
  },
  {
    title: "CIS RETURNS",
    description:
      "We handle Construction Industry Scheme (CIS) returns, deductions, and compliance—ensuring accurate submissions and maximum tax efficiency for your contracting business. Stay HMRC-compliant with ease!",
    link: "",
  },
];

export function OurServices() {
  return (
    <>
      <div className="flex w-full px-8 py-8 bg-[url('/our-services-bg.webp')] bg-cover bg-center">
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          duration={2.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
          delay={0}
          >
        <div className="w-full pl-4 h-full ">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white py-5">
            Our Services
          </h2>
          <HoverEffect items={projects} />
        </div>
        </AnimatedContent>
      </div>
    </>
  );
}
