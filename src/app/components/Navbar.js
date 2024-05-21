"use client";

import React, { useCallback, useState } from "react";
import * as styles from "../styles/Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import hilogo from "../Images/hilogo.png";

const Navbar = () => {

  const handleClick = useCallback(() => {
    const hidingElem = document.getElementsByClassName("MobileNavbar")[0];
    if (hidingElem.clientHeight == 0) {
      const requiredHeight = hidingElem.firstChild.clientHeight;
      hidingElem.style.height = `${requiredHeight}px`;
      return; 
    }
    hidingElem.style.height = `0px`;
  });

  const handlePortfolioDropdown = ()=>{
    const portfolioDropdown = document.getElementsByClassName("MobileDropDown")[0]
    const hidingElem = document.getElementsByClassName("MobileNavbar")[0];
    if(portfolioDropdown.style.height === "0px"){
      portfolioDropdown.style.height = portfolioDropdown.firstChild.scrollHeight + "px";
      const requiredHeight = hidingElem.firstChild.scrollHeight + portfolioDropdown.firstChild.scrollHeight;
      hidingElem.style.height = `${requiredHeight}px`;
    }else{
      portfolioDropdown.style.height = '0px';
      const requiredHeight = 170;
      hidingElem.style.height = `${requiredHeight}px`;
    }
  }


  return (
    <>
      <div className="NavbarSection">
        <div className="NavbarContainer">
          <h1>
            <span>
              <Image
                src={hilogo}
                width={0}
                height={0}
                sizes="100vw"
                className="logo"
              />
            </span>
            hub of innovation
          </h1>
          <div className="NavbarItems">
            <Link href="/">
              <p className="hover-underline-animation">home.</p>
            </Link>
            <Link href="/aboutus">
              <p className="hover-underline-animation">about us.</p>
            </Link>
            <div className="PortfolioDropDown">
              <p className="hover-underline-animation Portfolio">portfolio.</p>
              <div className="DropDown">
                <div className="DropDownContainer">
                  <ul>
                    <Link href="/Portfolio/Logos">
                      <li>Logos </li>
                    </Link>
                    <Link href="/Portfolio/banner">
                      <li>Banner</li>
                    </Link>
                    <Link href="/Portfolio/Model2D">
                      <li>2D Model</li>
                    </Link>
                    <Link href="/Portfolio/Model3D">
                      <li>3D Model</li>
                    </Link>
                    <Link href="/Portfolio/Animation2D">
                      <li>2D Animation</li>
                    </Link>
                    <Link href="/Portfolio/Animation3D">
                      <li>3D Animation</li>
                    </Link>
                    <Link href="/Portfolio/StaticOverlay">
                      <li>Static Overlay</li>
                    </Link>
                    <Link href="/Portfolio/AnimatedOverlay">
                      <li>Animated Overlay</li>
                    </Link>
                    <Link href="/Portfolio/Emotes">
                      <li>Emotes</li>
                    </Link>
                    <Link href="/Portfolio/Pfp">
                      <li>PFP's</li>
                    </Link>
                    <Link href="/Portfolio/Nft">
                      <li>NFT's</li>
                    </Link>
                    <Link href="/Portfolio/Illustration">
                      <li>Illustration</li>
                    </Link>
                    <Link href="/Portfolio/Subbadges">
                      <li>Subbages</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/GetInTouch">
              <p className="hover-underline-animation">get in touch.</p>
            </Link>
            <Link href="/Contactus">
              <p className="hover-underline-animation">contact us.</p>
            </Link>
          </div>
          <div className="MobileNavbarIcon">
            <div className="BarIcon" onClick={handleClick}>
              <FaBarsStaggered />
            </div>
          </div>
        </div>
        <div className="MobileNavbar">
          <div className="MobileNavbarDetails">
            <Link href="/">
              {" "}
              <p className="hover-underline-animation">home.</p>
            </Link>
            <Link href="/aboutus">
              <p className="hover-underline-animation">about us.</p>
            </Link>
            <p className="hover-underline-animation" onClick={handlePortfolioDropdown}>portfolio.</p>
            <div className="MobileDropDown" style={{height: '0px', overflow: 'hidden'}}>
              <div className="MobileDropDownContainer">
                <ul>
                  <Link href="/Portfolio/Logos">
                    <li>Logos </li>
                  </Link>
                  <Link href="/Portfolio/banner">
                    <li>Banner</li>
                  </Link>
                  <Link href="/Portfolio/Model2D">
                    <li>2D Model</li>
                  </Link>
                  <Link href="/Portfolio/Model3D">
                    <li>3D Model</li>
                  </Link>
                  <Link href="/Portfolio/Animation2D">
                    <li>2D Animation</li>
                  </Link>
                  <Link href="/Portfolio/Animation3D">
                    <li>3D Animation</li>
                  </Link>
                  <Link href="/Portfolio/StaticOverlay">
                    <li>Static Overlay</li>
                  </Link>
                  <Link href="/Portfolio/AnimatedOverlay">
                    <li>Animated Overlay</li>
                  </Link>
                  <Link href="/Portfolio/Emotes">
                    <li>Emotes</li>
                  </Link>
                  <Link href="/Portfolio/Pfp">
                    <li>PFP's</li>
                  </Link>
                  <Link href="/Portfolio/Nft">
                    <li>NFT's</li>
                  </Link>
                  <Link href="/Portfolio/Illustration">
                    <li>Illustration</li>
                  </Link>
                  <Link href="/Portfolio/Subbadges">
                    <li>Subbages</li>
                  </Link>
                </ul>
              </div>
            </div>
            <Link href="/GetInTouch">
              <p className="hover-underline-animation">get in touch.</p>
            </Link>
            <Link href="/Contactus">
              <p className="hover-underline-animation">contact us.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
