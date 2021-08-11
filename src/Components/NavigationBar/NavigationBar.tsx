

import React from 'react'
// import { Link } from 'react-router-dom'
import Style from './NavigationBar.module.scss'
import { Link } from 'react-scroll'
import AboutStyle from '../Content/About/About.module.scss'
import PortfolioStyle from '../Content/Portfolio/Portfolio.module.scss'
import ContactStyle from '../Content/Contact/Contact.module.scss'
import { vh } from '../../developerTools'
export const NavigationBarHeight = "4.6vh";

export const NavigationBar: React.FunctionComponent<{}> = () => {

    const duration = 300
    return (
        <div id={Style.NavigationBar} style={{ height: NavigationBarHeight }}>
            {/* <Link to="/About">About </Link>
            <Link to="/Portfolio">Portfolio</Link> */}
            <Link className={Style.link} to={PortfolioStyle.Portfolio} smooth={true} duration={duration} offset={vh(-1)} >Portfolio</Link>
            <Link className={Style.link} to={AboutStyle.About} smooth={true} duration={duration} offset={vh(-1)} >About</Link>
            <Link className={Style.link} to={ContactStyle.Contact} smooth={true} duration={duration} offset={vh(-1)} >Contact</Link>
        </div >
    )
}