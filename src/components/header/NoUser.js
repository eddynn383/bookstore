import React from 'react'
import { Link } from 'react-router-dom'

export default function NoUser() {
    return (
        <div className="action-panel_no-user">
            <div className="action-panel_text">
                <p className="m-0 text-white text-center">Please login to have full access to our platform.</p>
            </div>
            <div className="action-panel_btns">
                <Link to="/login" className="btn btn-primary text-white text-uppercase shadow-sm">Login</Link>
                <span className="action-panel_btns-separator">- or -</span>
                <Link to="/signup" className="btn btn-secondary text-white text-uppercase shadow-sm">Signup</Link>
            </div>
        </div>
    )
}
