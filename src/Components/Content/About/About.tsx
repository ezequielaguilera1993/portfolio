import React from 'react'
import { iWantCarJumps } from '../../../developerTools/developerTools'
import Style from './About.module.scss'
import { icons } from './Logos'
export const About: React.FunctionComponent<{}> = () => {


    return (<div id={Style.About} >


        <div id={Style.title}>~Sobre mi~</div>

        <div id={Style.picANDdescription}>
            {/* <div id={Style.description} >
                {
                    iWantCarJumps(about, "div")
                }
            </div> */}

            <p id={Style.titleDescription} >✨ Ezequiel Aguilera ✨</p>

            <img alt="Imágen de Ezequiel Aguilera, el propietario de este portfolio. Joven buen mozo y pelirrojo jaja. No pero hablando en serio es bien guapo" src="https://i.imgur.com/A5s3OuY.png?2" />
            <p id={Style.description} >Full Stack Web Developer, apasionado de la programación, valoro mucho el trabajo en equipo por haber vivido muy lindas experiencias que me enriquecieron como persona</p>
        </div>

        <p id={Style.TitleTechkills} >~Tech kills~</p>

        <p> | Typescript | Javascript | Git | React | Redux | HTML | Sass | CSS | Figma | NodeJs  | Express | Postman | PostgreSQL | SQLite | Prisma | Sequelize | Kotlin | Babel | Electron | Firebase | </p>

        <div id={Style.logos} >
            {icons}
        </div>


    </div>)
}









