import React from "react";
import LogoOne from "./images/logoOne.png";
import LogoTwo from "./images/hero-image 2.jpg";
import LogoThree from "./images/Big Dream.jpg";

export default function Home() {
  return (
    <div>
      <header className="h-28 bg-gradient-to-r from-[#1CCFEA] to-[#F8F7B6] flex justify-centers items-center ">
        <div className="h-20 w-20 ms-5">
          <img src={LogoOne} />
        </div>
      </header>
      <section
        id="SectionOne"
        className="bg-gradient-to-r from-[#F8F7B6] to-[#BCD5FC] h-auto my-20"
      >
        <div id="ImgOne">
          <img src={LogoTwo} className="rounded-2xl" />
        </div>
        <div id="ImgTwo" className="my-20">
          <img src={LogoThree} />
        </div>
      </section>
    </div>
  );
}
