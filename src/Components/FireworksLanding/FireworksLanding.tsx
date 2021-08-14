import React, { useState } from 'react'
import Style from './FireworksLanding.module.scss'
import { Fireworks } from 'fireworks-js/dist/react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


const options = {
    ...JSON.parse(`{
    "hue": {
        "min": 0,
        "max": 360
    },
    "delay": {
        "min": 15,
        "max": 30
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
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion1.mp3",
            "https://crashmax-dev.github.io/fireworks-js/sounds/explosion2.mp3"
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
    let fireButton: any;
    useEffect(() => {
        console.log('Aca!')
        fireButton = document.getElementById("fire")
        if (fireButton) {
            fireButton.style.border = "300px solid grey"
            fireButton = document.getElementById("fire")
        }
    }, [])

    // fireButton.style.border = "300px solid grey"

    // const [randomColors, ªrandomColors] = useState<boolean>(false)
    // function randomizeColors() {
    //     const randomColorDecimal = Math.round(Math.random() * 16777215)
    //     const randomColorHexa = "#" + randomColorDecimal.toString(16)
    //     if (fireButton) {
    //         fireButton.style.border = "1px solid " + randomColorHexa
    //     }
    // }

    const [fireWorks, ªfireWorks] = useState<boolean>(false)

    return (<div id={Style.FireworksLanding} >

        {fireWorks ?
            <>
                <Fireworks options={options} style={{ ...style, filter: "sepia(.5) brightness(2)" }} />
            </>
            :
            null
        }

        <button onClick={() => ªfireWorks(true)} id={fireWorks ? Style.fireBye : Style.fire} />

        <img id={Style.moon} src="https://i.imgur.com/FztASHt.jpg" />
        {/* <div id={Style.fireContainer}> */}
        {/* </div> */}
    </div>)
}