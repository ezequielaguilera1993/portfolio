import React, { useState } from 'react'
import Style from './_videoPokemon.module.scss'
import YouTube from 'react-youtube';
import Confetti from 'react-dom-confetti';
import { smallScreen as sc, vh, vw } from '../../../developerTools/developerTools';
import { NavigationBarHeight, osBxShadow } from '../../NavigationBar/NavigationBar';
import { Link, animateScroll } from 'react-scroll'
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;

// Somewhere else, even another file

let ONCEonPlayPokemon = true


export const _videoPokemon: React.FunctionComponent<{}> = (conf) => {

    const smallScreen = sc()

    //THROW CONFETTI LOGIC//
    // automatic throw confetti
    let [confetti, ºconfetti] = useState<boolean>(false)
    async function throwConfetti() {
        await ºconfetti(true)
        ºconfetti(false)
    }

    //manual throw confetti
    //1) Throw
    let [moreConfetti, ºmoreConfetti] = useState<boolean>(false)
    async function throwMoreConfetti() {
        await ºmoreConfetti(true)
        await ºmoreConfetti(false)
        await ºmoreConfettiLoading(true)
        await setTimeout(() => ºmoreConfettiLoading(false), smallScreen ? 2000 : 2000)
    }
    //2) Show
    let [showMoreConfetti, ºshowMoreConfetti] = useState<boolean>(false)
    //3) Load more confetti
    let [moreConfettiLoading, ºmoreConfettiLoading] = useState<boolean>(false)


    // alert(vw(65) * 9 / 16)
    //SCOLL+PLAYSTYLES onStateChange, in the moment TOUCH the player, do this. Give styles and scroll
    let [playpokemon, setPlaypokemon] = useState<boolean>(false)
    async function onStateChangepokemon() {
        if (playpokemon) return null

        setPlaypokemon(true)
        if (smallScreen === false) {
            const heightOfVideo = (vw(65) * 9 / 16) + 10//5px de cada lado por el border! //the height is ratio-proportional at width!, and width value is 65 (see scss associate)
            //     offset: (-1) * (vh(NavigationBarHeight) + ((vh(100 - NavigationBarHeight) - heightOfVideo) / 2))
            scroller.scrollTo('pokemonTitle', {
                duration: 300,
                delay: 0,
                smooth: true,
                offset: vh(-NavigationBarHeight)
            })
        }
        else if (smallScreen === true) {
            const heightOfVideo = (vw(95) * 9 / 16) + 10//5px de cada lado por el border! //the height is ratio-proportional at width!, and width value is 65 (see scss associate)

            scroller.scrollTo('pokemonVideo', {
                duration: 300,
                delay: 0,
                smooth: true,
                offset: (-1) * (((vh(100 - NavigationBarHeight) - heightOfVideo) / 2))
            })
        }
    }

    //onYotube video onClick event (auto throw confetti + show manual throw confetti button) (play isn't instantaneus like stateChange)
    async function onPlayPokemon() {
        if (ONCEonPlayPokemon) {
            ONCEonPlayPokemon = false

            setTimeout(() => { throwConfetti() }, 600)
            setTimeout(() => { ºshowMoreConfetti(true) }, 2600);
        }
    }

    const scale = 0.8
    const _vw = vw(scale)
    const _vh = vh(scale)
    const goodSquare = _vw > _vh ? _vw : _vh
    const useGoodSquare = smallScreen ? (goodSquare) : goodSquare * .6

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 50,
        elementCount: smallScreen ? 50 : 200,
        dragFriction: smallScreen ? 0.2 : 0.1,
        duration: 3000,
        stagger: 3,
        width: useGoodSquare + "px",
        height: useGoodSquare + "px",
        perspective: "568px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };
    //en of throw confetti logic//

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////RETURN//////////////////////////////////////////////////////////
    ///////////////////////////////////////////RETURN///////////////////////////////////////////////////
    ///////////////////////////////////////////////////RETURN///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    return (<div id={Style.container} style={{ marginTop: sc() ? "1rem" : NavigationBarHeight + osBxShadow + "vh" }} >


        {/* end of confetti things */}
        <div id={Style.pokemonContainer} >



            <Element name="pokemonTitle">
                <h2>Pokémon SPA</h2>
            </Element>
            <div style={{ marginLeft: "-4vh" }}>
                <Confetti active={confetti} config={config} />
            </div>

            {/* Manual confetti */}
            <div style={{ marginLeft: "-4vh", zIndex: 0 }}>
                <Confetti active={moreConfetti} config={config} />
            </div>
            <YouTube
                videoId={"ClixPTnX71o"}
                onStateChange={onStateChangepokemon}
                onPlay={onPlayPokemon}
                className={playpokemon ? Style.youtubeVideoPlay : Style.youtubeVideo}
                opts={{

                    playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        controls: 2,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0
                    },
                }}
            />

            {
                showMoreConfetti && !moreConfettiLoading ?
                    <button id={Style.moreConfetti} onClick={throwMoreConfetti}></button>
                    :
                    showMoreConfetti && moreConfettiLoading ?

                        <svg id={Style.moreConfettiLoading} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "none", display: "block", shapeRendering: "auto" }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#4877be" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
                                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                            </circle>
                        </svg>

                        :
                        null
            }


        </div>

        {/* <div style={{ position: "fixed", left: "260px", top: vh(NavigationBarHeight), height: "36.56vw", width: vw(65) + "px", margin: "auto", backgroundColor: "gray", }}>Rule! vw(65)</div>


        <div style={{ position: "fixed", left: "260px", top: vh(NavigationBarHeight) + vw(36.56), height: vh(3), width: vw(10) + "px", margin: "auto", backgroundColor: "greenyellow", }}>Rule! vw(65)</div> */}
    </div >)
}