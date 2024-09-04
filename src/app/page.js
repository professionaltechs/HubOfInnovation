import Image from "next/image";
import Head from 'next/head'
import Navbar from "./components/Navbar";
import SlidingText from "./components/SlidingText";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
     <div>
      <Head>
        <title>My page title</title>
      </Head>
    </div>
      <Navbar />
      <SlidingText/>
      <HomePage/>
      <Footer/>
    </>
  );
}
