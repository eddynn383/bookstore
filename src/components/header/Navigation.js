import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className="nav nav--main align-items-center ps-4" style={{width: "calc(100% - 234px)"}}>
            <ul className="nav_level1">
                <li>
                    <Link to="/none">Best Seller</Link>
                </li>
                <li>
                    <Link to="/none">Recent Published</Link>
                </li>
                <li>
                    <Link to="/none">Favorites</Link>
                </li>
            </ul>
        </nav>
    )
}
