import React from "react";
import * as styles from "../styles/Portfolio.css";
import art1 from "../Images/art1.jpg";
import Image from "next/image";

const Logo = () => {
  return (
    <>    <div className="PortFolioSection">
      <div className="PortfolioSectionTopHead">
        <h1>Logos</h1>
      </div>
      <div className="PortfolioContainer">
        <div className="PortfolioCard">
          <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
      </div>
    </div></>

  );
};

export default Logo;