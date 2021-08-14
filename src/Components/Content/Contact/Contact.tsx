import React, { Component } from 'react'
import Style from './Contact.module.scss'
import { Form } from '../../UtilComponents/Form/Form'
import { WhatsAppFloatButton } from '../../UtilComponents/WhatsAppFloatButton/WhatsAppFloatButton'

import { ArcText } from '@arctext/react'



export const Contact: React.FunctionComponent<{}> = () => {
    return (<div id={Style.Contact} >
        <div id={Style.title}>~Contacto~</div>



        <div id={Style.contactButtons}>

            <div className={Style.rotateText}>
                <ArcText
                    text="Enviar WhatsApp"
                    characterWidth={10}
                    radius={40}
                    className={Style.curveButtons}
                >
                    <a href='https://wa.me/+541128676833' ><img src='https://dailankifkisa.com/wp-content/uploads/2020/08/whatsapp.png' /></a>

                </ArcText>
            </div>
            <div className={Style.rotateText}>
                <ArcText
                    text="Enviar Mail"
                    characterWidth={10}
                    radius={40}
                    className={Style.curveButtons}
                >
                    <a href='mailto:ezequielaguilera1993@gmail.com' ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/768px-Circle-icons-mail.svg.png' /></a>

                </ArcText>
            </div>
            <div className={Style.rotateText}>
                <ArcText
                    text="Llamar"
                    characterWidth={10}
                    radius={40}
                    className={Style.curveButtons}
                >
                    <a href='tel:+541128676833' ><img src='https://i.imgur.com/l6Qe81D.png' style={{ filter: "brightness(1.4)" }} /></a>

                </ArcText>
            </div>

        </div>


        <div id={Style.subTitles} >~ Enviar una nota ~</div>

        <Form />

    </div >)
}