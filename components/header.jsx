//import Link from "next/link";
// import React from "react";

// const Header = () => {
//   return (
//     <div className="header flex justify-between items-center w-100% sticky top-0 z-[10] h-[72px] text-[#ffffff] bg-[rgba(0,0,0,0.6)] backdrop-blur-sm">
//       <div className="flex justify-between">
//         <div className="ml-[64px] mr-[48px] text-xl">A I . G E N</div>
//         <div>
//           <ul className="flex justify-between">
//             <Link href="/" className="mr-12 font-normal hover:opacity-[0.8]">
//               Features
//             </Link>
//             <Link href="/" className="mr-12  hover:opacity-[0.8]">
//               Roadmap
//             </Link>
//             <Link href="/" className="mr-12 hover:opacity-[0.8]">
//               Tokenomics
//             </Link>
//           </ul>
//         </div>
//       </div>

//       <div className="flex justify-between mr-16">
//         <Link
//           href="/"
//           className="bg-[#ffffff] bg-opacity-[0.6] pt-[13px] pb-[11px] pr-6 pl-6 font-medium text-center rounded mr-3 hover:opacity-[0.8]">
//           Whitepaper
//         </Link>
//         <Link
//           href="'/"
//           className="bg-gradient-to-r from-purple-600 to-purple-400 pt-[13px] pb-[11px] pr-6 pl-6 font-medium text-center rounded hover:opacity-[0.8] ">
//           Get Started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;

// components/Header.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header w-full sticky top-0 z-10 h-16 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm text-white">
      <div className="container mx-auto flex justify-between items-center h-full px-4 ">
        <div className="flex justify-between">
          <div className=" ml-[64px] mr-[48px] text-xl">A I . G E N</div>
          <div>
            {" "}
            <ul className="flex justify-between">
              {" "}
              <Link href="/" className="mr-12 font-normal hover:opacity-[0.8]">
                Features{" "}
              </Link>{" "}
              <Link href="/" className="mr-12  hover:opacity-[0.8]">
                Roadmap{" "}
              </Link>{" "}
              <Link href="/" className="mr-12 hover:opacity-[0.8]">
                Tokenomics{" "}
              </Link>{" "}
            </ul>{" "}
          </div>
        </div>

        <div className="hidden md:flex  mr-16">
          <Link
            href="/"
            className="bg-[#ffffff] bg-opacity-[0.6] pt-[13px] pb-[11px] pr-6 pl-6 font-medium text-center rounded mr-3 hover:opacity-[0.8]">
            Whitepaper
          </Link>
          <Link
            href="/"
            className="bg-gradient-to-r from-purple-600 to-purple-400 pt-[13px] pb-[11px] pr-6 pl-6 font-medium text-center rounded hover:opacity-[0.8]">
            Get Started
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black bg-opacity-80 text-white absolute w-full top-16 left-0">
          <Link href="/" className="py-2 hover:opacity-80" onClick={toggleMenu}>
            Features
          </Link>
          <Link href="/" className="py-2 hover:opacity-80" onClick={toggleMenu}>
            Roadmap
          </Link>
          <Link href="/" className="py-2 hover:opacity-80" onClick={toggleMenu}>
            Tokenomics
          </Link>
          <Link href="/" className="py-2 hover:opacity-80" onClick={toggleMenu}>
            Whitepaper
          </Link>
          <Link
            href="/"
            className="py-2 hover:opacity-80 bg-gradient-to-r from-purple-600 to-purple-400 rounded w-3/4 text-center"
            onClick={toggleMenu}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
