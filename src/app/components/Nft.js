import React from 'react'
import * as styles from "../styles/Portfolio.css";
import nft1 from "../Images/nft's1.jpg";
import nft2 from "../Images/nft's2.jpg";
import nft3 from "../Images/nft's3.jpg";
import nft4 from "../Images/nft's4.jpg";
import nft5 from "../Images/nft's5.jpg";
import nft6 from "../Images/nft's6.jpg";
import nft7 from "../Images/nft's7.png";
import Image from "next/image";

const Nft = () => {
  return (
    <>    <div className="PortFolioSection">
    <div className="PortfolioSectionTopHead">
      <h1>Nft's</h1>
    </div>
    <div className="PortfolioContainer">
      <div className="PortfolioCard">
        <Image src={nft1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={nft2} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={nft3} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={nft4} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={nft5} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={nft7} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
    </div>
  </div></>
  )
}

export default Nft