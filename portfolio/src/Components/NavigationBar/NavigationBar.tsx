

import React from 'react'
import { Link } from 'react-router-dom'
import Style from './NavigationBar.module.css'
export const NavigationBar: React.FunctionComponent<{}> = () => {

    return (
        <div id={Style.container}>
            <Link to="/About">About </Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contact">Contact</Link>
        </div >
    )
}