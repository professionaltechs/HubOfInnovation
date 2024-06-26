"use client";

import React from "react";
import * as styles from "../styles/HomePage.css";
import Link from "next/link";

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
import logo from "../Images/hilogo.png";

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
        {/* <div className="ExploreBox">
          <p>Discover Your Creative Canvas : Unveil Exclusive Art Deals Now!</p>
        <button className="ExploreBtn">
            <span className="SpanExplore"> Explore </span>
          </button>
        </div> */}
        <div className="e-card playing">
          <div className="image"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="infotop">
            Discover Your Creative Canvas : Unveil Exclusive Art Deals Now!
            <div className="name">
              <Link href="/Deals">
                <button class="cta">
                  <span>Explore</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
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
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art2.jpeg">
                <Image alt="" src={art2} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art3.jpg">
                <Image alt="" src={art3} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art4.jpg">
                <Image alt="" src={art4} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art5.jpg">
                <Image alt="" src={art5} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art6.jpg">
                <Image alt="" src={art6} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art7.jpeg">
                <Image alt="" src={art7} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art8.jpg">
                <Image alt="" src={art8} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art9.jpg">
                <Image alt="" src={art9} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art10.jpg">
                <Image alt="" src={art10} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art11.jpg">
                <Image alt="" src={art11} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art12.jpg">
                <Image alt="" src={art12} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art13.jpg">
                <Image alt="" src={art13} />
              </a>
            </LightGallery>
          </div>
          <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art14.jpg">
                <Image alt="" src={art14} />
              </a>
            </LightGallery>
          </div>
           <div className="ImageBox">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="art15.jpg">
                <Image alt="" src={art15} />
              </a>
            </LightGallery>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
