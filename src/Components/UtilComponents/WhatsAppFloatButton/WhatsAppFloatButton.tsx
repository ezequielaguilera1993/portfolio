import React from 'react'
import { JsxChild, JsxElement } from 'typescript'
interface iWhatsAppFloatButton {
    number: string;
    message?: string;
    Children: React.FunctionComponent
}

/**
 If you wanna put an image, this its a template fot Children prop
@example
() => <img
        style={{
          position: "fixed",
          right: "5px",
          bottom: "5px",
          width: "10vh",
          height: "10vh",
        }} src="https://dailankifkisa.com/wp-content/uploads/2020/08/whatsapp.png" />

**/
export const WhatsAppFloatButton: React.FunctionComponent<iWhatsAppFloatButton> = ({ number, message = "", Children }) => {

    const whatsappUri = `https://wa.me/${number}?text=${message}`

    return (<>

        <a href={whatsappUri} >
            <Children />
        </a>

    </>)
}