import Link from "next/link";
import React from "react";
import "@/app/globals.css";
import Image from "next/image";

const BillionairesPage = () => {
  return (
    <div className=" flex justify-between text-[#ffffff]">
      {/* Text Section */}
      <div className="w-[660px] mt-[127.5px]  ml-[175.54px]">
        {/* Link */}
        <div className=" w-[454px] rounded-[10px] bg-gradient-to-r from-[#ababab26] via-[#ffffff4d] to-[#ababab26] p-[3px] mb-[64px]">
          <Link
            href="/"
            className="bg-[#141414] pt-[3.5px] pb-[3px] pr-[12.5px] pl-[12px]  rounded-[10px] text-2xl">
            🎉 New in AI.GEN Real Time Interaction
          </Link>
        </div>

        {/* Text  */}
        <div>
          <p className="text-5xl leading-[59px]">
            IOTA polygon serum ipsum WAX terraUSD gala THETA
          </p>
          <p className="text-2xl mt-6 leading-10">
            Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor
            horizen ethereum quant bitcoin.
          </p>
        </div>

        {/* Button */}
        <button className="bg-gradient-to-r mt-12 from-purple-600 to-purple-400 text-2xl pt-[22px] pb-[17.5px] pl-[32px] pr-[32px] font-medium text-center rounded hover:opacity-[0.8] ">
          Get Started
        </button>
      </div>

      {/* Images Section */}
      <div className="flex justify-between">
        <div className="flex flex-col mt-[18px] mr-[49px]">
          {/* Column 1 */}
          <Image
            className="shadow rounded-[22px]"
            src={"/Page1images/elonmusk.png"}
            alt={"Elon Musk"}
            width={178}
            height={178}
          />
          <Image
            className="shadow mt-[48px] rounded-[22px]"
            src={"/Page1images/BillGates.png"}
            alt={"Bill Gates"}
            width={178}
            height={178}
          />
          <Image
            className="shadow mt-[48px] rounded-[22px]"
            src={"/Page1images/TimCook.png"}
            alt={"Tim Cook"}
            width={178}
            height={178}
          />
        </div>
        {/* column 2 */}
        <div className="flex flex-col mt-[-66px] rounded-[22px] mr-[49px]">
          <Image
            className="shadow"
            src={"/Page1images/Trump.png"}
            alt={"Donald Trump"}
            width={178}
            height={178}
          />
          <Image
            className="shadow mt-[48px] rounded-[22px]"
            src={"/Page1images/Zuckerberg.png"}
            alt={"Mark zuckerberg"}
            width={178}
            height={178}
          />
          <Image
            className="shadow mt-[48px] rounded-[22px]"
            src={"/Page1images/Picture6.png"}
            alt={"billionaire"}
            width={178}
            height={178}
          />
        </div>

        {/* column 3 */}
        <div className="flex flex-col mt-[18px] rounded-[22px] mr-[-64px]">
          <Image
            className="shadow rounded-[22px] "
            src={"/Page1images/JoeBiden.png"}
            alt={"Joe Biden"}
            width={178}
            height={178}
          />
          <Image
            className="shadow mt-[48px] rounded-[22px]"
            src={"/Page1images/Einstein.png"}
            alt={" Einstein"}
            width={178}
            height={178}
          />
          <Image
            className="shadow mt-[48px] rounded-[22px]"
            src={"/Page1images/Obama.png"}
            alt={"barack Obama"}
            width={178}
            height={178}
          />
        </div>
      </div>
    </div>
  );
};

export default BillionairesPage;
