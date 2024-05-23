import React from 'react'
import * as styles from "../styles/Portfolio.css";
import OS1 from "../Images/overlaystatic1.png";
import OS2 from "../Images/overlaystatic2.png";
import OS3 from "../Images/overlaystatic3.jpg";
import OS4 from "../Images/overlaystatic4.jpg";
import OS5 from "../Images/overlaystatic5.jpg";
import OS6 from "../Images/overlaystatic6.jpg";
import Image from "next/image";

const StaticOverlay = () => {
  return (
    <>    <div className="PortFolioSection">
    <div className="PortfolioSectionTopHead">
      <h1>Static Overlay</h1>
    </div>
    <div className="PortfolioContainer">
      <div className="PortfolioCard">
        <Image src={OS1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={OS2} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={OS3} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={OS4} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={OS5} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={OS6} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
    </div>
  </div></>
  )
}

export default StaticOverlay