import React from 'react'
import * as styles from "../styles/Portfolio.css";
import pfp1 from "../Images/pfp1.jpg";
import pfp2 from "../Images/pfp2.jpg";
import pfp3 from "../Images/pfp3.jpg";
import pfp4 from "../Images/pfp4.jpg";
import pfp5 from "../Images/pfp5.jpeg";
import pfp6 from "../Images/pfp6.jpg";
import Image from "next/image";

const Pfp = () => {
  return (
    <>    <div className="PortFolioSection">
    <div className="PortfolioSectionTopHead">
      <h1>Pfp's</h1>
    </div>
    <div className="PortfolioContainer">
      <div className="PortfolioCard">
        <Image src={pfp1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={pfp2} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={pfp3} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={pfp4} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={pfp5} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={pfp6} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
    </div>
  </div></>

  )
}

export default Pfp