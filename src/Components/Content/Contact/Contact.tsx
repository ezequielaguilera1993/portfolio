import React from 'react'
import Style from './Contact.module.scss'
import { Form } from '../../UtilComponents/Form/Form'
import { ArcText } from '@arctext/react'
import { NavigationBarHeight, osBxShadow } from '../../NavigationBar/NavigationBar'
import { smallScreen as sc } from '../../../developerTools/developerTools'

export const Contact: React.FunctionComponent<{}> = () => {
    return (<div id={Style.Contact} >
        <div id={Style.title} style={{ marginTop: sc() ? "1rem" : NavigationBarHeight + osBxShadow + "vh" }}>~Contacto~</div>



        <div id={Style.contactButtons}>

            <div className={Style.curveButtonContainer}>
                <a href='https://wa.me/+541128676833' >
                    <ArcText
                        text="Enviar WhatsApp"
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
                        text="Enviar Mail"
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
                        text="Llamar"
                        characterWidth={10}
                        radius={40}
                        className={Style.curveButton}
                    >
                        <img alt="icono de teléfono" src='https://i.imgur.com/l6Qe81D.png' style={{ filter: "brightness(1.4)" }} />
                    </ArcText>
                </a>
            </div>

        </div>


        <div id={Style.subTitles} >~ Enviar una nota ~</div>

        <Form />

    </div >)
}