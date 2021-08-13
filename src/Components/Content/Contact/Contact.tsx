import React from 'react'
import Style from './Contact.module.scss'
import { Form } from './Form/Form'
export const Contact: React.FunctionComponent<{}> = () => {

    return (<div id={Style.Contact} >
        <h1>Contact</h1>
        <Form />

    </div>)
}