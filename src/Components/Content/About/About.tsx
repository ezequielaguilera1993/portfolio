import React from 'react'
import { iWantCarJumps } from '../../../developerTools/developerTools'
import Style from './About.module.scss'
export const About: React.FunctionComponent<{}> = () => {
    const about = `✨ Full Stack Web Developer 💻🌎🌏
    Soy Ezequiel Aguilera y me apasiona programar💫
    Mi principal motor es que amo este trabajo ♥
    ✨ Manejo tecnologías como #TypeScript #JavaScript #HTML #React #Redux #Node #Express #CSS #LESS #Postgress #Sequelize #Prism`

    return (<div id={Style.About} >

        <div id={Style.tittle} >
            <div id={Style.titleForeground}>About me</div>
            <div id={Style.tittleBackground} />
        </div>

        <div id={Style.picANDdescription}>
            <div id={Style.description} >
                {
                    iWantCarJumps(about, "br")
                }
            </div>
            <img id={Style.img} alt="Imágen de Ezequiel Aguilera, el propierario de este portfolio. Joven buen mozo y pelirrojo jaja. No pero hablando en serio es bien guapo" src="https://i.imgur.com/A5s3OuY.png" width="30%" height="30%" />
        </div>

    </div>)
}