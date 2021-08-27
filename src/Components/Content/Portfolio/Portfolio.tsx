import Style from './Portfolio.module.scss'
import { smallScreen as sc } from '../../../developerTools/developerTools';
import { NavigationBarHeight, osBxShadow } from '../../NavigationBar/NavigationBar';
import { _videoAltaBirra } from './_videoAltaBirra';
import { _videoPokemon } from './_videoPokemon';
import { useContext } from 'react';
import LanguageContext from '../../../Context/language';
var Scroll = require('react-scroll');
var Element = Scroll.Element;

// Somewhere else, even another file



export const Portfolio: React.FunctionComponent<{}> = (conf) => {


    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////RETURN//////////////////////////////////////////////////////////
    ///////////////////////////////////////////RETURN///////////////////////////////////////////////////
    ///////////////////////////////////////////////////RETURN///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    return (<div id={Style.container} style={{ marginTop: sc() ? "1rem" : NavigationBarHeight + osBxShadow + "vh" }} >

        {/* end of confetti things */}
        <Element name="title">
            <div id={Style.title}>~Portfolio~</div>
        </Element>

        <_videoAltaBirra />
        <_videoPokemon />




    </div >)
}