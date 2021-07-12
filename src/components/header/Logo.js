import React from 'react'
import logo from '../../bookstore.svg'

export default function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Bookstore" className="mw-100"/>
        </div>
    )
}
