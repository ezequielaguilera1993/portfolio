

import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import Style from './NavigationBar.module.scss'
import { Link, animateScroll } from 'react-scroll'
// import AboutStyle from '../Content/About/About.module.scss'
import PortfolioStyle from '../Content/Portfolio/Portfolio.module.scss'
import ContactStyle from '../Content/Contact/Contact.module.scss'
import { smallScreen, vh } from '../../developerTools/developerTools'
import LanguageContext from '../../Context/language'
export const NavigationBarHeight = 5;
export const osBxShadow = 4.2
export const NavigationBar: React.FunctionComponent<{}> = () => {
    const sc = smallScreen()
    const duration = 300
    const goTop = () => animateScroll.scrollToTop({ duration: duration })
    // const goBottom = () => animateScroll.scrollToBottom({ duration: 1000 })
    const languageContext = useContext(LanguageContext)
    return (
        <div id={Style.NavigationBar} style={{ height: NavigationBarHeight + "vh" }}>
            {/* <Link to="/About">About </Link>
            <Link to="/Portfolio">Portfolio</Link> */}
            <span className={Style.link} onClick={goTop} >Sobre mi</span>
            <Link className={Style.link} to={PortfolioStyle.title} smooth={true} duration={duration} offset={!sc ? -vh(NavigationBarHeight) - osBxShadow : -osBxShadow} >Portfolio</Link>
            <Link className={Style.link} to={ContactStyle.title} smooth={true} duration={duration} offset={!sc ? -vh(NavigationBarHeight) - osBxShadow : -osBxShadow} >Contacto</Link>
            <button onClick={() => { languageContext.languageDispatch({ type: "CHANGE_LANGUAGE" }); console.log('languageContext.languageState.language:::', languageContext.languageState.inSpanish) }}>||||||||||||||</button>
        </div >
    )
}