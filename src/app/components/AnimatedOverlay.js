import React from 'react'
import * as styles from "../styles/Portfolio.css";
import art1 from "../Images/art1.jpg";
import Image from "next/image";

const AnimatedOverlay = () => {
  return (
    <>          <div className="PortFolioSection">
    <div className="PortfolioSectionTopHead">
      <h1> Animated Overlay</h1>
    </div>
    <div className="PortfolioContainer">
      <div className="PortfolioCard" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#00C5F4'
      }}>
        {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
        <video width="450" height="500px" controls  >
          <source src="/animatedoverlay1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="PortfolioCard" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#51EC49'
      }}>
        {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
        <video width="450" height="500px" controls  >
          <source src="/animatedoverlay2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="PortfolioCard" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
      }}>
        {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
        <video width="450" height="500px" controls  >
          <source src="/animatedoverlay3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="PortfolioCard" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9519D1'
      }}>
        {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
        <video width="450" height="500px" controls  >
          <source src="/animatedoverlay4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="PortfolioCard" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AE1C20'
      }}>
        {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
        <video width="450" height="500px" controls  >
          <source src="/animatedoverlay5.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="PortfolioCard" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8A6D0E'
      }}>
        {/* <Image src={art1} width={0} height={0} sizes="100vw" className="PortfolioCardImage"/> */}
        <video width="450" height="500px" controls  >
          <source src="/animatedoverlay6.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  </div></>
  )
}

export default AnimatedOverlay