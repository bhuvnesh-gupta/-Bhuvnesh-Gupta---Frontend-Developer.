import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header flex justify-between border-b border-opacity-5  items-center w-100% sticky top-0 z-[10] p-3 text-[#ffffff] bg-[rgba(0,0,0,0.6)] backdrop-blur-sm">
      <div className="flex justify-between">
        <div className="ml-[64px] mr-[48px] text-xl">A I . G E N</div>
        <div>
          <ul className="flex justify-between">
            <Link href="/" className="mr-12 font-normal hover:opacity-[0.8]">
              Features
            </Link>
            <Link href="/" className="mr-12  hover:opacity-[0.8]">
              Roadmap
            </Link>
            <Link href="/" className="mr-12 hover:opacity-[0.8]">
              Tokenomics
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mr-16">
        <Link
          href="/"
          className="bg-[#ffffff] bg-opacity-[0.6] pt-[13px] pb-[11px] pr-6 pl-6 font-medium text-center rounded mr-3 hover:opacity-[0.8]">
          Whitepaper
        </Link>
        <Link
          href="'/"
          className="bg-gradient-to-r from-purple-600 to-purple-400 pt-[13px] pb-[11px] pr-6 pl-6 font-medium text-center rounded hover:opacity-[0.8] ">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Header;
