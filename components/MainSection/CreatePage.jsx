import Image from "next/image";
import React from "react";
import "@/app/globals.css";

const CreatePage = () => {
  return (
    <div>
      {/* Images Section */}
      <div className="relative">
        <div className="flex justify-between  text-white ml-[177px] mr-[178px] mt-[197px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-[34px] w-full h-full object-cover opacity-90 mt-[64px]">
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img1page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px] "
              src={"/Page2images/img2page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px] "
              src={"/Page2images/img3page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
          </div>

          {/* column 2 */}
          <div className="flex flex-col gap-[34px] inset-0 w-full h-full object-cover opacity-50">
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img4page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img5page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img6page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
          </div>

          {/* column 3 */}
          <div className="flex flex-col gap-[34px] inset-0 w-full h-full object-cover opacity-50 mt-[64px]">
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img7page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img8page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img9page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
          </div>

          {/* column 4 */}
          <div className="flex flex-col gap-[34px]  inset-0 w-full h-full object-cover opacity-50">
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img10page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img11page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img12page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
          </div>

          {/* column 5 */}
          <div className="flex flex-col gap-[34px]  inset-0 w-full h-full object-cover opacity-50 mt-[64px]">
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img13page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img14page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img15page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
          </div>

          {/* column 6 */}
          <div className="flex flex-col gap-[34px]  inset-0 w-full h-full object-cover opacity-50">
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img16page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]  "
              src={"/Page2images/img17page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img18page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
          </div>

          {/* column 7 */}
          <div className="flex flex-col gap-[34px]  inset-0 w-full h-full object-cover opacity-50 mt-[64px]">
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img19page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px] "
              src={"/Page2images/img20page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <Image
              className="shadow-page-2 rounded-[15px]"
              src={"/Page2images/img21page2.png"}
              alt={"Elon Musk"}
              width={126}
              height={126}
            />
            <div className="w-[786px] absolute flex items-center justify-center top-0 left-0 text-center mt-[204px] ml-[327px] mr-[327px]">
              <p className="text-[#ffffff] font-medium text-5xl">
                <span className="gradient-text">
                  Create, customize, and publish
                </span>{" "}
                your digital persona to life effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
