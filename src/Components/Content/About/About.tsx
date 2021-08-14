import React from 'react'
import { iWantCarJumps } from '../../../developerTools/developerTools'
import Style from './About.module.scss'
import { icons } from './Logos'
export const About: React.FunctionComponent<{}> = () => {


    return (<div id={Style.About} >


        <div id={Style.title}>~Sobre mi~</div>

        <div id={Style.subTitles} >~ Presentación ~</div>
        <div id={Style.imgANDdescription}>
            {/* <div id={Style.description} >
                {
                    iWantCarJumps(about, "div")
                }
            </div> */}
            <img alt="Imágen de Ezequiel Aguilera, el propietario de este portfolio. Joven buen mozo y pelirrojo jaja. No pero hablando en serio es bien guapo" src="https://i.imgur.com/A5s3OuY.png?3" />
            <div className={Style.descriptionContainer}>
                <div className={Style.description} >✨ Soy Ezequiel Aguilera
                </div>
                <div style={{ marginLeft: ".5rem" }} className={Style.description} >Full Stack Web Developer.
                </div>
                <div style={{ marginLeft: "0rem" }} className={Style.description} >
                    Apasionado de la programación, valoro mucho el trabajo en equipo por haber vivido muy lindas experiencias que me enriquecieron como persona y también como desarrollador.</div>
            </div>
        </div>



        <div id={Style.subTitles} >~ Tech kills ~</div>


        <div id={Style.logos} >
            {icons}
        </div>
        <p> | Typescript | Javascript | Git | React | Redux | HTML | Sass | CSS | Figma | NodeJs  | Express | Postman | PostgreSQL | SQLite | Prisma | Sequelize | Kotlin | Babel | Electron | Firebase | </p>


    </div>)
}









