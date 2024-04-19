"use client";

import React from "react";
import * as styles from "../styles/HomePage.css";

import art1 from "../Images/art1.jpg";
import art2 from "../Images/art2.jpeg";
import art3 from "../Images/art3.jpg";
import art4 from "../Images/art4.jpg";
import art5 from "../Images/art5.jpg";
import art6 from "../Images/art6.jpg";
import art7 from "../Images/art7.jpeg";
import art8 from "../Images/art8.jpg";
import art9 from "../Images/art9.jpg";
import art10 from "../Images/art10.jpg";
import art11 from "../Images/art11.jpg";
import art12 from "../Images/art12.jpg";
import art13 from "../Images/art13.jpg";
import art14 from "../Images/art14.jpg";
import art15 from "../Images/art15.jpg";

import Image from "next/image";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const HomePage = () => {
  //   lightGallery(document.getElementById('lightgallery'), {
  //     plugins: [lgZoom, lgThumbnail],
  //     speed: 500,
  //     licenseKey: 'your_license_key'

  // });
  return (
    <>
      <div className="HomeSection">
        <div className="ExploreBox">
          <p>Discover Your Creative Canvas : Unveil Exclusive Art Deals Now!</p>
        <button class="ExploreBtn">
            <span className="SpanExplore"> Explore </span>
          </button>
        </div>

        
        <h1>
          <span>U</span>nveiling Our Latest Creations
        </h1>
        <div className="HomeSectionContainer">
          <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>

              <a href="art1.jpg">
                <Image alt="" src={art1} />
              </a>
            </LightGallery>
          </div>
          <div className="ImageBox">
            <Image src={art2} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art3} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art4} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art5} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art6} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art7} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art8} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art9} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art10} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art11} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art12} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art13} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art14} width={0} height={0} sizes="100vw" />
          </div>
          <div className="ImageBox">
            <Image src={art15} width={0} height={0} sizes="100vw" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
