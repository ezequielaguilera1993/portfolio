import React from 'react'
import Style from './Contact.module.scss'
import { Form } from './Form/Form'
export const Contact: React.FunctionComponent<{}> = () => {

    return (<div id={Style.Contact} >
        <div id={Style.title}>~Contact~</div>
        <Form />

    </div>)
}