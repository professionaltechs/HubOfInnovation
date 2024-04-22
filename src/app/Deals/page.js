import React from "react";
import Navbar from "../components/Navbar";
import Deals from "../components/Deals";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
    <Navbar/>
      <Deals />
      <Footer/>
    </>
  );
};

export default page;
