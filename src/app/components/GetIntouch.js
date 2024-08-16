import React from 'react'
import * as styles from "../styles/GetIntouch.css";
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";


const GetIntouch = () => {
  return (
    <>
      <div className="GetInTouchSection">
        <h1>wanna get in touch?</h1>
        <div className="GetInTouchDetails">
          <Link href="https://www.behance.net/hubofinnovation" target='blank' ><p className="underline-animation">Behance</p></Link>
          <Link href="https://x.com/hubofinnovation?t=laksvKZ0JgQwS4R8O8PP7w&s=09" target='blank' ><p className="underline-animation">Twitter</p></Link>
          <Link href="https://www.pinterest.com/hubofinnovation/?invite_code=1888444080334bd6ae904d984b12d664&sender=1070519911333441215" target='blank' ><p className="underline-animation">Pinterest</p></Link>

        </div>
        <div className="GetInTouchDetails">
          <Link href="/" ><p className="underline-animation">Mail</p></Link>
          <Link href="https://www.facebook.com/profile.php?id=61562909632776&mibextid=ZbWKwL" target='blank' ><p className="underline-animation">Facebook</p></Link>
          <Link href="https://www.instagram.com/hubofinnovation?igsh=MTM4amtqcXNpZHpvZQ==" target='blank' ><div class="child child-1">
            <button class="button btn-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#1e90ff"><FaXTwitter /></svg>
            </button>
          </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default GetIntouch