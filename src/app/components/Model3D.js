import React from 'react'
import * as styles from "../styles/Portfolio.css";
import art1 from "../Images/art1.jpg";
import Model3d1 from "../Images/model3d1.jpg";
import Model3d2 from "../Images/model3d2.png";
import Model3d3 from "../Images/model3d3.png";
import Model3d4 from "../Images/model3d4.png";
import Model3d5 from "../Images/model3d5.PNG";
// import Model3d6 from "../Images/model3d6.jpg";
import Image from "next/image";

const Model3D = () => {
  return (
    <>    <div className="PortFolioSection">
      <div className="PortfolioSectionTopHead">
        <h1>3D Model</h1>
      </div>
      <div className="PortfolioContainer">
        <div className="PortfolioCard">
          <Image src={Model3d1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={Model3d2} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={Model3d3} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={Model3d4} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={Model3d5} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
        <div className="PortfolioCard">
          <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/>
        </div>
      </div>
    </div></>
  )
}

export default Model3D