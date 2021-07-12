import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthProvider'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function User() {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { currentUser, logout } = useAuth()

    async function handleLogout(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await logout(currentUser)
        } catch (err) {
            const error = err.message
            setError(error)
        }
        setLoading(false)
    }

    return (
        <div className="action-panel_user text-white">
            <div className="action-panel_row action-panel_row--message">
                <p className="m-0">Salut, {currentUser.email}</p>
            </div>
            <div className="action-panel_row action-panel_row--navigation">
                <nav className="nav nav--profile">
                    <ul className="nav_level1">
                        <li>
                            <Link to="/none">My Account</Link>
                        </li>
                        <li>
                            <Link to="/none">My Orders</Link>
                        </li>
                        <li>
                            <Link to="/none">Favorites</Link>
                        </li>
                        <li>
                            <Link to="/none">Personal Data</Link>
                        </li>
                        <li>
                            <Link to="/none">Security Settings</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="action-panel_row action-panel_row--logout">
                <Button variant="secondary" className="text-white w-100" disabled={loading} onClick={handleLogout}>Log out</Button>
            </div>  
        </div>
    )
}
