import React from "react";
import * as styles from "../styles/Portfolio.css";
import art1 from "../Images/art1.jpg";
// import art1 from "../Images/ao.mp4";
import Image from "next/image";
const Animation3D = () => {
  return (
    <>
      <div className="PortFolioSection">
        <div className="PortfolioSectionTopHead">
          <h1>3D Animation</h1>
        </div>
        <div className="PortfolioContainer">
          <div className="PortfolioCard">
            {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
            <video width="450" height="500px" controls  >
              <source src="/ao.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="PortfolioCard">
            <Image
              src={art1}
              width={0}
              height={0}
              sizes="100vw"
              className="PortfolioCardImage"
            />
          </div>
          <div className="PortfolioCard">
            <Image
              src={art1}
              width={0}
              height={0}
              sizes="100vw"
              className="PortfolioCardImage"
            />
          </div>
          <div className="PortfolioCard">
            <Image
              src={art1}
              width={0}
              height={0}
              sizes="100vw"
              className="PortfolioCardImage"
            />
          </div>
          <div className="PortfolioCard">
            <Image
              src={art1}
              width={0}
              height={0}
              sizes="100vw"
              className="PortfolioCardImage"
            />
          </div>
          <div className="PortfolioCard">
            <Image
              src={art1}
              width={0}
              height={0}
              sizes="100vw"
              className="PortfolioCardImage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation3D;
