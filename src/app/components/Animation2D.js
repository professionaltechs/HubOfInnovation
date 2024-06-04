import React from 'react'
import * as styles from "../styles/Portfolio.css";
import art1 from "../Images/art1.jpg";
import Image from "next/image";

/**
 * Renders a section of the portfolio page, displaying a grid of logo images.
 * @returns {JSX.Element} The rendered portfolio section.
 */
const Animation2D = () => {
  return (
    <>
<div className="PortFolioSection">
      <div className="PortfolioSectionTopHead">
        <h1>2D Animation</h1>
      </div>
<div className="PortfolioContainer">
          <div className="PortfolioCard" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:'#FFC182'
        }}>
            {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
            <video width="450" height="500px" controls  >
              <source src="/2danimation1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="PortfolioCard" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#7AAEFB'
        }}>
            {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
            <video width="450" height="500px" controls  >
              <source src="/2danimation2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="PortfolioCard" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#40696D'
        }}>
            {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
            <video width="450" height="500px" controls  >
              <source src="/2danimation3.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="PortfolioCard" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#C71C48'
        }}>
            {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
            <video width="450" height="500px" controls  >
              <source src="/2danimation4.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="PortfolioCard" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4B4245'
        }}>
            {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
            <video width="450" height="500px" controls  >
              <source src="/2danimation5.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="PortfolioCard" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#7D84A0'
        }}>
            {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
            <video width="450" height="500px" controls  >
              <source src="/2danimation6.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
        </div>
    </>
  );
};

export default Animation2D