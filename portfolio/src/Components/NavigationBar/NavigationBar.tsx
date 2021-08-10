

import React from 'react'
// import { Link } from 'react-router-dom'
import Style from './NavigationBar.module.css'
import { Link } from 'react-scroll'
import AboutStyle from '../Content/About/About.module.css'
import PortfolioStyle from '../Content/Portfolio/Portfolio.module.css'
export const NavigationBar: React.FunctionComponent<{}> = () => {

    return (
        <div id={Style.container}>
            {/* <Link to="/About">About </Link>
            <Link to="/Portfolio">Portfolio</Link> */}
            <Link to={PortfolioStyle.altaBirraVideo} smooth={true} duration={737} offset={100} >Portfolio</Link>
            <Link to={AboutStyle.About} smooth={true} duration={737} offset={100} >About</Link>
        </div >
    )
}