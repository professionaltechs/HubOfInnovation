import React from "react";
import * as styles from "../styles/Portfolio.css";
import art1 from "../Images/art1.jpg";
import Image from "next/image";
const Animation3D = () => {
  return (

    <>
    <div className="PortFolioSection">
      <div className="PortfolioSectionTopHead">
        <h1>3D Animation</h1>
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
              <source src="/3danimation1.mp4" type="video/mp4" />
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
              <source src="/3danimation2.mp4" type="video/mp4" />
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
              <source src="/3danimation3.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="PortfolioCard" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4E3F37'
        }}>
            {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
            <video width="450" height="500px" controls  >
              <source src="/3danimation4.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="PortfolioCard" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#916293'
        }}>
            {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
            <video width="450" height="500px" controls  >
              <source src="/3danimation5.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="PortfolioCard" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#8173C4'
        }}>
            {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
            <video width="450" height="500px" controls  >
              <source src="/3danimation6.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
        </div>
    </>
  );
};

export default Animation3D;
