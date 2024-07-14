import React from 'react'
import * as styles from "../styles/Portfolio.css";
// import art1 from "../Images/art1.jpg";
import illustration1 from "../Images/illustration1.jpg";
import illustration2 from "../Images/illustration2.jpg";
import illustration3 from "../Images/illustration3.jpg";
import illustration4 from "../Images/illustration4.png";
import illustration5 from "../Images/illustration5.png";
import illustration6 from "../Images/illustration6.jpg";
import Image from "next/image";

const Illustration = () => {
  return (
    <>    <div className="PortFolioSection">
      <div className="PortfolioSectionTopHead">
        <h1>Illustration</h1>
      </div>
      <div className="PortfolioContainer">
        <div className="PortfolioCard">
          <Image src={illustration1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={illustration2} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={illustration3} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={illustration4} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={illustration5} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={illustration6} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
      </div>
    </div></>
  )
}

export default Illustration