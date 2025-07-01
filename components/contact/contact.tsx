import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BsTelephoneFill } from "react-icons/bs";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="py-32 border w-full bg-[url('/contact-bg-2.webp')] bg-cover bg-center bg-no-repeat ">
      <div className="mx-auto  px-4 lg:px-0">
        <h2 className="text-3xl z-10 md:text-4xl lg:text-5xl font-extrabold text-center text-white">
          Contact Us
        </h2>

        <div className="h-3 flex flex-col  ">
          <div className=" hidden md:flex flex-col w-full md:w-1/2 text-black justify-center items-center pt-30">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.8776010593224!2d-1.4113555237498048!3d53.39912937077342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487977064e4171ab%3A0xb67cf5109cd38da8!2sAda%20%26%20Co%20Accounts!5e0!3m2!1str!2suk!4v1750949787429!5m2!1str!2suk"
              width="600"
              height="600"
              style={{ border: 1, borderRadius: 25 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <form
          action=""
          className=" flex w-full md:w-1/2 ml-auto rounded-4xl px-4 py-12 lg:px-0 lg:py-24"
        >
          <Card className="mx-auto  w-full h-auto  max-w-xl p-8 sm:p-16">
            <h3 className="text-2xl font-semibold">
              Let&apos;s get you to the right place
            </h3>

            <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
              <div>
                <Label htmlFor="name" className="space-y-2">
                  Full name
                </Label>
                <Input type="text" id="name" required />
              </div>
              <div>
                <Label htmlFor="email" className="space-y-2">
                  Work Email
                </Label>
                <Input type="email" id="email" required />
              </div>
              <div></div>

              <div>
                <Label htmlFor="msg" className="space-y-2">
                  Message
                </Label>
                <Textarea id="msg" rows={5} />
              </div>
              <Button className="px-10 py-6">Submit</Button>
            </div>
          </Card>
        </form>
      </div>

      <div>
        {" "}
        <h2 className="text-3xl z-10 md:text-4xl lg:text-5xl font-extrabold mx-10 text-white mt-20">
          Our Address
        </h2>
      </div>

      <div className=" flex flex-row items-center justify-center mt-20">
        <div className="mx-auto mt-20 px-4 lg:px-0 flex flex-col w-full md:w-1/2">
          <p className=" text-lg text-white mt-4 mx-14">
            Ada & Co Accounts, <br />
            Unit 6 Shepcote Office Village Shepcote Lane <br />
            Sheffield <br /> S9 1TG <br />
            England <br /> United Kingdom
          </p>
          <p className="text-lg text-white mx-14 mt-2 flex">
            {" "}
            <BsTelephoneFill className=" justify-center items-center mt-2 mr-2" />
            0755-4855-700
          </p>
          <p className="text-lg text-white mx-14 mt-2 flex">
            <TbDeviceLandlinePhone className=" justify-center items-center mt-2 mr-2" />
            0114-3222-770
          </p>
        </div>
        <div className="mx-auto mt-10 px-4 lg:px-5 hidden md:flex w-full md:w-1/2">
          <Image
            src="/ada-business.webp"
            alt="Contact Us"
            width={800}
            height={800}
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
  );
}
