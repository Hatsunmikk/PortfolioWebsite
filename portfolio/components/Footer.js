import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../constants/userinfo'
import Link from 'next/link'

const Footer = ({ currentTheme }) => {
  return (
    <div
      className={styles.footermain}
      style={{
        backgroundColor: currentTheme.footerColor,
        color: currentTheme.subtext,
      }}
    >
      <div className={styles.footertable}>
        

        <ul>
          <li className={styles.listHeading}>Socials</li>
          {userinfo.socials
            ? userinfo.socials.map((social, key) => (
                <Link href={social.link} key={key}>
                  <a>
                    <li>{social.type}</li>
                  </a>
                </Link>
              ))
            : null}
        </ul>

        <ul>
          <li className={styles.listHeading}>Contact</li>
          <li>{userinfo.contact.email}</li>
        </ul>

        <ul>
          <li className={styles.listHeading}>Pages</li>
          <Link href='/'>
            <a><li>Home</li></a>
          </Link>
          <Link href='/#about'>
            <a><li>About</li></a>
          </Link>
          <Link href='/work'>
            <a><li>Portfolio</li></a>
          </Link>
          <Link href='/contact'>
            <a><li>Contact</li></a>
          </Link>
        </ul>
      </div>

      <hr
        style={{
          height: '1px',
          backgroundColor: currentTheme.subtext,
          border: 'none',
          opacity: '0.5',
        }}
      />

      
    </div>
  );
};

export default Footer;
