import React, { useState } from 'react'
import Style from './FireworksLanding.module.scss'
import { Fireworks } from 'fireworks-js/dist/react'
import { smallScreen } from '../../developerTools/developerTools'
// import { NavigationBarHeight } from '../NavigationBar/NavigationBar'
// import { animateScroll } from 'react-scroll'
// const goBottom = () => animateScroll.scrollToBottom({ duration: 1000 })






const options = JSON.parse(`{
    "hue": {
        "min": 0,
        "max": 345
    },
    "delay": {
        "min": 5,
        "max": 50
    },
    "rocketsPoint": ${smallScreen() ? 10 : 50},
    "speed": 1,
    "acceleration": 1.1,
    "friction": 0.9500000000000001,
    "gravity": 1.5,
    "particles": 182,
    "trace": 10,
    "explosion": 10,
    "autoresize": true,
    "brightness": {
        "min": 50,
        "max": 80,
        "decay": {
            "min": 0.015,
            "max": 0.03
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
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion1.mp3",
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion2.mp3"
        ],
        "volume": {
            "min": 4,
            "max": 8
        }
    },
    "mouse": {
        "click": false,
        "move": false,
        "max": 1
    }
}`)



const style = {
    height: "100%",
}


export const FireworksLanding: React.FunctionComponent<{}> = () => {

    const [fireWorks, ªfireWorks] = useState<boolean>(false)

    return (<div id={Style.FireworksLanding} >



        {fireWorks ?
            <>
                <Fireworks options={options} style={{ ...style, filter: "sepia(0.2) brightness(1)" }} />
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