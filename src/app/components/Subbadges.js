import React from 'react'
import * as styles from "../styles/Portfolio.css";
import badge1 from "../Images/badge1.jpg";
import badge2 from "../Images/badge2.jpg";
import badge3 from "../Images/badge3.png";
import badge4 from "../Images/badge4.png";
import badge5 from "../Images/badge5.png";
import badge6 from "../Images/badge6.jpg";
import Image from "next/image";

const Subbadges = () => {
  return (
    <>    <div className="PortFolioSection">
      <div className="PortfolioSectionTopHead">
        <h1>Subbadges</h1>
      </div>
      <div className="PortfolioContainer">
        <div className="PortfolioCard">
          <Image src={badge1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={badge2} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={badge3} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={badge4} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={badge5} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={badge6} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
      </div>
    </div></>
  )
}

export default Subbadges