"use client";

import React from "react";
import * as styles from "../styles/Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  function handleClick() {
    const hidingElem = document.getElementsByClassName("MobileNavbar")[0];
    if (hidingElem.clientHeight == 0) {
      const requiredHeight = hidingElem.firstChild.clientHeight;
      hidingElem.style.height = `${requiredHeight}px`
      return
    }
    hidingElem.style.height = `0px`;  
  }
  // function Click() {
  //   const hidingElem = document.getElementsByClassName("MobileDropDown")[0];
  //   if (hidingElem.clientHeight == 0) {
  //     const requiredHeight = hidingElem.firstChild.clientHeight;
  //     hidingElem.style.height = `${requiredHeight}px`
  //     return
  //   }
  //   hidingElem.style.height = `0px`;  
  // }

  return (
    <>
      <div className="NavbarSection">
        <div className="NavbarContainer">
          <h1>hub of innovation</h1>
          <div className="NavbarItems">
            <Link href="/"> <p className="hover-underline-animation">home.</p></Link>
           <Link href="/aboutus"><p className="hover-underline-animation">about us.</p></Link> 
            <div className="PortfolioDropDown">
              <p className="hover-underline-animation Portfolio">portfolio.</p>
              <div className="DropDown">
                <div className="DropDownContainer">
                  <ul>
                    <li>Logos </li>
                    <li>Banner</li>
                    <li>2D Model</li>
                    <li>3D Model</li>
                    <li>2D Animation</li>
                    <li>3D Animation</li>
                    <li>Static Overlay</li>
                    <li>Animated Overlay</li>
                    <li>Emotes</li>
                    <li>PFP's</li>
                    <li>NFT's</li>
                    <li>Illustration</li>
                    <li>Subbages</li>
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/GetInTouch"><p className="hover-underline-animation">get in touch.</p></Link>
            <p className="hover-underline-animation">contact us.</p>
          </div>
          <div className="MobileNavbarIcon">
            <div className="BarIcon" onClick={handleClick}>
              <FaBarsStaggered />
            </div>
          </div>
        </div>
        <div className="MobileNavbar">
          <div className="MobileNavbarDetails">
          <Link href="/"> <p className="hover-underline-animation">home.</p></Link>
           <Link href="/aboutus"><p className="hover-underline-animation">about us.</p></Link> 
            <p className="hover-underline-animation" >portfolio.</p>
            <div className="MobileDropDown">
              <div className="MobileDropDownContainer">
                <ul>
                  <li>Logos </li>
                  <li>Banner</li>
                  <li>2D Model</li>
                  <li>3D Model</li>
                  <li>2D Animation</li>
                  <li>3D Animation</li>
                  <li>Static Overlay</li>
                  <li>Animated Overlay</li>
                  <li>Emotes</li>
                  <li>PFP's</li>
                  <li>NFT's</li>
                  <li>Illustration</li>
                  <li>Subbages</li>
                </ul>
              </div>
            </div>
            <Link href="/GetInTouch"><p className="hover-underline-animation">get in touch.</p></Link>
            <p className="hover-underline-animation">contact us.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
