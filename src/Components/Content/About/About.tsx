import React from 'react'
import { iWantCarJumps } from '../../../developerTools/developerTools'
import Style from './About.module.scss'
export const About: React.FunctionComponent<{}> = () => {

    const about = `💫 Soy Ezequiel Aguilera y me apasiona programar
    ✨ Full Stack Web Developer 💻🌎🌏
    
    ~Tech kills~
    TypeScript•JavaScript
    •HTML•React•Redux•Node•Express•CSS
    •LESS•Postgress•Sequelize•Prism`

    return (<div id={Style.About} >

        <div id={Style.title}>~About me~</div>

        <div id={Style.picANDdescription}>
            <div id={Style.description} >
                {
                    iWantCarJumps(about, "br")
                }
            </div>
            <img id={Style.img} alt="Imágen de Ezequiel Aguilera, el propietario de este portfolio. Joven buen mozo y pelirrojo jaja. No pero hablando en serio es bien guapo" src="https://i.imgur.com/A5s3OuY.png" width="30%" height="30%" />
        </div>

    </div>)
}