import Image from "next/image";
import Navbar from "./components/Navbar";
import SlidingText from "./components/SlidingText";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SlidingText/>
      <HomePage/>
      <Footer/>
    </>
  );
}
