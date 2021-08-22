import React, { useState } from 'react'
import Style from './FireworksLanding.module.scss'
import { Fireworks } from 'fireworks-js/dist/react'
// import { NavigationBarHeight } from '../NavigationBar/NavigationBar'
// import { animateScroll } from 'react-scroll'
// const goBottom = () => animateScroll.scrollToBottom({ duration: 1000 })






const options = {
    ...JSON.parse(`{
    "hue": {
        "min": 0,
        "max": 360
    },
    "delay": {
        "min": 20,
        "max": 45
    },
    "rocketsPoint": 30,
    "speed": 1,
    "acceleration": 1.5,
    "friction": 0.9,
    "gravity": 1.1,
    "particles": 124,
    "trace": 10,
    "explosion": 7,
    "autoresize": true,
    "brightness": {
        "min": 13,
        "max": 20,
        "decay": {
            "min": 0.006,
            "max": 0.016
        }
    },
    "boundaries": {
        "x": 50,
        "y": 50,
        "width": 1536,
        "height": 754,
        "visible": false
    },
    "sound": {
        "enable": true,
        "files": [
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion0.mp3",
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion2.mp3",
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion0.mp3",
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion2.mp3",
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion2.mp3",
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion0.mp3",
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion0.mp3",
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion1.mp3"
            
        ],
        "volume": {
            "min": 15,
            "max": 25
        }
    },
    "mouse": {
        "click": false,
        "move": false,
        "max": 1
    }
}`)
}



const style = {
    height: "100%",
}


export const FireworksLanding: React.FunctionComponent<{}> = () => {

    const [fireWorks, ªfireWorks] = useState<boolean>(false)

    return (<div id={Style.FireworksLanding} >



        {fireWorks ?
            <>
                <Fireworks options={options} style={{ ...style, filter: "sepia(.5) brightness(2)" }} />
            </>
            :
            null
        }

        <button style={{}} onClick={async () => { await ªfireWorks(!fireWorks) }} id={fireWorks ? Style.fireBye : Style.fire} />

        <div id={Style.gradientDiv} />

        <div id={Style.moonContainer}>
            <img alt="imágen de una luna enorme" id={Style.moon} src="https://i.imgur.com/FztASHt.jpg" />
        </div>

    </div>)
}