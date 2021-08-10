import React, { useEffect, useState } from 'react'
import Style from './Portfolio.module.css'
import YouTube from 'react-youtube';
import emailjs from 'emailjs-com'
import { useForm, Resolver } from "react-hook-form";
import Confetti from 'react-dom-confetti';
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;


// Somewhere else, even another file


function sendMail() {
    emailjs.send("gmail", "template_2tshsrs", {
        name: "Riboer",
        mail: "asdasd",
        phone: "asdasd",
        message: "asdasdasd",
    }, "user_1aZLUJ4EJdglFQR5mfcZ1").then(() => alert("mail sended"))
        .catch(() => alert("error"))
}


export const Portfolio: React.FunctionComponent<{}> = (conf) => {
    //THROW CONFETTI//
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
        await setTimeout(() => ºmoreConfettiLoading(false), 1000)
    }
    //2) Show
    let [showMoreConfetti, ºshowMoreConfetti] = useState<boolean>(false)
    //3) Load more confetti
    let [moreConfettiLoading, ºmoreConfettiLoading] = useState<boolean>(false)

    //onYotube video onClick event (auto throw confetti + show manual throw confetti button)
    let [playAltabirra, setPlayAltaBirra] = useState<boolean>(false)

    async function onPlayAltaBirra() {
        if (playAltabirra === false) {
            setTimeout(() => { throwConfetti() }, 2200)
            setTimeout(() => { ºshowMoreConfetti(true) }, 3600);
        }

        setPlayAltaBirra(true)

        scroller.scrollTo('altaBirraVideo', {
            duration: 300,
            delay: 0,
            smooth: true,
            offset: window.screen.availHeight * -0.15, // Scrolls to element + 50 pixels down the page,
        })
    }



    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 50,
        elementCount: 300,
        dragFriction: 0.1,
        duration: 5000,
        stagger: 1,
        width: ".7rem",
        height: ".7rem",
        perspective: "568px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };
    //en of throw confetti logic//

    return (<div >


        {/* Auto Confeti */}
        {/* <div style={{ display: 'flex', justifyContent: "flex-end" }}>
            <Confetti active={confetti} config={config} />
        </div>
 */}
        <div style={{}}>
            <Confetti active={confetti} config={config} />
        </div>

        {/* Manual confetti */}
        <div style={{}}>
            <Confetti active={moreConfetti} config={{ ...config, elementCount: 300, duration: 2000, startVelocity: 40 }} />
        </div>


        {/* <div style={{ display: 'flex', justifyContent: "flex-end", zIndex: 1, position: "absolute" }} >
            <div style={{ width: "100px", height: "100px", backgroundColor: "#fff", zIndex: 1 }} ></div>
        </div> */}



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
        {/* end of confetti things */}

        <div id={Style.portfolio} >
            <h1>Portfolio</h1>

            <h2>AltaBirra</h2>
            <Element name="altaBirraVideo">

                <YouTube
                    videoId={"PGe7mLyGKsg"}
                    onStateChange={onPlayAltaBirra}
                    className={playAltabirra ? Style.youtubeVideoPlay : Style.youtubeVideo}
                />
            </Element>
            <h2>PokemonSPA</h2>


        </div>



    </div>)
}