import React, { useContext } from 'react'
import Style from './Contact.module.scss'
import { Form } from '../../UtilComponents/Form/Form'
import { ArcText } from '@arctext/react'
import { NavigationBarHeight, osBxShadow } from '../../NavigationBar/NavigationBar'
import { smallScreen as sc } from '../../../developerTools/developerTools'
import LanguageContext from '../../../Context/language'

export const Contact: React.FunctionComponent<{}> = () => {

    const inSpanish = useContext(LanguageContext).languageState.inSpanish



    return (<div id={Style.Contact} >
        <div id={Style.title} style={{ marginTop: sc() ? "1rem" : NavigationBarHeight + osBxShadow + "vh" }}>{inSpanish ? "~Contacto~" : '~Contact~'}</div>
        {console.log(inSpanish, 'inSpanish')}
        <div id={Style.contactButtons}>

            <div className={Style.curveButtonContainer}>
                <a href='https://wa.me/+541128676833' >
                    <ArcText
                        text={inSpanish ? "Enviar WhatsApp" : "Send WhatsApp"}
                        characterWidth={10}
                        radius={40}
                        className={Style.curveButton}
                    >
                        <img alt="icono de WhatsApp" id={Style.imgIcon} src='https://dailankifkisa.com/wp-content/uploads/2020/08/whatsapp.png' />

                    </ArcText>
                </a>
            </div>


            <div className={Style.curveButtonContainer}>
                <a href='mailto:ezequielaguilera1993@gmail.com' >
                    <ArcText
                        text={inSpanish ? "Enviar Mail" : 'Send Mail'}
                        characterWidth={10}
                        radius={40}
                        className={Style.curveButton}
                    >
                        <img alt="Icono de un mail" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/768px-Circle-icons-mail.svg.png' />

                    </ArcText>
                </a>
            </div>


            <div className={Style.curveButtonContainer}>
                <a href='tel:+541128676833' >
                    <ArcText
                        text={inSpanish ? "Llamar" : 'Call me'}
                        characterWidth={10}
                        radius={40}
                        className={Style.curveButton}
                    >
                        <img alt="icono de teléfono" src='https://i.imgur.com/l6Qe81D.png' style={{ filter: "brightness(1.4)" }} />
                    </ArcText>
                </a>
            </div>

        </div>


        <div id={Style.subTitles} >{inSpanish ? "~ Enviar una nota ~" : '~ Send a note ~'}</div>

        <Form />

    </div >)
}