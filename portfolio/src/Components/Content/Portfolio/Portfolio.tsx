import React, { useEffect, useState } from 'react'
import Style from './Portfolio.module.css'
import YouTube from 'react-youtube';
import emailjs from 'emailjs-com'
import { useForm, Resolver } from "react-hook-form";
import Confetti from 'react-dom-confetti';

function sendMail() {
    emailjs.send("gmail", "template_2tshsrs", {
        name: "Riboer",
        mail: "asdasd",
        phone: "asdasd",
        message: "asdasdasd",
    }, "user_1aZLUJ4EJdglFQR5mfcZ1").then(() => alert("mail sended"))
        .catch(() => alert("error"))
}


export const Portfolio: React.FunctionComponent<{}> = () => {

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
        await setPlayAltaBirra(!playAltabirra)
        await setTimeout(() => { throwConfetti() }, 1680)
        await setTimeout(() => { ºshowMoreConfetti(true) }, 2680);
    }

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 50,
        elementCount: 300,
        dragFriction: .1,
        duration: 5000,
        stagger: 2,
        width: "10px",
        height: "10px",
        perspective: "568px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };
    //en of throw confetti//

    return (<div >

        {/* Auto Confeti */}
        <div style={{ marginLeft: "100%", }}>
            <Confetti active={confetti} config={config} />
        </div>

        <div style={{}}>
            <Confetti active={confetti} config={config} />
        </div>

        {/* Manual confetti */}
        <div style={{ position: "absolute", marginLeft: "50vw", top: "-20vh" }}>
            <Confetti active={moreConfetti} config={{ ...config, elementCount: 400, duration: 2000, startVelocity: 80 }} />
        </div>
        {
            showMoreConfetti && !moreConfettiLoading ?
                <button id={Style.moreConfetti} onClick={throwMoreConfetti} />
                :
                showMoreConfetti && moreConfettiLoading ?
                    <svg id={Style.moreConfettiLoading} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "none", display: "block", shapeRendering: "auto" }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#4877be" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                        </circle>
                        asd </svg>
                    :
                    null
        }


        <div id={Style.portfolio} >
            <h1>Portfolio</h1>

            <h2>AltaBirra</h2>

            <YouTube
                videoId={"PGe7mLyGKsg"}
                onPlay={onPlayAltaBirra}
                onStateChange={() => console.log("as")}
                className={playAltabirra ? Style.youtubeVideoPlay : Style.youtubeVideo}
            />

            <h2>PokemonSPA</h2>


        </div>



    </div>)
}