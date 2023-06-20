import React from 'react'
import css from '../styles/footer.module.css';
import { YoutubeFilled, TwitterCircleFilled, InstagramFilled, FacebookFilled} from '@ant-design/icons';
import Link from 'next/link';


const footer = () => {
  return (
    <>
    <div className={`${css.main}`} >
        <div className={`${css.overlay}`}></div>
        <ul className={`${css.centerLinks}`}>
        <li>
            <Link href=""><FacebookFilled /></Link>
          </li>
          <li>
            <Link href=""><YoutubeFilled /></Link>
          </li>
          <li>
            <Link href=""><TwitterCircleFilled /></Link>
          </li>
          <li>
            <Link href=""><InstagramFilled /></Link>
          </li>
        </ul>
        <p className={`${css.footerText}`}>Email me for any suggestions,
            complaints, or complements! <br />gourisaini81@gmail.com</p>
      </div>
    </>
  )
}

export default footer