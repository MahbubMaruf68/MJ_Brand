import React from "react";
import LogoOne from "./images/logoOne.png";
import LogoTwo from "./images/hero-image 2.jpg";
import LogoThree from "./images/Big Dream.jpg";
import LogoFour from "./images/about 3.png";
import LogoFive from "./images/Binance Cap.png";
import LogoSix from "./images/features 5.png";
import LogoSeven from "./images/minisolswap 6.png";
import LogoEight from "./images/launchpad 7.png";
import LogoNine from "./images/swap2 7.png";
import LogoTen from "./images/upcoming 8.png";

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
          <p className="text-center" s>
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
        <div id="LogoFive" className="p-5">
          <img src={LogoFive} />
        </div>
      </section>
      {/* Section Three */}
      <section
        id="Section Three"
        className="flex flex-col justify-center items-center"
      >
        <div id="LogoSix" className="p-5">
          <img src={LogoSix} />
        </div>
        <h1>Features</h1>
        <div className="flex flex-row justify-around items-center">
          <div id="LogoSeven" className="p-5">
            <img src={LogoSeven} />
          </div>
          <div id="LogoEight" className="p-5">
            <img src={LogoEight} />
          </div>
        </div>
      </section>

      {/* Section Four */}
      <section
        id="Section Three"
        className="flex flex-col justify-center items-center"
      >
        <div>
          <h1>MINI SOL Presale</h1>

          <p>Buy MINISOL with All Chain Support. (BNB/ETH/MATIC/SOLANA)</p>
        </div>

        <div>
          <button>Buy Now</button>
        </div>

        <div>
          <p>* 1 MINISOL = 0.000001$ </p>
          <p>* No Vesting Period</p>
        </div>
        <div id="LogoNine" className="p-5">
          <img src={LogoNine} />
        </div>
      </section>

      {/* Section Five */}
      <section id="SectionFive">
        <div id="LogoTen" className="p-5">
          <img src={LogoTen} />
        </div>
        <div></div>
      </section>
    </div>
  );
}
