import React from 'react'
import { iWantCarJumps } from '../../../developerTools'
import Style from './About.module.css'
export const About: React.FunctionComponent<{}> = () => {
    const about = `✨ Full Stack Web Developer 💻🌎🌏
    Soy Ezequiel Aguilera y me apasiona programar💫
    Estudié medicina en la UBA🏛 pero en la programación encontré mi lugar ❤.
    
    • Técnico electromecánico e instructor de primeros auxilios⛑.
    
    • Curse hasta cuarto año de medicina, conocí gente muy linda que me enriqueció como persona, además aprendí muchísimo sobre voluntad de estudio y trabajo en equipo.
    
    ✨Empecé a interesarme en programación por curioso y encontré algo que sacaba las mejores cosas de mi, que a pesar de que era un desafío podía estudiarlo desvelandome y de forma apasionada. Hice un bootcamp muy intensivo en Henry que me abrió la cabeza y también las puertas a esta industria que me fascina rodeándome de un grupo de personas excelentes con las que comparto esta pasión.
    ✨ Manejo tecnologías como #TypeScript #JavaScript #HTML #React #Redux #Node #Express #CSS #LESS #Postgress #Sequelize #Prism`

    return (<div id={Style.About} >
        <h1>About</h1>

        <div >
            {
                iWantCarJumps(about, "br")
            }
        </div>
        <img src="https://i.imgur.com/A5s3OuY.png" width="30%" height="30%" />


    </div>)
}