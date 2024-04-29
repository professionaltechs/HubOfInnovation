"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as styles from "../styles/Dashboard.css";

const Dashboard = () => {
  const [filePreview, setFilePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setErrorMessage("");
    } else {
      setErrorMessage("Please select an image");
    }
  };
  return (
    <>
      <div className="DashboardSection">
        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Logos</a>
            <a href="#">Banner</a>
            <a href="#">2D Model</a>
            <a href="#">3D Model</a>
            <a href="#">2D Animation</a>
            <a href="#">3D Animation</a>
            <a href="#">Static Overlay</a>
            <a href="#">Animated Overlay</a>
            <a href="#">Emotes</a>
            <a href="#">PFP's</a>
            <a href="#">NFT's</a>
            <a href="#">Illustration</a>
            <a href="#">Subbages</a>
          </div>
        </div>

        <form className="uploader">
          <label htmlFor="file-upload" id="file-drag">
            {filePreview ? (
              <img id="file-image" src={filePreview} alt="Preview" />
            ) : (
              <div id="start">
                <i className="fa fa-download" aria-hidden="true"></i>
                <div>Select a file or drag here</div>
                <div className={errorMessage ? "" : "hidden"} id="notimage">
                  {errorMessage}
                </div>
                {/* <span id="file-upload-btn" className="btn btn-primary">
                Select a file
              </span> */}
              </div>
            )}
            <input
              id="file-upload"
              type="file"
              name="fileUpload"
              accept="image/*"
              onChange={handleFileChange}
            />
            <div className="hidden" id="response">
              <div id="messages"></div>
              <progress
                className="progress"
                id="file-progress"
                value={uploadProgress}
              >
                <span>{uploadProgress}%</span>
              </progress>
            </div>{" "}
            <button>
              Upload
              <span></span>
            </button>
          </label>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
