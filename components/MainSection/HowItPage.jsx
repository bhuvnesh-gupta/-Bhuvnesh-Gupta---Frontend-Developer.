import Image from "next/image";
import React from "react";
import AnimatedList from "./AnimatedList";

const HowItPage = () => {
  return (
    <div className="flex text-[#ffffff] mt-[122px]">
      <div>
        <Image
          className="shadow rounded-[16px] ml-[-120px] "
          src={"/images/imgPage3.png"}
          alt={"Ai avatar"}
          width={816}
          height={508}
        />
      </div>
      <div width={596}>
        <p className="text-[64px] font-semibold">How it Works</p>
        <ul>
          <AnimatedList />
        </ul>
      </div>
    </div>
  );
};

export default HowItPage;
