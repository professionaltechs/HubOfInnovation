import React from "react";
import * as styles from "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="AboutUsBanner">
        <h1>About Us</h1>
      </div>
      <div className="AboutUsContainer">
        <div className="AboutUsContainerHeading">
          <p>Something about us</p>
          <h1>We are Amaz8, design studio in HI</h1>
        </div>
        <div className="AboutUsContainerContent">
          <p>
            Welcome to Hub of Innovation, We are a dynamic team of designers. Our mission is
            simple: to transform your ideas into compelling Whether
            you're seeking a captivating logo, engaging banners, or immersive
            brand experiences, we're here to turn your dreams into reality. Join
            us at the forefront of design evolution and let's embark on a
            journey of creativity, collaboration, and unparalleled excellence.
          </p>
        </div>
        <div className="AboutUsContainerContent">
          <p>
            At Hub of Innovation, creativity is at the heart of everything we
            do. We are a passionate team of graphic designers, artists, and
            innovators. From sleek logos to captivating banners and
            everything in between, we specialize in turning ideas into visually
            stunning realities. At Hub of Innovation, we're not just designers;
            we're partners on your journey to success. Let's create something
            extraordinary together.
          </p>
        </div>
      </div>
      <div className="AboutUsPortfolioSection">
        <div className="AboutUsPortfolioSectionDetails">
          <h1>Our portfolio</h1>
          <p>
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
