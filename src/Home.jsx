import React from "react";
import LogoOne from "./images/logoOne.png";
import LogoTwo from "./images/hero-image 2.jpg";
import LogoThree from "./images/Big Dream.jpg";
import LogoFour from "./images/about 3.png";
import LogoFive from "./images/king 4.png";

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
        className="bg-gradient-to-r from-[#F8F7B6] to-[#BCD5FC]"
      >
        <div id="ImgOne">
          <img src={LogoTwo} className="rounded-2xl" />
        </div>
        <div id="ImgTwo" className="my-10">
          <img src={LogoThree} />
        </div>
      </section>

      {/* Section Two */}

      <section
        id="SectionTwo"
        className="flex flex-col justify-center items-center border-2 border-yellow-400 m-5"
      >
        <div id="LogoFour">
          <img src={LogoFour} />
        </div>
        <div className="p-5">
          <h1 className="text-center">Small Coin, Big Dreams!</h1>
          <p className="text-center">
            MiiniSol is designed to be the spirited mini version of Solana,
            capturing the essence and excitement of the blockchain in a more
            compact, community-focused form. We aim to create a vibrant
            ecosystem that supports the growth and hype of memecoins, empowering
            both novice and seasoned investors to explore innovative and
            entertaining opportunities in the cryptocurrency space. We will
            mostly inspire investors to keep the hype and support memecoins by
            launching New Memecoin Projects on our multi-chain IDOs.
          </p>
        </div>
        <div id="LogoFive">
          <img src={LogoFive} />
        </div>
      </section>
    </div>
  );
}
