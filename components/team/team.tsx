import Link from "next/link";

const members = [
  {
    name: "Nesli AKKUŞ",
    role: "Founder - CEO",
    avatar: "/nesli-akkus.webp",
    link: "#",
  },
  {
    name: "Meral TOPALOĞLU",
    role: "Manager",
    avatar: "/meral-topaloglu.webp",
    link: "#",
  },
  {
    name: "Beliz YETİZ",
    role: "Costumer Manager",
    avatar: "/beliz-yetiz.webp",
    link: "#",
  },
  {
    name: "RECEPTIONIST",
    role: "RECEPTIONIST",
    avatar:
      "https://static.wixstatic.com/media/ac855c_d835454a44de4a7c857e154e111e766b~mv2.png/v1/crop/x_24,y_0,w_402,h_450/fill/w_422,h_472,al_c,lg_1,q_85,enc_avif,quality_auto/124206821-person-gray-photo-placeholder-woman-in-costume-on-white-background.png",
    link: "#",
  },
  {
    name: "Book-keeper",
    role: "Book-keeper",
    avatar:
      "https://static.wixstatic.com/media/ac855c_95243251f777407286d027f912f7a7e6~mv2.jpeg/v1/crop/x_23,y_0,w_547,h_612/fill/w_422,h_472,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/istockphoto-517998264-612x612.jpeg",
    link: "#",
  },
  {
    name: "Customer Relations",
    role: "Customer Relations",
    avatar:
      "https://static.wixstatic.com/media/ac855c_d835454a44de4a7c857e154e111e766b~mv2.png/v1/crop/x_24,y_0,w_402,h_450/fill/w_422,h_472,al_c,lg_1,q_85,enc_avif,quality_auto/124206821-person-gray-photo-placeholder-woman-in-costume-on-white-background.png",
    link: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[url('/line-bg-team.webp')]  bg-cover py-16 md:py-32 ">
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Team
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              Our team consists of passionate experts in their fields. Each of
              us develops innovative solutions to provide the best service for
              your clients while continuously improving ourselves. With our
              experienced team, we take pride in supporting your business growth
              and success. Together, we strive to deliver the best results for
              you.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {" "}
                      Linktree
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
