import React from 'react'
import * as styles from "../styles/Portfolio.css";
// import art1 from "../Images/art1.jpg";
import model2d1 from "../Images/model2d1.jpg";
import model2d2 from "../Images/model2d2.jpg";
import model2d3 from "../Images/model2d3.jpg";
import model2d4 from "../Images/model2d4.jpg";
import model2d5 from "../Images/model2d5.png";
import model2d6 from "../Images/model2d6.png";
import model2d7 from "../Images/model2d7.png";
import Image from "next/image";

const Model2D = () => {
  return (
    <>    <div className="PortFolioSection">
      <div className="PortfolioSectionTopHead">
        <h1>2D Model</h1>
      </div>
      <div className="PortfolioContainer">
        <div className="PortfolioCard">
          <Image src={model2d1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={model2d2} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={model2d3} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={model2d4} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={model2d7} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={model2d6} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
      </div>
    </div></>
  )
}

export default Model2D