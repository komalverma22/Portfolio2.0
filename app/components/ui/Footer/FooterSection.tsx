import React from 'react'
import Link from "next/link";
import { Judson } from 'next/font/google'
import { FloatingDock } from "../../ui/floating-dock";

const judson = Judson({ subsets: ['latin'], weight: '700' });
const judsonn = Judson({ subsets: ['latin'], weight: '400' });

const icons = [
  {
    id: "1",
    image: "/twitter-logo.png",
    link: "https://x.com/coffee_0708",
  },
  {
    id: "2",
    image: "/discord-logo.png",
    link: "https://discord.com/users/coffee_0708"
  },
  {
    id: "3",
    image: "/linkedin-logo.png",
    link: "https://www.linkedin.com/in/komalverma007/",
  },
  {
    id: "4",
    image: "/github-logo.png",
    link: "https://github.com/komalverma22",
  },
];

const FooterSection = () => {
  return (
    <div className="relative">
      <div className="h-[300px] md:h-[385px] none md:flex justify-between px-2 md:px-50 py-10 ">
        {/* Left: Quick Links */}
        <div>
          <div className={`text-[35px] md:text-[57px] ${judson.className}`}>
            Quick Links
          </div>
          <div
            className={`flex flex-col space-y-[-2px] md:space-y-[-8px] text-[25px] md:text-[40px] ${judsonn.className}`}
          >
            <Link href="/">Home</Link>
            <Link href="/projects">Project</Link>
            <Link href="/design">Design</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex  gap-2 md:gap-4 mt-3">
          {icons.map((icon) => (
            <Link key={icon.id} href={icon.link} target="_blank">
              <img
                src={icon.image}
                alt="social-icon"
                className="w-5 h-5 md:w-10 md:h-10 hover:scale-110 transition-transform duration-200"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="absolute h-[50px] md:h-[91px] w-full"
        style={{
          background: "var(--navbar-bg-color)",
        }}
      >
        <div
          className={`${judsonn.className} text-[18px] h-[50px] md:h-[91px] justify-center items-center flex align-middle`}
        >
          Made with ♡ by
          <Link href="" className="px-1 font-semibold">
            coffee
          </Link>
          ©2025
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
