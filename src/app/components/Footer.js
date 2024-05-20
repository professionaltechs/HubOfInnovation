import React from "react";
import * as styles from "../styles/footer.css";
import { FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="FooterSection">
        <div className="FooterTopDetails">
          <Link href="/">
            <p className="FooterPagesLinks">home.</p>
          </Link>
          <Link href="/aboutus">
            <p className="FooterPagesLinks">about us.</p>
          </Link>
          <h1>Hub Of Innovation</h1>
          <Link href="/GetInTouch"><p className="FooterPagesLinks">Get in Touch.</p></Link>
          <Link href="/Contactus"><p className="FooterPagesLinks">contact us.</p></Link>
        </div>
        <div className="Line"></div>
        <div className="SocialLinks">
          <p>Follow us on social networks:</p>
          <div className="Links">
            <Link href="https://www.behance.net/hubofinnovation" target='blank'><div className="LinkIconBox">
              <FaBehance className="LinkIcons" />
            </div></Link>
            <Link href="https://x.com/hubofinnovation?t=laksvKZ0JgQwS4R8O8PP7w&s=09" target='blank'><div className="LinkIconBox">
              <FaXTwitter className="LinkIcons" />
            </div></Link>
          </div>
        </div>
        <div className="MobileFooter">
          <div className="FooterMobileDetails">
          <Link href="/">
            <p className="FooterMobilePagesLinks">home.</p>
          </Link>
          <Link href="/aboutus">
            <p className="FooterMobilePagesLinks">about us.</p>
          </Link>
          <Link href="/GetInTouch"><p className="FooterMobilePagesLinks">Get in Touch.</p></Link>
          <Link href="/Contactus"><p className="FooterMobilePagesLinks">contact us.</p></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
