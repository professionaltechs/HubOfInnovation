import React from "react";
import * as styles from "../styles/Portfolio.css";
import logo3 from "../Images/logo3.PNG";
import logo7 from "../Images/logo7.jpg";
import logo1 from "../Images/logo1.jpg";
import logo9 from "../Images/logo9.jpg"
import logo2 from "../Images/logo2.jpg";
import logo4 from "../Images/logo4.jpg";
import Image from "next/image";

const Logo = () => {
  return (
    <>    <div className="PortFolioSection">
      <div className="PortfolioSectionTopHead">
        <h1>Logos</h1>
      </div> 
      <div className="PortfolioContainer">
        <div className="PortfolioCard">
          <Image src={logo3} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={logo7} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={logo1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={logo9} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={logo2} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={logo4} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
      </div>
    </div></>

  );
};

export default Logo;
