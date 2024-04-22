import React from 'react'
import * as styles from "../styles/Deals.css";
import { FaPaperPlane } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoIosRocket } from "react-icons/io";
import { FaCheck  } from "react-icons/fa6";
import Head from "next/head";


const Deals = () => {
  return (
    <>
    <Head>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
  </Head>
  <section className="dealsSection">
    <div className="container-fluid">
      <div className="container CardContainer">
        <div className="row">
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="title">
              < FaPaperPlane className="fa"/>
                <h2>Basic</h2>
              </div>
              <div className="price">
                <h4>
                  <sup>$</sup>599
                </h4>
              </div>
              <div className="OptionFlex">
              <div className="option">
                <ul>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                    2 Logos{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                   2 Banners{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}1
                    (2D)Model{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}1
                    (3D)Model{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}1
                    Static Overlay{" "}
                  </li>
                 
                  
                </ul>
              </div>
              <div className="option">
                <ul>
                
               
                
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}5
                     Twitch Emotes{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                    1 Thumbail{" "}
                  </li>
                  
                  <li>
                    {" "}
                    <FaCheck className="tick" />
                    1 PFP{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                    1
                     Intro{" "}
                  </li>
               
                 
                  
                </ul>
              </div>
              </div>
              
              <a href="#" style={{marginTop:"120px"}}>Buy Now </a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="title">
              <BiSolidPlaneAlt className="fa"/>
                <h2>Standard</h2>
              </div>
              <div className="price">
                <h4>
                  <sup>$</sup>1199
                  
                </h4>
                
              </div>
              <div className="OptionFlex">
              <div className="option">
                <ul>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                    4 Logos{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                   2 Banners{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}2
                    (2D)Model{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}1
                    (3D)Model{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}2
                    Static Overlay{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}1
                    Animated Overlay{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}10
                     Twitch Emotes{" "}
                  </li>
                 
                  
                </ul>
              </div>
              <div className="option">
                <ul>
                
                  <li>
                    {" "}
                    <FaCheck className="tick" /> 6
                    Subadges{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                    2 Thumbail{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />1
                    Illustration{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />
                    1 PFP{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                    3
                    2 Intro{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" /> 1
                    Outro{" "}
                  </li>
                 
                  
                </ul>
              </div>
              </div>
              <a href="#" style={{marginTop:"70px"}}>Buy Now </a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card text-center PremiumCard">
              <div className="title">
              <IoIosRocket className="fa"/>
                <h2>Premium</h2>
              </div>
              <div className="price">
                <h4>
                  <sup>$</sup>2999
                </h4>
              </div>
              <div className="OptionFlex">
              <div className="option">
                <ul>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                    5 Logos{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                   5 Banners{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}4
                    (2D)Model{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}2
                    (3D)Model + Rigging{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}3
                    Static Overlay{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}2
                    Animated Overlay{" "}
                  </li>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}10
                    Static twitch Emotes{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}10
                    Animated twitch Emotes{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" /> 10
                    Subadges{" "}
                  </li>
                  
                </ul>
              </div>
              <div className="option">
                <ul>
                <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                    5 Thumbail{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />3
                    Illustration{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />
                    2 PFP{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                    3 Intro{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" /> 3
                    Outro{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />{" "}
                    1 OC&aposs{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />
                    2 (2D) Animation{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck className="tick" />
                    1 (3D) Animation{" "}
                  </li>
                </ul>
              </div>
              </div>
              
              <a href="#">Buy Now </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</>
  )
}

export default Deals