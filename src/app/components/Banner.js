import React from 'react'
import * as styles from "../styles/Portfolio.css";
// import art1 from "../Images/art1.jpg";
import banner1 from "../Images/banner1.jpg";
import banner2 from "../Images/banner2.jpg";
import banner3 from "../Images/banner3.jpg";
import banner4 from "../Images/banner4.jpg";
import banner5 from "../Images/banner5.jpg";
import banner6 from "../Images/banner6.jpg";
import Image from "next/image";


const Banner = () => {
  return (
    <>    <div className="PortFolioSection">
    <div className="PortfolioSectionTopHead">
      <h1>Banners</h1>
    </div>
    <div className="PortfolioContainer">
      <div className="PortfolioCard">
        <Image src={banner1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={banner2} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={banner3} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={banner4} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={banner5} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
      <div className="PortfolioCard">
        <Image src={banner6} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
      </div>
    </div>
  </div></>
  )
}

export default Banner