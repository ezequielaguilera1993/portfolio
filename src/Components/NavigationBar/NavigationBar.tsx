

import React from 'react'
// import { Link } from 'react-router-dom'
import Style from './NavigationBar.module.scss'
import { Link, animateScroll } from 'react-scroll'
import AboutStyle from '../Content/About/About.module.scss'
import PortfolioStyle from '../Content/Portfolio/Portfolio.module.scss'
import ContactStyle from '../Content/Contact/Contact.module.scss'
import { vh } from '../../developerTools/developerTools'
export const NavigationBarHeight = 5;
export const NavigationBar: React.FunctionComponent<{}> = () => {


    const duration = 300
    const goTop = () => animateScroll.scrollToTop({ duration: duration })
    return (
        <div id={Style.NavigationBar} style={{ height: NavigationBarHeight + "vh" }}>
            {/* <Link to="/About">About </Link>
            <Link to="/Portfolio">Portfolio</Link> */}
            <span className={Style.link} onClick={goTop} >About</span>
            <Link className={Style.link} to={PortfolioStyle.Portfolio} smooth={true} duration={duration} offset={-vh(NavigationBarHeight)} >Portfolio</Link>
            <Link className={Style.link} to={ContactStyle.Contact} smooth={true} duration={duration} offset={-vh(NavigationBarHeight)} >Contact</Link>
        </div >
    )
}