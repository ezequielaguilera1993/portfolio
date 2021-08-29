import { ArcText } from '@arctext/react'
import React, { useContext } from 'react'
import LanguageContext from '../../../Context/language'
import { smallScreen } from '../../../developerTools/developerTools'
import Style from './About.module.scss'
import { icons } from './Logos'
export const About: React.FunctionComponent<{}> = () => {
    const inSpanish = useContext(LanguageContext).languageState.inSpanish
    const languageContext = useContext(LanguageContext)
    return (<div id={Style.About} >

        {console.log(inSpanish, 'inSpanish')}

        <div id={Style.title}>{inSpanish ? '~Sobre mí~' : '~About me~'}</div>
        <div id={Style.subTitles} >{inSpanish ? '~ Presentación ~' : '~ Presentation ~'}</div>

        {smallScreen() ?

            (
                inSpanish ?
                    <div className={Style.upToogleLanguage} onClick={() => { languageContext.languageDispatch({ type: "CHANGE_LANGUAGE" }) }}>
                        <div>
                            <div className={Style.label}>Change</div>
                            <div className={Style.label}>language</div>
                        </div>
                        <img src="https://i.imgur.com/9BXuQig.jpg" />

                    </div>

                    :

                    <div className={Style.upToogleLanguage} onClick={() => { languageContext.languageDispatch({ type: "CHANGE_LANGUAGE" }) }}>
                        <div>
                            <div className={Style.label}>Change</div>
                            <div className={Style.label}>language</div>
                        </div>
                        <img src="https://i.imgur.com/fM5lDzY.jpg" />
                    </div>


            ) : null
        }




        <div id={Style.imgANDdescription}>
            {
                !smallScreen() ?
                    (
                        inSpanish ?
                            <div className={Style.curveButtonContainer} onClick={() => { languageContext.languageDispatch({ type: "CHANGE_LANGUAGE" }) }} >
                                <ArcText
                                    text="Change language"
                                    characterWidth={9}
                                    radius={35}
                                    className={Style.curveButton}
                                >
                                    <img className={Style.toogleRockLanguage} src="https://i.imgur.com/9BXuQig.jpg" />
                                </ArcText>
                            </div>

                            :

                            <div className={Style.curveButtonContainer} onClick={() => { languageContext.languageDispatch({ type: "CHANGE_LANGUAGE" }) }} >
                                <ArcText
                                    text="Cambiar de idioma"
                                    characterWidth={9}
                                    radius={35}
                                    className={Style.curveButton}
                                >
                                    <img className={Style.toogleRockLanguage} onClick={() => { languageContext.languageDispatch({ type: "CHANGE_LANGUAGE" }) }} src="https://i.imgur.com/fM5lDzY.jpg" />
                                </ArcText>
                            </div>
                    )
                    :
                    null


            }

            <img id={Style.perfil} alt="Imágen de Ezequiel Aguilera, el propietario de este portfolio. Joven buen mozo y pelirrojo jaja. No pero hablando en serio es bien guapo" src="https://i.imgur.com/A5s3OuY.png?3" />
            <div className={Style.descriptionContainer}>
                <div className={Style.description} >{inSpanish ? '✨ Soy Ezequiel Aguilera' : '✨ I am Ezequiel Aguilera'}
                </div>
                <div style={{ marginLeft: ".5rem" }} className={Style.description} >Full Stack Web Developer.
                </div>
                <div style={{ marginLeft: "0rem" }} className={Style.description} >

                    {inSpanish ? 'Apasionado de la programación, valoro mucho el trabajo en equipo por haber vivido muy lindas experiencias que me enriquecieron como persona y también como desarrollador.'
                        :
                        'Passionate about programming, I really value teamwork for having lived very nice experiences that enriched me as a person and also as a developer.'
                    }
                </div>
            </div>


        </div>



        <div id={Style.subTitles} >~ Tech skills ~</div>


        <div id={Style.logos} >
            {icons}
        </div>
        <p> | Typescript | Javascript | Git | React | Redux | HTML | Sass | CSS | Figma | NodeJs  | Express | Postman | PostgreSQL | SQLite | Prisma | Sequelize | Kotlin | Babel | Electron | Firebase | </p>


    </div>)
}
