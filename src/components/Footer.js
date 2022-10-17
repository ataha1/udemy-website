import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoGlobeOutline} from 'react-icons/io5'
import styles from './FooterStyles.module.css'
import udemy from './udemy.PNG'

function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.FooterHeader}>
            <span className={styles.UdemyBusiness}>
                Top companies choose<NavLink to ='/chooseudemy' className={styles.Havinghover}> Udemy Business</NavLink> to build in-demand career skills.
            </span>
            <span className={styles.UdemyLogos}>
                <img className={styles.AvgPhoto} alt="Nasdaq"  src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"/>
                <img className={styles.WPhoto}  alt="Volkswagen"  src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"/>
                <img className={styles.BoxPhoto}  alt="Box"  src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"/>
                <img className={styles.AvgPhoto} alt="NetApp"  src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"/>
                <img className={styles.AvgPhoto} alt="Eventbrite"   src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"/>
            </span>
        </div>
        <div className={styles.FooterBody}>
            <div className={styles.FooterLists}>
                <ul className={styles.FooterList}>
                    <li><NavLink to='/UdemyBusiness' className={styles.ListElement}>Udemy Business</NavLink></li>
                    <li><NavLink to='/Teach on Udemy ' className={styles.ListElement}>Teach on Udemy </NavLink></li>
                    <li><NavLink to='/Get the App' className={styles.ListElement}>Get the App</NavLink></li>
                    <li><NavLink to='/About us' className={styles.ListElement}>About us</NavLink></li>
                    <li><NavLink to='/Contact us' className={styles.ListElement}>Contact us</NavLink></li>
                </ul>
                <ul className={styles.FooterList}>
                    <li ><NavLink to='/Careers' className={styles.ListElement}>Careers</NavLink></li>
                    <li><NavLink to='/Blog ' className={styles.ListElement}>Blog </NavLink></li>
                    <li><NavLink to='/Help and Support' className={styles.ListElement}>Help and Support</NavLink></li>
                    <li><NavLink to='/Affiliate' className={styles.ListElement}>Affiliate</NavLink></li>
                    <li><NavLink to='/Investors' className={styles.ListElement}>Investors</NavLink></li>
                </ul>
                <ul className={styles.FooterList}>
                    <li ><NavLink to='/Terms' className={styles.ListElement}>Terms</NavLink></li>
                    <li ><NavLink to='/Privacy policy ' className={styles.ListElement}>Privacy policy </NavLink></li>
                    <li ><NavLink to='/Cookie settings' className={styles.ListElement}>Cookie settings</NavLink></li>
                    <li ><NavLink to='/Sitemap' className={styles.ListElement}>Sitemap</NavLink></li>
                    <li ><NavLink to='/Accessability statement' className={styles.ListElement}>Accessability statement</NavLink></li>
                </ul>
            </div>
            <div className={styles.languageButton}>
                <button type="button" className={styles.EnglishButton}>
                 <IoGlobeOutline  size={18} /> <span >English </span></button>
            </div>
        </div>
        <div className={styles.FooterFooter}>
            <NavLink to='/' className= {styles.UdemyImage} ><img   src={udemy} alt="Udemy"/></NavLink>
            <div className={styles.CopyRights}>© 2022 Udemy, Inc.</div>
        </div>
      
    </div>
  )
}

export default Footer
