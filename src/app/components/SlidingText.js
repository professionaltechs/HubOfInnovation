'use client'

import React, { useEffect, useRef } from "react";
import * as styles from "../styles/SlidingText.css";
import Image from "next/image";
import vector from "../Images/vector.jpeg";
import vector2 from "..//Images/vector2.jpeg";
import vector3 from "../Images/vector3.jpeg";
import vector4 from "../Images/vector4.jpeg";
import vector5 from "../Images/vector5.jpeg";
import vector6 from "../Images/vector6.jpeg";
import vector7 from "../Images/vector7.jpeg";
import vector8 from "../Images/vector8.jpeg";
import vector9 from "../Images/vector9.jpeg";
import vector10 from "../Images/vector10.jpeg";
import vector11 from "../Images/vector11.jpeg";
import vector12 from "../Images/vector12.jpeg";
import vector13 from "../Images/vector13.jpeg";

const SlidingText = () => {

  return (
    <>
 
    <div>
      <div className="wrapper">
        <div className="items">
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector2.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector3.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector4.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector5.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector6.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector7.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector8.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector9.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector10.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector11.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector12.src})` }}
          ></div>
          <div
            className="item"
            tabindex="0"
            style={{ backgroundImage: `url(${vector13.src})` }}
          ></div>
        </div>
      </div>


      <div className="MobileWrapper">
        <div className="items MobileItems">
          <div
            className="item updateItem"
            tabindex="0"
            style={{ backgroundImage: `url(${vector.src})` }}
          ></div>
          <div
            className="item updateItem" 
            tabindex="0"
            style={{ backgroundImage: `url(${vector2.src})` }}
          ></div>
          <div
            className="item updateItem"
            tabindex="0"
            style={{ backgroundImage: `url(${vector3.src})` }}
          ></div>
          <div
            className="item updateItem"
            tabindex="0"
            style={{ backgroundImage: `url(${vector5.src})` }}
          ></div>
          <div
            className="item updateItem"
            tabindex="0"
            style={{ backgroundImage: `url(${vector8.src})` }}
          ></div>

        </div>
      </div>
      </div>   
      
    </>
  );
};

export default SlidingText;
